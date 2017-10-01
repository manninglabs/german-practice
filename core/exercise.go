package core

import (
	"fmt"
	"log"
	"reflect"
	"time"
)

//go:generate reform

//reform:exercises
type Exercise struct {
	ID         int64     `reform:"id,pk" json:"id"`
	Title      string    `reform:"title" json:"title"`
	Topic      string    `reform:"topic" json:"topic"`
	InsertedAt time.Time `reform:"inserted_at" json:"inserted_at"`
	UpdatedAt  time.Time `reform:"updated_at" json:"updated_at"`
	Questions []*Question
}

func ListExercises(c *Core) (objs []*Exercise, err error) {
	log.Printf("listing %vs", reflect.TypeOf(Exercise{}))
	structs, err := c.DB.SelectAllFrom(ExerciseTable, "")
	if err != nil {
		return
	}
	objs = []*Exercise{}
	for _, s := range structs {
		objs = append(objs, s.(*Exercise))
	}
	return
}

func FetchExercise(c *Core, id int64) (exercise *Exercise, err error) {
	obj := &Exercise{}
	log.Printf("fetching %v %+v", reflect.TypeOf(obj), id)
	if err := c.DB.FindByPrimaryKeyTo(obj, id); err != nil {
		return nil, err
	}
	exercise = obj
	return
}

func CreateExercise(c *Core, obj *Exercise) (newExercise *Exercise, err error) {
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
	newExercise = obj
	return
}

func UpdateExercise(c *Core, obj *Exercise) (updatedExercise *Exercise, err error) {
	log.Printf("creating %v: %+v", reflect.TypeOf(obj), obj)

	if valid, msg := obj.IsValid(false); !valid {
		return nil, fmt.Errorf(msg)
	}

	oldObj, err := FetchExercise(c, obj.ID)
	if err != nil {
		return
	}

	// set fields
	now := time.Now().UTC()
	oldObj.Title = obj.Title
	oldObj.Topic = obj.Topic
	oldObj.UpdatedAt = now
	oldObj.InsertedAt = now

	// save
	log.Printf("updating %v: %+v", reflect.TypeOf(oldObj), oldObj)
	if err := c.DB.Save(oldObj); err != nil {
		return nil, err
	}
	updatedExercise = oldObj
	return
}

func DeleteExercise(c *Core, id int64) (err error) {
	obj, err := FetchExercise(c, id)
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

func (obj Exercise) IsValid(isNew bool) (valid bool, msg string) {
	if len(obj.Title) == 0 {
		return false, "title required"
	}
	return true, ""
}
