/**
 * @file 剪切图片主文件
 * @author win7killer@163.com
 */

let args = process.argv.splice(2);
let fs = require('fs');
let Jimp = require('jimp');
let colors = require('colors');
const CONF = require('./conf');

let output = CONF.output || './output';
let numList = CONF.numList || [];

let methods = {
    iNum: 0,
    takeFileName() {
        let aTemp = this.sFile.split('/').pop().split('.');
        return {
            extName: aTemp[1] || '',
            fileName: aTemp[0] || ''
        };
    },

    takeCrop() {
        let fileNameMap = this.takeFileName();

        Jimp.read(this.sFile)
            .then((oImg) => {
                this.loopCrop(oImg, fileNameMap);
            })
            .catch((err) => {
                throw new Error(err.toString().red);
            });
    },

    loopCrop(oImg, fMap) {
        if (this.iNum < this.list.length) {
            let size = this.list[this.iNum];
            this.iNum++;
            let outFile = `${fMap['fileName']}_${size[0]}_${size[1]}.${fMap['extName']}`;

            oImg.clone()
                .cover(+size[0], +size[1])
                .quality(80)
                .write(`${output}/${outFile}`, () => {
                    console.info(`${outFile}  -- done`.green);
                    this.loopCrop(oImg, fMap);
                });
        } else {
            console.info('------------ success!! -- all done ------------'.rainbow);
            return;
        }
    },

    arrUniq() {
        return Array.from(new Set(numList));
    },

    init() {
        if (!args[0] || /^\d+$/.test(args[0])) {
            throw new Error('请指定要处理的图片，如“node run.js 1.jpg”'.red);
        }
        // 文件处理
        if (/^https?\:/.test(args[0])) { // url
            this.sFile = args[0];
        } else {
            this.sFile = './img/' + (args[0] || '1.jpg');
            if (!fs.existsSync(this.sFile)) {
                throw new Error('文件不存在'.red);
            }
        }
        // 剪裁list处理
        if (!args[1] && !args[2]) {
            this.list = this.arrUniq();
        } else {
            this.list = [
                [args[1], args[2]]
            ];
        }

        this.takeCrop();
    }
};

module.exports = {
    init: function() {
        methods.init();
    }
}
