package core

import (
	"database/sql"
	"fmt"
	"io/ioutil"

	"log"

	"github.com/Sirupsen/logrus"
	_ "github.com/lib/pq"
	reform "gopkg.in/reform.v1"
	"gopkg.in/reform.v1/dialects/postgresql"
)

type Core struct {
	DB *reform.DB
}

func New(host string, dbName string, dbPassword string) *Core {
	c := &Core{}
	c.initDatabase(host, dbName, dbPassword)
	return c
}

func (c *Core) initDatabase(host string, dbName string, dbPassword string) {
	if len(host) == 0 {
		logrus.Fatalf("database hostname not specified")
	}
	if len(dbName) == 0 {
		logrus.Fatalf("database name not specified")
	}
	connStr := fmt.Sprintf("host=%s port=5432 user=postgres database=%s password='%s' sslmode=disable", host, dbName, dbPassword)
	logrus.Infof("connecting to database with: %v", connStr)
	DB, err := sql.Open("postgres", connStr)
	if err != nil {
		logrus.Fatal(err)
	}
	err = DB.Ping()
	if err != nil {
		logrus.Fatal(err)
	}

	// connect to database
	//logger := log.New(os.Stdout, "SQL: ", log.Flags())
	logger := log.New(ioutil.Discard, "", log.Flags())
	reformLogger := reform.NewPrintfLogger(logger.Printf)
	reformDB := reform.NewDBFromInterface(DB, postgresql.Dialect, reformLogger)

	c.DB = reformDB

	return
}
