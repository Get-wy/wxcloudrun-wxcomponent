/*
 * @Author: 王宇
 * @Date: 2024-07-17 10:52:08
 * @LastEditors: 王宇
 * @LastEditTime: 2024-07-17 11:04:11
 * @FilePath: /wxcloudrun-wxcomponent/api/testppai/ppai.go
 * @Description:
 *
 */
package testppai

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// GetTicketHandler 获取Ticket
func ppHandler(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "hello"})
}