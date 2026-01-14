if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
 var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
};



$(function(){
    // 一级触摸---导航置顶固定
    var scrollTop = $(window).scrollTop();
    $navitem = $('.header .nav>ul>li');
    $navitem.mouseenter(function() {
         $('.header').addClass('headerColor2');
    });
    $('.header .nav').mouseleave(function(){
          if(scrollTop < 90){
              $('.header').removeClass('headerColor2');
          }
    })

    //手机导航
	$(".menubtn").click(function(){
		  $(this).parent('.header-box').toggleClass("on");
	});
	$(".nav li span").click(function(){
        $(this).children('i').toggleClass('on');
        $(this).next().toggleClass('on').siblings().removeClass('on');
	})	

    //banner    swiper用法
	var mySwiper = new Swiper('.banner',{
        // 如果需要分页器
        pagination: {
            el: ".swiper-pagination",
            clickable:true
        },
        navigation: {
            nextEl: '.banner .swiper-button-next',
            prevEl: '.banner .swiper-button-prev',
        }, 
        loop: true,
        speed:1000,
        effect : 'fade',
        fade: {crossFade: true,},
        autoplay:8000,
        autoHeight: true,//高度随内容而变化
    });

    // 上下联动
    // var swiper = new Swiper(".detailSwBot .swiper-container", {
    //       spaceBetween: 1,
    //       slidesPerView: 5,
    //       freeMode: true,
    //       watchSlidesProgress: true,
    // });
    // var swiper2 = new Swiper(".detailSwtop .swiper-container", {
    //       spaceBetween: 10,
    //       thumbs: {
    //         swiper: swiper,
    //       },
    // });

    // 自适应
     var swiper = new Swiper('.partner-box .swiper-container', {
          slidesPerView: 5,
          spaceBetween: 15,
        //   loop: true,
          autoplay:true,
          navigation: {
            nextEl: '.partner-box .swiper-button-next',
            prevEl: '.partner-box .swiper-button-prev',
          },  
           breakpoints: { 
                750: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
            }   
    });

    // tab
    function qiehuan(qhmain, qhan, qhshow, qhon) {
        $(qhan).click(function() {
            $(this).parents(qhmain).find(qhan).removeClass(qhon);
            $(this).addClass(qhon);
            var i = $(this).index();
            $(this).parents(qhmain).find(qhshow).eq(i).show();
            $(this).parents(qhmain).find(qhshow).eq(i).siblings(qhshow).hide();
        });
    }
    /*qiehuan(".hptab",".hp_tit span",".hpbox","act_hp");*/

    //回到顶部
    $('#topback').click(function () {$('html,body').stop().animate({scrollTop: '0px'}, 300);});
   //招贤纳士
    $(".job_show dt.on").next("dd").show()
    $(".job_show dt").click(function(){
        $(this).toggleClass("on");
        $(this).next("dd").toggle(200).toggleClass("on");
        $(this).siblings("dt").next("dd").hide(200);
    });

    //全局变量
    _width=$(window).width();
    _height=$(window).height();
    //弹窗内容居中
    $('.pupCell').css({width:_width,height:_height,});
    //通用弹窗
    $(".pupBox").css("height",$(document).height() + "px")
    $('.pupClose').click(function(){$(this).parents('.pupBox').fadeOut();});

    $('.pupcu').click(function(){
        var id=$(this).attr('data-id');
        id='#'+id;
        console.log(id)
        $(id).fadeIn();
        $(this).parents('.pupBox').show();
    });


})

//图片高度自适应
function f(){
    //全局图片计算
    $(".imgW").each(function(index,element){
        var boxW=$(this).parents('.boxW').width();
        var imgw=$(this).find('.img').attr('width');
        var imgh=$(this).find('.img').attr('height');
        var imgW=$(this).width();
        $(this).siblings('.mlW').css('width',boxW-imgW-10);
        if($(this).parents().hasClass('img-list')){
            var imgW1=$(this).parents('.img-list').children(".imgW:first-child").width();
            $(this).find('.img').css('height',imgh/imgw*imgW1);
            
        }else{
            $(this).find('.img').css('height',imgh/imgw*imgW);
        }
        console.log(imgW)     
});


//图片列表---图片
        $(".img-list").each(function(index,element){
            var imgw=$(this).attr('width');
            var imgh=$(this).attr('height');
            var imgW=$(this).find('.imgW').width();
            $(this).find('.imgW').css('height',imgh/imgw*imgW);
            console.log(imgW)
        });
}




// 窗口变化
window.onresize =function(){f();}


// 购物车
$(document).ready(function(){
  //加
  $(".add").click(function(){
    var n=$(this).prev().val();
    var num=parseInt(n)+1;
    if(num==0){ return;}
    $(this).prev().val(num);
  });
  //减
  $(".jian").click(function(){
    var n=$(this).next().val();
    var num=parseInt(n)-1;
    if(num==0){ return}
    $(this).next().val(num);
  });
})


