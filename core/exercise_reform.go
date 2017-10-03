package core

// generated with gopkg.in/reform.v1

import (
	"fmt"
	"strings"

	"gopkg.in/reform.v1"
	"gopkg.in/reform.v1/parse"
)

type exerciseTableType struct {
	s parse.StructInfo
	z []interface{}
}

// Schema returns a schema name in SQL database ("").
func (v *exerciseTableType) Schema() string {
	return v.s.SQLSchema
}

// Name returns a view or table name in SQL database ("exercises").
func (v *exerciseTableType) Name() string {
	return v.s.SQLName
}

// Columns returns a new slice of column names for that view or table in SQL database.
func (v *exerciseTableType) Columns() []string {
	return []string{"id", "title", "topic", "inserted_at", "updated_at"}
}

// NewStruct makes a new struct for that view or table.
func (v *exerciseTableType) NewStruct() reform.Struct {
	return new(Exercise)
}

// NewRecord makes a new record for that table.
func (v *exerciseTableType) NewRecord() reform.Record {
	return new(Exercise)
}

// PKColumnIndex returns an index of primary key column for that table in SQL database.
func (v *exerciseTableType) PKColumnIndex() uint {
	return uint(v.s.PKFieldIndex)
}

// ExerciseTable represents exercises view or table in SQL database.
var ExerciseTable = &exerciseTableType{
	s: parse.StructInfo{Type: "Exercise", SQLSchema: "", SQLName: "exercises", Fields: []parse.FieldInfo{{Name: "ID", PKType: "int64", Column: "id"}, {Name: "Title", PKType: "", Column: "title"}, {Name: "Topic", PKType: "", Column: "topic"}, {Name: "InsertedAt", PKType: "", Column: "inserted_at"}, {Name: "UpdatedAt", PKType: "", Column: "updated_at"}}, PKFieldIndex: 0},
	z: new(Exercise).Values(),
}

// String returns a string representation of this struct or record.
func (s Exercise) String() string {
	res := make([]string, 5)
	res[0] = "ID: " + reform.Inspect(s.ID, true)
	res[1] = "Title: " + reform.Inspect(s.Title, true)
	res[2] = "Topic: " + reform.Inspect(s.Topic, true)
	res[3] = "InsertedAt: " + reform.Inspect(s.InsertedAt, true)
	res[4] = "UpdatedAt: " + reform.Inspect(s.UpdatedAt, true)
	return strings.Join(res, ", ")
}

// Values returns a slice of struct or record field values.
// Returned interface{} values are never untyped nils.
func (s *Exercise) Values() []interface{} {
	return []interface{}{
		s.ID,
		s.Title,
		s.Topic,
		s.InsertedAt,
		s.UpdatedAt,
	}
}

// Pointers returns a slice of pointers to struct or record fields.
// Returned interface{} values are never untyped nils.
func (s *Exercise) Pointers() []interface{} {
	return []interface{}{
		&s.ID,
		&s.Title,
		&s.Topic,
		&s.InsertedAt,
		&s.UpdatedAt,
	}
}

// View returns View object for that struct.
func (s *Exercise) View() reform.View {
	return ExerciseTable
}

// Table returns Table object for that record.
func (s *Exercise) Table() reform.Table {
	return ExerciseTable
}

// PKValue returns a value of primary key for that record.
// Returned interface{} value is never untyped nil.
func (s *Exercise) PKValue() interface{} {
	return s.ID
}

// PKPointer returns a pointer to primary key field for that record.
// Returned interface{} value is never untyped nil.
func (s *Exercise) PKPointer() interface{} {
	return &s.ID
}

// HasPK returns true if record has non-zero primary key set, false otherwise.
func (s *Exercise) HasPK() bool {
	return s.ID != ExerciseTable.z[ExerciseTable.s.PKFieldIndex]
}

// SetPK sets record primary key.
func (s *Exercise) SetPK(pk interface{}) {
	if i64, ok := pk.(int64); ok {
		s.ID = int64(i64)
	} else {
		s.ID = pk.(int64)
	}
}

// check interfaces
var (
	_ reform.View   = ExerciseTable
	_ reform.Struct = new(Exercise)
	_ reform.Table  = ExerciseTable
	_ reform.Record = new(Exercise)
	_ fmt.Stringer  = new(Exercise)
)

func init() {
	parse.AssertUpToDate(&ExerciseTable.s, new(Exercise))
}
