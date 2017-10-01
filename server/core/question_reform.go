package core

// generated with gopkg.in/reform.v1

import (
	"fmt"
	"strings"

	"gopkg.in/reform.v1"
	"gopkg.in/reform.v1/parse"
)

type questionTableType struct {
	s parse.StructInfo
	z []interface{}
}

// Schema returns a schema name in SQL database ("").
func (v *questionTableType) Schema() string {
	return v.s.SQLSchema
}

// Name returns a view or table name in SQL database ("questions").
func (v *questionTableType) Name() string {
	return v.s.SQLName
}

// Columns returns a new slice of column names for that view or table in SQL database.
func (v *questionTableType) Columns() []string {
	return []string{"id", "exercise_id", "text", "answer", "inserted_at", "updated_at"}
}

// NewStruct makes a new struct for that view or table.
func (v *questionTableType) NewStruct() reform.Struct {
	return new(Question)
}

// NewRecord makes a new record for that table.
func (v *questionTableType) NewRecord() reform.Record {
	return new(Question)
}

// PKColumnIndex returns an index of primary key column for that table in SQL database.
func (v *questionTableType) PKColumnIndex() uint {
	return uint(v.s.PKFieldIndex)
}

// QuestionTable represents questions view or table in SQL database.
var QuestionTable = &questionTableType{
	s: parse.StructInfo{Type: "Question", SQLSchema: "", SQLName: "questions", Fields: []parse.FieldInfo{{Name: "ID", PKType: "int64", Column: "id"}, {Name: "ExerciseID", PKType: "", Column: "exercise_id"}, {Name: "Text", PKType: "", Column: "text"}, {Name: "Answer", PKType: "", Column: "answer"}, {Name: "InsertedAt", PKType: "", Column: "inserted_at"}, {Name: "UpdatedAt", PKType: "", Column: "updated_at"}}, PKFieldIndex: 0},
	z: new(Question).Values(),
}

// String returns a string representation of this struct or record.
func (s Question) String() string {
	res := make([]string, 6)
	res[0] = "ID: " + reform.Inspect(s.ID, true)
	res[1] = "ExerciseID: " + reform.Inspect(s.ExerciseID, true)
	res[2] = "Text: " + reform.Inspect(s.Text, true)
	res[3] = "Answer: " + reform.Inspect(s.Answer, true)
	res[4] = "InsertedAt: " + reform.Inspect(s.InsertedAt, true)
	res[5] = "UpdatedAt: " + reform.Inspect(s.UpdatedAt, true)
	return strings.Join(res, ", ")
}

// Values returns a slice of struct or record field values.
// Returned interface{} values are never untyped nils.
func (s *Question) Values() []interface{} {
	return []interface{}{
		s.ID,
		s.ExerciseID,
		s.Text,
		s.Answer,
		s.InsertedAt,
		s.UpdatedAt,
	}
}

// Pointers returns a slice of pointers to struct or record fields.
// Returned interface{} values are never untyped nils.
func (s *Question) Pointers() []interface{} {
	return []interface{}{
		&s.ID,
		&s.ExerciseID,
		&s.Text,
		&s.Answer,
		&s.InsertedAt,
		&s.UpdatedAt,
	}
}

// View returns View object for that struct.
func (s *Question) View() reform.View {
	return QuestionTable
}

// Table returns Table object for that record.
func (s *Question) Table() reform.Table {
	return QuestionTable
}

// PKValue returns a value of primary key for that record.
// Returned interface{} value is never untyped nil.
func (s *Question) PKValue() interface{} {
	return s.ID
}

// PKPointer returns a pointer to primary key field for that record.
// Returned interface{} value is never untyped nil.
func (s *Question) PKPointer() interface{} {
	return &s.ID
}

// HasPK returns true if record has non-zero primary key set, false otherwise.
func (s *Question) HasPK() bool {
	return s.ID != QuestionTable.z[QuestionTable.s.PKFieldIndex]
}

// SetPK sets record primary key.
func (s *Question) SetPK(pk interface{}) {
	if i64, ok := pk.(int64); ok {
		s.ID = int64(i64)
	} else {
		s.ID = pk.(int64)
	}
}

// check interfaces
var (
	_ reform.View   = QuestionTable
	_ reform.Struct = new(Question)
	_ reform.Table  = QuestionTable
	_ reform.Record = new(Question)
	_ fmt.Stringer  = new(Question)
)

func init() {
	parse.AssertUpToDate(&QuestionTable.s, new(Question))
}
