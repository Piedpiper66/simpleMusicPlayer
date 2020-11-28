(function() {
    let body = document.body
    ,   w = window.innerWidth || document.documentElement.clientWidth
    ,   h = window.innerHeight || document.documentElement.clientHeight;
    body.style.width = w + "px";
    body.style.height = h + "px";
    
    
    
    let lyrics = document.getElementById('lyrics')
    ,   instance = document.getElementById('instance')
    ,   wrap = lyrics.children[0]
    ,   speed = 2000
    ,   fontBasic = 2 * 16;
    
    // instance.style.marginTop = (h - instance.clientHeight) / 2 + "px";
    
    // setInterval(setLyricsMoving, speed);
    
    function setLyricsMoving() {
        if (lyrics.scrollTop >= wrap.offsetHeight - lyrics.clientHeight) {
            lyrics.scrollTop = 0;
        } else {
            lyrics.scrollTop += fontBasic;
        }
    }
})()