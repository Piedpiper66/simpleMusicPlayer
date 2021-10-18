(function () {
    const rollBack = document.getElementById('backToTop');

    window.onscroll = function (e) {

        // 获取当前页面滚动的距离, 同时兼容
        let scrollTop = document.documentElement.scrollTop ?
            document.documentElement.scrollTop :
            document.body.scrollTop;

        // 当滚动距离到达 500 时 才显示回到顶部按钮
        if (scrollTop > 500) {
            rollBack.style.display = 'block';
        } else {
            rollBack.style.display = 'none';
        }

        // 最后为该按钮添加点击事件
        let timer;

        rollBack.onclick = function (e) {

            // 在回到顶部时设置缓冲
            timer = setInterval(function () {
                let currScrollTop = document.documentElement.scrollTop ?
                    document.documentElement.scrollTop :
                    document.body.scrollTop;

                if (!currScrollTop) {
                    clearInterval(timer);
                }

                document.documentElement.scrollTop = currScrollTop - 150;
                document.body.scrollTop = currScrollTop - 150;

            }, 16);
        }
        // 在回到顶部的过程中, 如果滚动滚轮, 需要清除定时器
        // document.onmousewheel = function () {
        // 	clearInterval(id);
        // }
    }
})();