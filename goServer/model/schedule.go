package model

type Schedule struct {
	ID      uint   `json: "id" gorm:"primary_key"`
	Title   string `json: "title"; binding:"required"; not null`
	Message string `json: "message"; binding:"required"; not null`
}
