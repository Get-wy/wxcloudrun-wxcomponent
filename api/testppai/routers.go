/*
 * @Author: 王宇
 * @Date: 2024-07-17 10:52:41
 * @LastEditors: 王宇
 * @LastEditTime: 2024-07-17 11:05:29
 * @FilePath: /wxcloudrun-wxcomponent/api/testppai/routers.go
 * @Description:
 *
 */
package testppai

import (
	"github.com/WeixinCloud/wxcloudrun-wxcomponent/middleware"
	"github.com/gin-gonic/gin"
)

// Routers 路由
func Routers(e *gin.Engine) {
	g := e.Group("/inner", middleware.InnerServiceMiddleWare)
	g.POST("/biz/ppai", ppHandler)
}
