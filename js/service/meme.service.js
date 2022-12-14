'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
{ id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
{ id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat'] },
{ id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
{ id: 5, url: 'img/5.jpg', keywords: ['funny', 'cat'] },
{ id: 6, url: 'img/6.jpg', keywords: ['funny', 'cat'] },
{ id: 7, url: 'img/7.jpg', keywords: ['funny', 'cat'] },
{ id: 8, url: 'img/8.jpg', keywords: ['funny', 'cat'] },
{ id: 9, url: 'img/9.jpg', keywords: ['funny', 'cat'] },
{ id: 10, url: 'img/10.jpg', keywords: ['funny', 'cat'] },
{ id: 11, url: 'img/11.jpg', keywords: ['funny', 'cat'] },
{ id: 12, url: 'img/12.jpg', keywords: ['funny', 'cat'] },
{ id: 13, url: 'img/13.jpg', keywords: ['funny', 'cat'] },
{ id: 14, url: 'img/14.jpg', keywords: ['funny', 'cat'] },
{ id: 15, url: 'img/15.jpg', keywords: ['funny', 'cat'] },
{ id: 16, url: 'img/16.jpg', keywords: ['funny', 'cat'] },
{ id: 17, url: 'img/17.jpg', keywords: ['funny', 'cat'] },
{ id: 18, url: 'img/18.jpg', keywords: ['funny', 'cat'] },
];
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 30,
            align: 'center',
            color: 'white'
        }
    ]
}

function getMeme() {
    return gMeme
}

function getImgs() {
    return gImgs
}

function getImgById(imgId) {
    const img = gImgs.find(img => imgId === img.id)
    return img
}

function setLineTxt(txt) {
    const { selectedLineIdx, lines } = gMeme
    lines[selectedLineIdx].txt = txt
}


function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function setColor(color) {
    const { selectedLineIdx, lines } = gMeme
    lines[selectedLineIdx].color = color
}

function setFontSize(num) {
    const { selectedLineIdx, lines } = gMeme
    lines[selectedLineIdx].size += num
}

function addLine() {
    var newLine = {
        txt: '',
        size: 30,
        align: 'center',
        color: 'orange'
    }
    gMeme.lines.push(newLine)
    gMeme.selectedLineIdx++
}

function moveLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx = (gMeme.lines).length) {
        console.log('hi')
        gMeme.selectedLineIdx = 0
    }
}
