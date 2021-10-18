
    let body = document.body
    ,   w = window.innerWidth || document.documentElement.clientWidth
    ,   h = window.innerHeight || document.documentElement.clientHeight;
    body.style.width = w + "px";
    body.style.height = h + "px";
    
    var text = `[ti:你的答案][ar:阿冗][al:你的答案][by:][offset:0]
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
    
    let instance = document.getElementById('instance')
    ,   wrap = lyrics.children[0]
    ,   speed = 2000
    ,   fontBasic = 2 * 16;
    
    instance.style.marginTop = (h - instance.clientHeight) / 2 + "px";
    
    function setLyricsMoving() {
        if (lyrics.scrollTop >= wrap.offsetHeight - lyrics.clientHeight) {
            lyrics.scrollTop = 0;
        } else {
            lyrics.scrollTop += fontBasic;
        }
    }
