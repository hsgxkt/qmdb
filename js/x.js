//jQuery时间
$(document).ready(function() {
	function updateDate() {
		var today = new Date();
		var options = {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		};
		var date = today.toLocaleDateString('zh-CN', options) + ' ' + today.toLocaleTimeString('zh-CN');
		$('#currentDate').text(date);
	}

	// 调用函数以更新日期
	updateDate();

	// 如果您想要日期实时更新（例如，每秒更新），可以设置setInterval
	setInterval(updateDate, 1000);
});
// 导航调用日期
$(document).ready(function() {
	function updateDate() {
		var today = new Date();
		var options = {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		};
		var date = today.toLocaleDateString('zh-CN', options);
		$('#dateDisplay').text(date);
	}
	// 调用函数以更新日期
	updateDate();
	// 如果您想要日期实时更新（例如，每秒更新），可以设置setInterval
	// setInterval(updateDate, 1000);
});


//小脚丫
$(function() {
	// 当文档加载完成后，执行以下函数  
	$(document).mousemove(function(e) {
		// 为整个文档绑定一个鼠标移动事件监听器  
		// 当鼠标在文档上移动时，会触发这个事件，并传入一个事件对象e  
		$('#pic1').css('left', e.pageX + 3 + 'px');
		// 获取页面上ID为'pic1'的元素，并设置其CSS的'left'属性  
		// e.pageX表示鼠标当前的水平坐标（相对于文档）  
		// +3是为了让图片稍微偏离鼠标当前的位置  
		// 'px'是CSS属性值的单位  
		$('#pic1').css('top', e.pageY + 3 + 'px');
		// 类似地，设置ID为'pic1'的元素的CSS的'top'属性  
		// e.pageY表示鼠标当前的垂直坐标（相对于文档）  
		// 同样，+3是为了让图片稍微偏离鼠标当前的位置  
	});
});


// 弹窗
$(function() {
	// 需求：广告ad部分先滑入，再滑出，然后淡入。之后绑定事件，当点击span时弹出。  
	// 步骤：  

	// 选择所有class为"ad"的元素，并使用slideDown方法使这些元素在1000毫秒（即1秒）内滑入视图。  
	$(".ad").slideDown(1000).

	// 在元素滑入视图之后，使用slideUp方法使这些元素在1000毫秒内滑出视图。  
	slideUp(1000).

	// 在元素滑出视图之后，使用fadeIn方法使这些元素在1000毫秒内淡入视图。  
	fadeIn(1000).

	// 选择所有class为"ad"的元素的子元素span，并为它们绑定click事件处理函数。  
	children("span").click(function() {
		// 当span被点击时，使用fadeOut方法使它的父元素（即class为"ad"的元素）在1000毫秒内淡出视图。  
		$(this).parent().fadeOut(1000);
	});
});


// haerbin.html的图片切换
$(function() {
	// 绑定鼠标悬停事件到所有具有 'specific-image' 类的图片元素  
	// 当鼠标指针移动到这些图片上时，执行以下功能  
	$('.specific-image').mousemove(function() {
		// 更改当前图片元素的src属性，使其指向 'img/s1.jpg' 这张图片  
		$(this).attr('src', 'img/heb/2.png');
	});
	// 当鼠标指针从这些图片上移开时，执行以下功能  
	$('.specific-image').mouseout(function() {
		// 更改当前图片元素的src属性，使其指向 'img/1.jpeg' 这张图片  
		$(this).attr('src', 'img/heb/1.jpeg');
	});
});
// 下拉风格
$(document).ready(function() {

	$(".btn-slide").click(function() {
		$("#panel").slideToggle("slow");
		$(this).toggleClass("active");
	});


});

// 隐藏
$(document).ready(function() {

	$(".accordion h3:first").addClass("active");
	$(".accordion p:not(:first)").hide();

	$(".accordion h3").click(function() {
		$(this).next("p").slideToggle("slow")
			.siblings("p:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");
	});

});



// liaoning

$(document).ready(function() {

	$(".pane .delete").click(function() {
		$(this).parents(".pane").animate({
			opacity: 'hide'
		}, "slow");
	});

});


// beijing
$(document).ready(function() {
	$("h2").append("<em></em>");
	$(".thumbs a").mouseover(function() {
		var lujing = $(this).attr("href");
		var biaoti = $(this).attr("title")
		$("#largeImg").attr({
			src: lujing,
			alt: biaoti
		});
		$("h2 em").html(" (" + biaoti + ")");
	});
}); //文档就绪函数


// 个人简历
$(function() {
  // hover: 二合一事件，第一个参数是鼠标进入，第二个参数是鼠标离开
  $("#jl").hover(function() {
    $(this).css('opacity', '0.6');
  }, function() {
    $(this).css('opacity', '1');
  });
});