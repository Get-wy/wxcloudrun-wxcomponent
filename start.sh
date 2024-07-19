#!/bin/bash
###
 # @Author: 王宇
 # @Date: 2024-07-17 14:42:37
 # @LastEditors: 王宇
 # @LastEditTime: 2024-07-19 14:05:55
 # @FilePath: /wxcloudrun-wxcomponent/start.sh
 # @Description: 
 # 
### 
# node server.js &
# cd /wxcloudrun-wxcomponent
# ./main
python3 run.py 0.0.0.0 8080 &
cd /wxcloudrun-wxcomponent
./main