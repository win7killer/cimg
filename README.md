# 剪切生成各种尺寸的图片

### 先缩放，后剪切，图像质量80%

## 依赖
nodejs >=6
npm (nodejs中自带)

## 安装

> Notice

### 直接 clone 项目下来使用 `<推荐>`
``` bash
git clone https://github.com/win7killer/cimg.git
```

### 全局安装
``` bash
npm i cimg -g
```

### 非全局
``` bash
npm i cimg
```



## 使用
1. 修改 cimg 项目中 conf.js中的配置 【需要生成批量尺寸是需要此步骤，否则请忽略】
```
numList: [
    [宽1, 高1],
    [宽2, 高2],
]
```
2. 非全局下选择软链到全局使用 【可选】
``` bash
npm link
```

### 全局模式 || 软链后
``` bash
# [100 100] 为宽高，可选择参数, 只生成 100 * 100 的图片
# 图片路径相对于执行命令的目录
cimg 1.jpg [100 100]
```

### 所有模式下
```bash
cd cimg/

npm run cimg 1.jpg [100 100]
# 或者
node run.js 1.jpg [100 100]
```



### Dependencies
- colors: https://github.com/Marak/colors.js,
- jimp: https://github.com/oliver-moran/jimp ,
- shelljs: https://github.com/shelljs/shelljs,
- yargs: https://github.com/yargs/yargs

