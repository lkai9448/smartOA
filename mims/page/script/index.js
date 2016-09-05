//关闭click.bs.dropdown.data-api事件，使顶级菜单可点击
$(document).off('click.bs.dropdown.data-api');
//自动展开
$('.nav .dropdown').mouseenter(function () {
    $(this).addClass('open');
});
//自动关闭
$('.nav .dropdown').mouseleave(function () {
    $(this).removeClass('open');
});

// 在登录模态框中打开忘记密码模态框
$("#forget-pass").bind('click', function () {
    $("#loginModal").modal('hide');
    $("#forgetPassModal").modal({backdrop: 'static', keyboard: false, show: true});
});

// 在登录模态框中打开注册模态框
$("#register").bind('click', function () {
    $("#loginModal").modal('hide');
    $("#registerModal").modal({backdrop: 'static', keyboard: false, show: true});
});

$(".nav-con ul li").hover(function () {
    $(this).find("ul").show();
});

$('.area-item .tit').bind('click', function() {
    var list = $(this).next('.hosp-list');
    if(list.is(':hidden')) {
        list.slideDown(200);
        $(this).find(".up-down").removeClass('fa-chevron-down').addClass('fa-chevron-up');
    } else {
        list.slideUp(200);
        $(this).find('.up-down').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    }
});

$('.hos-search input').bind('focus', function () {
    $(this).parent().parent().css("border-color", "#37c249");
    $(this).next().css({
        background: "#37c249",
        color: "#fff"
    });
});

$('.hos-search input').bind('blur', function () {
    $(this).parent().parent().css("border-color", "#ccc");
    $(this).next().css({
        background: "#fff",
        color: "#666"
    });
});

$('.web-call .close-call-window').bind('click', function() {
   $('.web-call').slideUp();
});

// 浏览器滚动条滚动到一定位置，导航条置顶显示
function navbarFixedTop(){
    var top = $(document).scrollTop();
    if($(document).scrollTop()>148){
        $('header').fadeOut();
        $('.navbar2').slideDown();
    } else {
        $('.navbar2').fadeOut();
        $('header').fadeIn();
    }
    setTimeout(navbarFixedTop);
}

navbarFixedTop();

$('.hos-info .area-item').bind('click', function () {
   $(this).siblings('div').removeClass('active');
    $(this).addClass('active');
});

$('.open-more').bind('click', function() {
    $(this).prev(".filter-list").addClass("toggle-list");
    $(this).hide();
    $(this).next(".close-more").fadeIn(200);
});

$('.close-more').bind('click', function() {
    $(this).siblings(".filter-list").removeClass("toggle-list");
    $(this).hide();
    $(this).prev(".open-more").fadeIn(200);
});

$(".filter-list li").bind('click', function () {
    $(this).siblings('li').find('a').removeClass("tg-ft");
   $(this).find('a').addClass("tg-ft");
});

$(".search-result-toolbar label.radio").bind('click', function () {
    $(this).siblings('.checked').removeClass('checked');
    $(this).addClass('checked');
    return false;
});

$(".search-result-toolbar label.checkbox").bind('click', function () {
    if(!$(this).hasClass('checked')) {
        $(this).addClass('checked');
    } else {
        $(this).removeClass('checked');
    }
    return false;
});

$(function () {
    var ul = $('.carousel-next').siblings(".carousel-clip-region").find("ul.carousel-list");
//    $.each(function)
    var ghSize = ul.length;
//    alert(ghSize);
});

//$('.doc-results li').bind('mouseenter', function () {
//   $(this).addClass('hover');
//});
//$('.doc-results li').bind('mouseleave', function () {
//    $(this).removeClass('hover');
//});

$('.carousel-next').bind('click', function () {
    var ul = $(this).siblings(".carousel-clip-region").find("ul.carousel-list");
    var ghSize = ul.find("li").length;

    if(ghSize > 4) {
        var left = ul.position().left;
        if(left > -((ghSize - 2) * 95)) {
            left -= 95 * 4;
            $('.carousel-prev').fadeIn();
        }

        var _left = parseInt(left);

        if(_left >= -((ghSize - 1) * 95) && _left <= -((ghSize - 4) * 95)) {
            left = -((ghSize - 3) * 95);
            $('.carousel-next').fadeOut();
        }
        if(_left == -((ghSize - 4) * 95)) {
            left = -((ghSize - 4) * 95);
            $('.carousel-next').fadeOut();
        }
        ul.animate({
            "left": left + "px"
        }, 400);
    }
});

$('.carousel-prev').bind('click', function () {
    var ul = $(this).siblings(".carousel-clip-region").find("ul.carousel-list");
    var ghSize = ul.find("li").length;

    if(ghSize > 4) {
        var left = ul.position().left;

        if(left >= -95 * 4 && left <= 0) {
            left = 0;
            $('.carousel-prev').fadeOut();
            $('.carousel-next').fadeIn();
        }
        if(left < 0) {
            left += 95*4;
        }
        ul.animate({
            "left": left + "px"
        }, 400);
    }
});
$('#pageToNum').focus(function () {
    $(this).parent().addClass("pageto-focus");
});
$('#pageToNum').blur(function () {
    $(this).parent().removeClass("pageto-focus");
});
