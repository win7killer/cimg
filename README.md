# 剪切生成各种尺寸的图片

### 先缩放，后剪切，图像质量80%

## 依赖
nodejs >=6
npm (nodejs中自带)

## 安装
将本项目clone到本地，
`cd cimg`,
`nmp install`

## 使用
将要剪切的图片放到项目的img目录下，修改conf.js中的配置
1.  numList: 剪切的目标尺寸 => [宽, 高]
2.  output: 图片产出目录，默认为本项目的'./output'
3.  分两种使用方法

### 如果要使用cli，可以先
`sudo npm link` 把本项目添加全局软连，然后
`cimg 1.jpg`
或者
`cimg 1.jpg 100 100` // 两个数字为[宽 高]

### 也可以直接使用'run.js'
`node run.js 1.jpg`
或者
`node run.js 1.jpg 100 100`
