(function () {
    $(".music-list>ul>li").eq(0).show().siblings().hide();
    $('.classBlock>ul>li').click(function () {
        var index = $(this).index();
        $(".music-list>ul>li").eq(index).fadeIn().siblings().fadeOut();
    });
})()