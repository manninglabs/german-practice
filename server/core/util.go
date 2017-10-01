package core

import (
	"fmt"
	"strings"

	"github.com/Sirupsen/logrus"
	reform "gopkg.in/reform.v1"
)

func (c *Core) UpdateView(v reform.View, id int64, fields []string, values ...interface{}) (err error) {
	// validate
	if id == 0 {
		return fmt.Errorf("id not specified")
	}
	if len(fields) == 0 {
		return fmt.Errorf("fields aren't set")
	}
	if len(fields) != len(values) {
		return fmt.Errorf("fields and values count do not match")
	}

	query := fmt.Sprintf("UPDATE %s", v.Name())
	// i.e. query is now 'UPDATE <table>'

	assignmentsStr := []string{}
	for ndx, f := range fields {
		assignmentsStr = append(assignmentsStr, fmt.Sprintf("%s = %s", f, c.DB.Placeholder(ndx+1)))
	}
	query += " SET " + strings.Join(assignmentsStr, ", ")
	// i.e. query is now 'UPDATE <table> SET field1 = <placeholder1>, field2 = <placeholder2>'

	// add where part
	query += fmt.Sprintf(" WHERE id = %s", c.DB.Placeholder(len(fields)+1))
	// i.e. query is now 'UPDATE <table> SET field1 = <placeholder1>, field2 = <placeholder2>' WHERE id = <placeholder3>'

	// tack on value for where clause to final values passed into query
	values = append(values, id)

	// execute query
	logrus.Debugf("executing update as '%v', values '%+v'", query, values)
	_, err = c.DB.Exec(query, values...)

	return
}
