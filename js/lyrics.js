// let text = `[ti:爱在西元前][ar:周杰伦][al:范特西]\n[00:00.00]爱在西元前\n[00:04.00]作词：方文山 作曲：周杰伦 \n[00:12.00]演唱：周杰伦\n[00:16.00]\n[00:32.20]古巴比伦王颁布了汉摩拉比法典\n[00:35.69]刻在黑色的玄武岩 距今已经三千七百多年\n[00:40.05]你在橱窗前 凝视碑文的字眼\n[00:43.59]我却在旁静静欣赏你那张我深爱的脸\n[00:47.70]\n[00:47.76]祭司 神殿 征战 弓箭 是谁的从前\n[00:51.47]喜欢在人潮中你只属于我的那画面\n[00:55.14]经过苏美女神身边 我以女神之名许愿\n[00:59.47]思念像底格里斯河般的漫延\n[01:03.28]当古文明只剩下难解的语言\n[01:09.70]传说就成了永垂不朽的诗篇\n[01:18.18]我给你的爱写在西元前\n[01:21.15]深埋在美索不达米亚平原\n[01:25.98]几十个世纪后出土发现\n[01:28.50]泥板上的字迹依然清晰可见\n[01:33.35]我给你的爱写在西元前\n[01:36.10]深埋在美索不达米亚平原\n[01:41.34]用楔形文字刻下了永远\n[01:43.65]那已风化千年的誓言 一切又重演\n[01:50.17]\n[01:51.70]祭司 神殿 征战 弓箭 是谁的从前\n[01:55.72]喜欢在人潮中你只属于我的那画面\n[01:59.57]经过苏美女神身边 我以女神之名许愿\n[02:03.95]思念像底格里斯河般的漫延\n[02:07.48]当古文明只剩下难解的语言\n[02:14.06]传说就成了永垂不朽的诗篇\n[02:22.66]我给你的爱写在西元前\n[02:25.34]深埋在美索不达米亚平原\n[02:30.36]几十个世纪后出土发现\n[02:32.86]泥板上的字迹依然清晰可见\n[02:37.69]我给你的爱写在西元前\n[02:40.49]深埋在美索不达米亚平原\n[02:45.30]用楔形文字刻下了永远\n[02:48.01]那已风化千年的誓言 一切又重演\n[02:52.90]我感到很疲倦 离家乡还是很远\n[02:59.41]害怕再也不能回到你身边\n[03:06.76]\n[03:07.95]我给你的爱写在西元前\n[03:10.73]深埋在美索不达米亚平原\n[03:15.82]几十个世纪后出土发现\n[03:18.22]泥板上的字迹依然清晰可见\n[03:23.30]我给你的爱写在西元前\n[03:25.89]深埋在美索不达米亚平原\n[03:30.76]用楔形文字刻下了永远\n[03:33.59]那已风化千年的誓言 一切又重演`

(function (global, factory) { 
    factory(
        text,
        document.querySelector( '.wrap' ),
        2,
        -2 * 16,
        document.querySelector( 'audio' )
    )
 })(this, function ( 
        text,
        ogWrap,
        startMoveLine,
        moveDis,
        audio
    ) { 'user strict';

    var audio = audio,
        ogWrap = ogWrap,
        wrap = $(ogWrap),
        result = null,
        yoursAnswer = text,
        lineNo = 0,
        startMoveLine = startMoveLine,
        moveDis = moveDis,
        wrapH = 0,
        vMoveControl = viewMove;

    wrapH = ogWrap.clientHeight; console.log(wrapH); 

    result  = parseLyrics( yoursAnswer );
    for (let i = 0; i < result.length; i++) {
        let $p = $("<p></p>").text(result[i].content);
        wrap.append($p);
    }

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

    // 解析歌词文本
    function parseLyrics( LyricsText ) {
        let lyricArr = LyricsText.split('\n');
        let result = [];

        for (let i = 0; i < lyricArr.length; i++) {
            let playTimeArr = lyricArr[i].match(/\[\d{2}:\d{2}((\.|\:))\d{2}\]/g);
            let lineLyric = "";
            if (lyricArr[i].split(playTimeArr).length > 0) {
                lineLyric = lyricArr[i].split(playTimeArr);
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

    // 高亮当前音频所对应的歌词
    function highLight() {
        let $p = $("p");
        if($p.eq(lineNo).text() === "") {
            return false;
        } else {
            $p.eq(lineNo).addClass("active").siblings().removeClass("active");
            vMoveControl( wrap );
        }
    }
    
    // 歌词展示区视图移动
    function viewMove( jqView ) {
        if (lineNo > startMoveLine) {
            jqView.stop(true, true).animate({ top: (lineNo - startMoveLine) * moveDis });
        }
    }

    // 获取当前音频时间所对应的歌词行号
    function getLineNo( currentTime ) {
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
 })