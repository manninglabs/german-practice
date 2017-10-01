package core

import (
	"fmt"
	"log"
	"reflect"
	"time"
)

//go:generate reform

//reform:questions
type Question struct {
	ID         int64     `reform:"id,pk" json:"id"`
	ExerciseID int64     `reform:"exercise_id" json:"exercise_id"`
	Text       string    `reform:"text" json:"text"`
	Answer     string    `reform:"answer" json:"answer"`
	InsertedAt time.Time `reform:"inserted_at" json:"inserted_at"`
	UpdatedAt  time.Time `reform:"updated_at" json:"updated_at"`
}

func ListQuestions(c *Core, exerciseID int64) (objs []*Question, err error) {
	log.Printf("listing %vs for FK ID %v", reflect.TypeOf(Question{}), exerciseID)
	if exerciseID <= 0 {
		return objs, fmt.Errorf("exericse ID required")
	}
	tail := fmt.Sprintf("WHERE exercise_id = %s ORDER BY ID", c.DB.Placeholder(1))
	structs, err := c.DB.SelectAllFrom(QuestionTable, tail, exerciseID)
	if err != nil {
		return
	}
	objs = []*Question{}
	for _, s := range structs {
		objs = append(objs, s.(*Question))
	}
	return
}

func FetchQuestion(c *Core, id int64) (question *Question, err error) {
	obj := &Question{}
	log.Printf("fetching %v %+v", reflect.TypeOf(obj), id)
	if err := c.DB.FindByPrimaryKeyTo(obj, id); err != nil {
		return nil, err
	}
	question = obj
	return
}

func CreateQuestion(c *Core, obj *Question) (newQuestion *Question, err error) {
	log.Printf("creating %v: %+v", reflect.TypeOf(obj), obj)

	if valid, msg := obj.IsValid(true); !valid {
		return nil, fmt.Errorf(msg)
	}

	// set fields
	now := time.Now().UTC()
	obj.UpdatedAt = now
	obj.InsertedAt = now

	if err := c.DB.Save(obj); err != nil {
		return nil, err
	}
	newQuestion = obj
	return
}

func UpdateQuestion(c *Core, obj *Question) (updatedQuestion *Question, err error) {
	log.Printf("creating %v: %+v", reflect.TypeOf(obj), obj)

	if valid, msg := obj.IsValid(false); !valid {
		return nil, fmt.Errorf(msg)
	}

	oldObj, err := FetchQuestion(c, obj.ID)
	if err != nil {
		return
	}

	// set fields
	now := time.Now().UTC()
	oldObj.Text = obj.Text
	oldObj.Answer = obj.Answer
	oldObj.UpdatedAt = now
	oldObj.InsertedAt = now

	// save
	log.Printf("updating %v: %+v", reflect.TypeOf(oldObj), oldObj)
	if err := c.DB.Save(oldObj); err != nil {
		return nil, err
	}
	updatedQuestion = oldObj
	return
}

func DeleteQuestion(c *Core, id int64) (err error) {
	obj, err := FetchQuestion(c, id)
	if err != nil {
		return
	}

	// delete
	log.Printf("deleting %v: %+v", reflect.TypeOf(obj), obj)
	if err := c.DB.Delete(obj); err != nil {
		return err
	}
	return
}

func (obj Question) IsValid(isNew bool) (valid bool, msg string) {
	if obj.ExerciseID <= 0 {
		return false, "exercise ID required"
	}
	if len(obj.Text) == 0 {
		return false, "text required"
	}
	if len(obj.Answer) == 0 {
		return false, "answer required"
	}
	return true, ""
}
