#!/bin/bash

# 检查 pnpm 是否安装
if ! command -v pnpm &> /dev/null; then
    echo "错误: pnpm 未安装"
    echo "请先安装 pnpm: npm install -g pnpm"
    exit 1
fi

# 运行文档开发服务器
echo "启动文档开发服务器..."
pnpm run docs:dev --host 0.0.0.0