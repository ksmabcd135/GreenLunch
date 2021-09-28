package model

import (
	"log"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	dsn := "root:tjsals7724@tcp(127.0.0.1:3306)/greendot"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal(err)
	}
	db.AutoMigrate(&Schedule{})
	DB = db
}
