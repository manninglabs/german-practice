package core

type Model interface {
	IsValid(isNew bool) (valid bool, msg string)
}
