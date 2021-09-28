package model

type Schedule struct {
	ID      uint   `json: "id" gorm:"primary_key"`
	Title   string `json: "title"`
	Message string `json: "message"`
}
