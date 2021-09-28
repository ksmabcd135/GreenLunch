package main

import (
	"github.com/gin-gonic/gin"
	"github.com/ksmabcd135/GreenLunch/controller"
	"github.com/ksmabcd135/GreenLunch/model"
)

func main() {
	r := gin.Default()

	model.ConnectDB()

	r.GET("/schedules", controller.FindSchedules)
	r.Run()
}
