package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/ksmabcd135/GreenLunch/model"
)

func FindSchedules(c *gin.Context) {
	var schedule model.Schedule
	model.DB.First(&schedule)

	c.JSON(http.StatusOK, gin.H{"data": schedule})
}

func CreateSchedule(c *gin.Context) {
	// var input CreateSchedule
	// if err := c.ShouldBind(&input); err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": err})
	// 	return
	// }
}
