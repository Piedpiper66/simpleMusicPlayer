let text = `[ti:爱在西元前][ar:周杰伦][al:范特西]\n[00:00.00]爱在西元前\n[00:04.00]作词：方文山 作曲：周杰伦 \n[00:12.00]演唱：周杰伦\n[00:16.00]\n[00:32.20]古巴比伦王颁布了汉摩拉比法典\n[00:35.69]刻在黑色的玄武岩 距今已经三千七百多年\n[00:40.05]你在橱窗前 凝视碑文的字眼\n[00:43.59]我却在旁静静欣赏你那张我深爱的脸\n[00:47.70]\n[00:47.76]祭司 神殿 征战 弓箭 是谁的从前\n[00:51.47]喜欢在人潮中你只属于我的那画面\n[00:55.14]经过苏美女神身边 我以女神之名许愿\n[00:59.47]思念像底格里斯河般的漫延\n[01:03.28]当古文明只剩下难解的语言\n[01:09.70]传说就成了永垂不朽的诗篇\n[01:18.18]我给你的爱写在西元前\n[01:21.15]深埋在美索不达米亚平原\n[01:25.98]几十个世纪后出土发现\n[01:28.50]泥板上的字迹依然清晰可见\n[01:33.35]我给你的爱写在西元前\n[01:36.10]深埋在美索不达米亚平原\n[01:41.34]用楔形文字刻下了永远\n[01:43.65]那已风化千年的誓言 一切又重演\n[01:50.17]\n[01:51.70]祭司 神殿 征战 弓箭 是谁的从前\n[01:55.72]喜欢在人潮中你只属于我的那画面\n[01:59.57]经过苏美女神身边 我以女神之名许愿\n[02:03.95]思念像底格里斯河般的漫延\n[02:07.48]当古文明只剩下难解的语言\n[02:14.06]传说就成了永垂不朽的诗篇\n[02:22.66]我给你的爱写在西元前\n[02:25.34]深埋在美索不达米亚平原\n[02:30.36]几十个世纪后出土发现\n[02:32.86]泥板上的字迹依然清晰可见\n[02:37.69]我给你的爱写在西元前\n[02:40.49]深埋在美索不达米亚平原\n[02:45.30]用楔形文字刻下了永远\n[02:48.01]那已风化千年的誓言 一切又重演\n[02:52.90]我感到很疲倦 离家乡还是很远\n[02:59.41]害怕再也不能回到你身边\n[03:06.76]\n[03:07.95]我给你的爱写在西元前\n[03:10.73]深埋在美索不达米亚平原\n[03:15.82]几十个世纪后出土发现\n[03:18.22]泥板上的字迹依然清晰可见\n[03:23.30]我给你的爱写在西元前\n[03:25.89]深埋在美索不达米亚平原\n[03:30.76]用楔形文字刻下了永远\n[03:33.59]那已风化千年的誓言 一切又重演`
,   audio = document.querySelector('audio')
,   ogWrap = document.querySelector( '.wrap' )
,   wrap = $(ogWrap)
,   result = parseLyrics(text)
,   yoursAnswer = `[ti:你的答案][ar:阿冗][al:你的答案][by:][offset:0]
[00:00.11]你的答案 - 阿冗
[00:01.80]词 Lyrics：林晨阳/刘涛
[00:03.14]曲 Music：刘涛
[00:03.86]制作人 Produced by 刘涛
[00:05.14]编曲 Arranger：谭侃侃
[00:06.23]吉他 Guitar：谭侃侃
[00:07.37]键盘 Keyboards：谭侃侃
[00:08.52]合声 Backing vocals：金天/胡阁
[00:10.42]录音棚 Recording studio：北京好乐无荒录音棚
[00:10.88]录音师 Recording Engineer：吴佳敏
[00:12.11]混音师 Mixing Engineer：刘三斤
[00:12.37]母带后期混音师 Mastering Engineer：刘三斤
[00:13.55]监制 Executive producer: 陶诗
[00:14.22]OP/SP：好乐无荒
[00:15.03]鸣谢：万物体验家/不要音乐
[00:16.78]（未经许可,不得翻唱或使用）
[00:24.99]也许世界就这样
[00:28.28]我也还在路上
[00:31.32]没有人能诉说
[00:36.17]也许我只能沉默
[00:39.34]眼泪湿润眼眶
[00:42.23]可又不甘懦弱
[00:45.88]低着头 期待白昼
[00:50.98]接受所有的嘲讽
[00:56.58]向着风 拥抱彩虹
[01:01.95]勇敢的向前走
[01:06.51]黎明的那道光
[01:09.14]会越过黑暗
[01:11.61]打破一切恐惧我能
[01:14.76]找到答案
[01:17.55]哪怕要逆着光
[01:20.03]就驱散黑暗
[01:22.52]丢弃所有的负担
[01:25.69]不再孤单
[01:28.53]不再孤单
[01:38.78]也许世界就这样
[01:42.00]我也还在路上
[01:45.07]没有人能诉说
[01:49.50]也许我只能沉默
[01:53.07]眼泪湿润眼眶
[01:56.00]可又不甘懦弱
[01:59.61]低着头 期待白昼
[02:04.71]接受所有的嘲讽
[02:10.32]向着风 拥抱彩虹
[02:15.59]勇敢的向前走
[02:20.21]黎明的那道光
[02:22.73]会越过黑暗
[02:25.13]打破一切恐惧我能
[02:28.41]找到答案
[02:31.15]哪怕要逆着光
[02:33.57]就驱散黑暗
[02:36.21]丢弃所有的负担
[02:39.58]不再孤单
[02:42.25]不再孤单
[02:50.43]黎明的那道光
[02:52.63]会越过黑暗
[02:55.35]打破一切恐惧我能
[02:58.42]找到答案
[03:01.10]哪怕要逆着光
[03:03.59]就驱散黑暗
[03:06.22]有一万种的力量
[03:09.42]淹没孤单
[03:12.23]不再孤单
[03:14.69]也许世界就这样
[03:17.63]我也还在路上
[03:20.37]没有人能诉说
[03:25.21]也许我只能沉默
[03:28.73]眼泪湿润眼眶
[03:31.27]可又不甘懦弱`;

