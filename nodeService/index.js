/*
 * @Author: 王宇
 * @Date: 2024-07-22 10:22:03
 * @LastEditors: 王宇
 * @LastEditTime: 2024-07-23 16:23:20
 * @FilePath: /wxcloudrun-wxcomponent/nodeService/index.js
 * @Description:
 *
 */
const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { init: initDB, Counter } = require("./db");

const logger = morgan("tiny");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(logger);

// 首页
app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 首页
app.post("/user/reply/:appid", async (req, res) => {
  const appid = req.params.appid;
  const params = req.body;
  let createTime = new Date().getTime();
  console.log("消息推送 ---》",req.body);

  response = {
    ToUserName: params.FromUserName,
    FromUserName: params.ToUserName,
    CreateTime: createTime,
    MsgType: 'text',
    Content: '你好',
  };

  console.log(`返回 ---》 `,  response);
  res.send(response); // 不进行任何回复，直接返回success，告知微信服务器已经正常收到。
});

app.post("/wxcallback/component", async (req, res) => {
  console.log("授权", req.body);
  res.send("success"); // 不进行任何回复，直接返回success，告知微信服务器已经正常收到。
});

// 更新计数
app.post("/api/count", async (req, res) => {
  const { action } = req.body;
  if (action === "inc") {
    await Counter.create();
  } else if (action === "clear") {
    await Counter.destroy({
      truncate: true,
    });
  }
  res.send({
    code: 0,
    data: await Counter.count(),
  });
});

// 获取计数
app.get("/api/count", async (req, res) => {
  const result = await Counter.count();
  res.send({
    code: 0,
    data: result,
  });
});

// 小程序调用，获取微信 Open ID
app.get("/api/wx_openid", async (req, res) => {
  if (req.headers["x-wx-source"]) {
    res.send(req.headers["x-wx-openid"]);
  }
});

const port = process.env.PORT || 80;

async function bootstrap() {
  await initDB();
  app.listen(port, () => {
    console.log("启动成功", port);
  });
}

bootstrap();
