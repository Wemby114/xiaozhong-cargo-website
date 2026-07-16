#!/bin/bash
set -e

# 使用 npm 安装依赖（Vercel 默认使用 npm）
npm install

# 构建 Next.js 项目
npm run build
