package proto

import (
	fmt "fmt"
	"net"
	"net/http"
	"os"

	"log"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/seenickcode/german-practice/core"
	"github.com/urfave/negroni"
	context "golang.org/x/net/context"
	grpc "google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

// Proto implements our protobuf server service functions.
// It holds a pointer to core so that core business logic may be still invoked
type Proto struct {
	core   *core.Core
	server *grpc.Server
}

func New(c *core.Core) *Proto {
	p := &Proto{}
	p.core = c
	return p
}

func (p *Proto) Listen(port int) {
	log.Println("starting gRPC service")

	portStr := fmt.Sprintf(":%d", port)
	lis, err := net.Listen("tcp", portStr)
	if err != nil {
		log.Fatalf("gRPC service failed to listen: %v", err)
	}

	p.server = grpc.NewServer()
	RegisterServiceServer(p.server, p)
	reflection.Register(p.server)

	// use grpcweb to open a proxy HTTP port for our gRPC server
	wrappedGrpc := grpcweb.WrapServer(p.server)
	mux := http.NewServeMux()
	mux.HandleFunc("/", http.HandlerFunc(func(resp http.ResponseWriter, req *http.Request) {
		wrappedGrpc.ServeHTTP(resp, req)
	}))
	n := negroni.Classic() // Includes some default middlewares
	n.UseHandler(mux)
	go func() {
		port := 8080
		log.Printf("listening on HTTP port %v\n", port)
		http.ListenAndServe(fmt.Sprintf(":%v", port), n)
	}()

	// start our gRPC server
	log.Println("starting gRPC server")
	if err := p.server.Serve(lis); err != nil {
		log.Fatalf("gRPC service failed to serve: %v", err)
	}

}

func (p *Proto) Close() {
	log.Println("closing proto service")
	if p.server != nil {
		p.server.GracefulStop()
		log.Println("stopped gRPC server")
	}
}

func (p *Proto) APIVersion(ctx context.Context, _ *BlankQuery) (*StringMessage, error) {
	return &StringMessage{Body: os.Getenv("API_VERSION")}, nil
}

func (p *Proto) ListExercises(ctx context.Context, _ *BlankQuery) (*ExercisesList, error) {
	objs, err := core.ListExercises(p.core)
	if err != nil {
		return nil, err
	}
	list := []*Exercise{}
	for _, obj := range objs {
		protoObj := _coreExerciseToProtoExercise(obj)
		list = append(list, protoObj)
	}
	return &ExercisesList{Exercises: list}, nil
}

func (p *Proto) FetchExercise(ctx context.Context, q *IDQuery) (*Exercise, error) {
	obj, err := core.FetchExercise(p.core, q.Id)
	if err != nil {
		return nil, err
	}
	// hydrate
	subObjs, err := core.ListQuestions(p.core, q.Id)
	if err != nil {
		return nil, err
	}
	obj.Questions = subObjs
	return _coreExerciseToProtoExercise(obj), nil
}

func _coreExerciseToProtoExercise(obj *core.Exercise) *Exercise {
	newObj := &Exercise{
		Id:        obj.ID,
		Title:     obj.Title,
		Topic:     obj.Topic,
		Questions: []*Question{},
	}
	for _, q := range obj.Questions {
		newObj.Questions = append(newObj.Questions, _coreQuestionToProtoQuestion(q))
	}
	return newObj
}

func _coreQuestionToProtoQuestion(obj *core.Question) *Question {
	return &Question{
		Id:         obj.ID,
		ExerciseId: obj.ExerciseID,
		Text:       obj.Text,
		Answer:     obj.Answer,
	}
}
