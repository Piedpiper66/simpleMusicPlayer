// 轮播图
(function () {
	//初始化必要变量  
	var i = 0;
	var cm_length = $('#cm-banner-list li').length;
	var cm_toggle = function (point) {
		$('#cm-banner-num li').eq(point).addClass('active').siblings().removeClass('active');
	};

	//第一张显示
	$('#cm-banner-list li').eq(0).show();
	//自动播放
	var play = function () {
		i++;
		if (i > cm_length - 1) { i = 0; }
		$('#cm-banner-list li').eq(i).fadeIn(800).siblings().fadeOut(800);

	}
	cm_timer = setInterval(function () {
		play();
		cm_toggle(i);
	}, 2500);

	//鼠标移入移出效果
	$('.cm-banner').hover(function () {
		clearInterval(cm_timer);
		$('.cm-banner-arrow').show();
	},
		function () {
			$('.cm-banner-arrow').hide();
			cm_timer = setInterval(function () {
				play();
				cm_toggle(i);
			}, 2500);
		});

	//鼠标移入箭头按钮高亮  
	$('.cm-banner-arrow').hover(function () {
		$(this).css('opacity', '1');
	},
		function () { $(this).css('opacity', '0.5'); });

	//动态添加小圆点  
	for (var j = 0; j < cm_length; j++) {
		$('#cm-banner-num').append('<li></li>');
	}

	//给第一个小圆点添加样式
	$('#cm-banner-num li').first().addClass('active');

	//给第一张图片添加样式
	//$('#cm-banner-list li').first().css('display','block');   

	//鼠标点击左箭头切换
	$('#cm-prev').click(function () {
		i--;
		if (i < 0) { i = cm_length - 1; }
		$('#cm-banner-list li').eq(i).fadeIn(800).siblings().fadeOut(800);
		cm_toggle(i);
	});

	//鼠标点击右箭头切换  
	$('#cm-next').click(function () {
		i++;
		if (i > cm_length - 1) { i = 0; }
		$('#cm-banner-list li').eq(i).fadeIn(800).siblings().fadeOut(800);
		cm_toggle(i);
	});

	//鼠标点击圆点切换 
	$('#cm-banner-num li').click(function () {
		var cm_index = $(this).index();
		$('#cm-banner-list li').eq(cm_index).fadeIn(800).siblings().fadeOut(800);
		i = cm_index;
		cm_toggle(cm_index);
	});
})();