// console.log(result);
result  = parseLyrics( yoursAnswer );
for (let i = 0; i < result.length; i++) {
    let $p = $("<p></p>").text(result[i].content);
    wrap.append($p);
}

function parseLyrics(text) {
    let lyricArr = text.split('\n')
        , result = [];
    // console.log(lyricArr[3]);
    for (let i = 0; i < lyricArr.length; i++) {
        let playTimeArr = lyricArr[i].match(/\[\d{2}:\d{2}((\.|\:))\d{2}\]/g);
        let lineLyric = "";

        // if(i == 3) console.log(playTimeArr);

        if (lyricArr[i].split(playTimeArr).length > 0) {
            lineLyric = lyricArr[i].split(playTimeArr);
            // if(i == 3) console.log(lineLyric, String(lineLyric));
        }

        if (playTimeArr != null) {
            for (let j = 0; j < playTimeArr.length; j++) {
                let time = playTimeArr[j].substring(1, playTimeArr[j].indexOf("]")).split(":");

                result.push({
                    time: (parseInt(time[0]) * 60 + parseFloat(time[1])).toFixed(4),
                    content: String(lineLyric).substr(1)
                })
            }
        }
    }

    return result;
}

let lineNo = 0;
// 当前行歌词        
// let preLine = 3; // 当播放6行后开始滚动歌词
let startMoveLine = 2;
let lineHeight = -2 * 16 // 每次滚动的距离        // 滚动播放 歌词高亮  增加类名active  
,   wrapH = ogWrap.clientHeight;
// console.log(wrapH);
// highLight();
wrap.on('mousewheel', function (ev) { 
    // 当鼠标滚轮向下
    if (ev.originalEvent.wheelDelta < 0) {
        // vMoveControl = null;
        $('.wrap').css("top", (i, v) => {
            let nowTop = v === "" ? "0px" : v
            ,   parseTop = parseInt(nowTop.replace('px', ''));
            // 若可视窗口的歌词行数 <= 5 , 停在顶部
            if (parseTop <= -(wrapH - 3 * 32)) {
                return false;
            }
            return parseTop - 32;
        });

    // 当鼠标滚轮向上
    } else {
        // vMoveControl = null;
        $('.wrap').css("top", (i, v) => {
            let nowTop = (v === "") ? "0px" : v
            ,   parseTop = parseInt(nowTop.replace('px', ''));
            // 若在最顶部, 停在顶部
            if (parseTop >= 0) {
                return false;
            }
            return parseTop + 32;
        });
    }
})

// 点击时跳转到当前行
ogWrap.addEventListener("click", function(e) {
    console.log(e.target);
})

// 当音频的时间改变时, 变换歌词位置
audio.addEventListener("timeupdate", function () {
    if (lineNo == result.length) return;
    lineNo = getLineNo(audio.currentTime);
    highLight();
    lineNo++;
});

// 当音频结束时, 重新播放
audio.addEventListener("ended", function () {
    lineNo = 0;
    highLight();
    audio.play();
    $(".wrap").css("top", "0");
});

// 当音频时间所对应的歌词的行编号到达制定行时, 界面开始滚动
function highLight() {
    let $p = $("p");
    if($p.eq(lineNo).text() === "") {
        return false;
    } else {
        $p.eq(lineNo).addClass("active").siblings().removeClass("active");
        vMoveControl( wrap );
    }
}

let vMoveControl = viewMove;
function viewMove( jqView ) {
    if (lineNo > startMoveLine) {
        jqView.stop(true, true).animate({ top: (lineNo - startMoveLine) * lineHeight });
    }
}


function getLineNo(currentTime) {
     // 快进
    if (currentTime >= parseFloat(result[lineNo].time)) {                        
        for (let i = result.length - 1; i >= lineNo; i--) {
            if (currentTime >= parseFloat(result[i].time)) {
                return i;
            }
        }
    } else {
        // 后退                
        for (let i = 0; i <= lineNo; i++) {
            if (currentTime <= parseFloat(result[i].time)) {
                return i - 1;
            }
        }
    }
}