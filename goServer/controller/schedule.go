package controller

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/ksmabcd135/GreenLunch/model"
)

func FindSchedules(c *gin.Context) {
	var schedules []model.Schedule
	model.DB.Find(&schedules)

	c.JSON(http.StatusOK, gin.H{"result": http.StatusOK, "data": schedules})
}

func CreateSchedule(c *gin.Context) {
	title := c.Query("title")
	message := c.Query("message")
	fmt.Println(title, message)

	if title == "" || message == "" {
		c.JSON(http.StatusBadRequest, gin.H{"message": "request Parameter not good"})
		fmt.Println(title, message)
		return
	}
	schedule := model.Schedule{Title: title, Message: message}
	result := model.DB.Create(&schedule)
	fmt.Println(result)

	c.JSON(http.StatusOK, gin.H{"result": http.StatusOK})
	//return result.Status
}
