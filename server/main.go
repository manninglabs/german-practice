package main

import (
	"os"
	"runtime"

	"github.com/seenickcode/german-practice/core"
	"github.com/seenickcode/german-practice/proto"
)

type ResponseErr struct {
	Msg string `json:"msg"`
}

func main() {
	runtime.GOMAXPROCS(runtime.NumCPU())

	core := core.New(os.Getenv("DB_HOST"), os.Getenv("DB_NAME"), os.Getenv("DB_PASSWORD"))

	protoService := proto.New(core)
	protoService.Listen(50051)
	defer protoService.Close()
}
