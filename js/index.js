

$(function () {
  // 页面滚动到某位置显示
  let rty = $(".rty").offset().top;
  $(window).scroll(function () {
    if ($(document).scrollTop() >= 600 && $(document).scrollTop() < rty - 580) {
      $(".ycdh").fadeIn();
      $(".ks").fadeIn();
    } else {
      $(".ycdh").fadeOut();
      $(".ks").fadeOut();
    }
  });
  //鼠标放上变图片
  $(".ycdh ul li").hover(
    function () {
      // over
      $(this).find(".bv").css("zIndex", "1");
    },
    function () {
      // out
      $(this).find(".bv").css("zIndex", "-1");
    }
  );
  //   左侧快捷导航跳转
  $(".ks ul li").click(function () {
    let gund = $(".floor .w").eq($(this).index()).offset().top;
    console.log(gund);
    $("body,html").stop().animate({
      scrollTop: gund,
    });
    
  });
  //返回顶部
  $(".ycdh .back").click(function () {
    $("body,html").stop().animate({
      scrollTop: 0,
    });
  });
  $(window).scroll(function () { 
    let num = $(document).scrollTop()
    if (num>320) {
      $('.cv').addClass('animate__slideInUp')
      $('.xb li').addClass('animate__animated animate__fadeInBottomRight')
    }
    if (num > 1000) {
      $('.Lenovo .lk').addClass('animate__animated animate__fadeInTopLeft')
      $('.Lenovo .ok li').eq(0).addClass('animate__animated animate__fadeInTopLeft')
      $('.Lenovo .ok li').eq(4).addClass('animate__animated animate__fadeInTopLeft')
      $('.Lenovo .ok li').eq(1).addClass('animate__animated animate__fadeInDown')
      $('.Lenovo .ok li').eq(5).addClass('animate__animated animate__fadeInDown')
      $('.Lenovo .ok li').eq(2).addClass('animate__animated animate__fadeInDown')
      $('.Lenovo .ok li').eq(6).addClass('animate__animated animate__fadeInDown')
      $('.Lenovo .ok li').eq(3).addClass('animate__animated animate__fadeInTopRight')
      $('.Lenovo .ok li').eq(7).addClass('animate__animated animate__fadeInTopRight')
      
    }
    if (num > 1700) {
      $('.taishi .lk').addClass('animate__animated animate__fadeInTopLeft')
      $('.taishi .ok li').eq(0).addClass('animate__animated animate__zoomInDown')
      $('.taishi .ok li').eq(4).addClass('animate__animated animate__zoomInDown')
      $('.taishi .ok li').eq(1).addClass('animate__animated animate__slideInUp')
      $('.taishi .ok li').eq(5).addClass('animate__animated animate__slideInUp')
      $('.taishi .ok li').eq(2).addClass('animate__animated animate__slideInUp')
      $('.taishi .ok li').eq(6).addClass('animate__animated animate__slideInUp')
      $('.taishi .ok li').eq(3).addClass('animate__animated animate__lightSpeedInRight')
      $('.taishi .ok li').eq(7).addClass('animate__animated animate__lightSpeedInRight')
      
    }
    if (num > 2300) {
      $('.think .lk').addClass('animate__animated animate__flipInX')
      $('.think .ok li').eq(0).addClass('animate__animated animate__fadeInTopLeft')
      $('.think .ok li').eq(4).addClass('animate__animated animate__fadeInTopLeft')
      $('.think .ok li').eq(1).addClass('animate__animated animate__fadeInDown')
      $('.think .ok li').eq(5).addClass('animate__animated animate__fadeInDown')
      $('.think .ok li').eq(2).addClass('animate__animated animate__fadeInDown')
      $('.think .ok li').eq(6).addClass('animate__animated animate__fadeInDown')
      $('.think .ok li').eq(3).addClass('animate__animated animate__fadeInTopRight')
      $('.think .ok li').eq(7).addClass('animate__animated animate__fadeInTopRight')
      
    }
    if (num > 3100) {
      $('.shouji .lk').addClass('animate__animated animate__flipInY')
      $('.shouji .ok li').eq(0).addClass('animate__animated animate__fadeInTopLeft')
      $('.shouji .ok li').eq(4).addClass('animate__animated animate__fadeInTopLeft')
      $('.shouji .ok li').eq(1).addClass('animate__animated animate__backInUp')
      $('.shouji .ok li').eq(5).addClass('animate__animated animate__backInUp')
      $('.shouji .ok li').eq(2).addClass('animate__animated animate__backInUp')
      $('.shouji .ok li').eq(6).addClass('animate__animated animate__backInUp')
      $('.shouji .ok li').eq(3).addClass('animate__animated animate__backInRight')
      $('.shouji .ok li').eq(7).addClass('animate__animated animate__backInRight')
      
    }
    if (num > 3800) {
      $('.pbdn .lk').addClass('animate__animated animate__fadeInTopLeft')
      $('.pbdn .ok li').eq(0).addClass('animate__animated animate__fadeInTopLeft')
      $('.pbdn .ok li').eq(4).addClass('animate__animated animate__fadeInTopLeft')
      $('.pbdn .ok li').eq(1).addClass('animate__animated animate__fadeInDown')
      $('.pbdn .ok li').eq(5).addClass('animate__animated animate__fadeInDown')
      $('.pbdn .ok li').eq(2).addClass('animate__animated animate__fadeInDown')
      $('.pbdn .ok li').eq(6).addClass('animate__animated animate__fadeInDown')
      $('.pbdn .ok li').eq(3).addClass('animate__animated animate__fadeInTopRight')
      $('.pbdn .ok li').eq(7).addClass('animate__animated animate__fadeInTopRight')
      
    }
    if (num > 4000) {
      $('.xsq .lk').addClass('animate__animated animate__fadeInTopLeft')
      $('.xsq .ok li').eq(0).addClass('animate__animated animate__fadeInBottomLeft')
      $('.xsq .ok li').eq(4).addClass('animate__animated animate__fadeInBottomLeft')
      $('.xsq .ok li').eq(1).addClass('animate__animated animate__rubberBand')
      $('.xsq .ok li').eq(5).addClass('animate__animated animate__rubberBand')
      $('.xsq .ok li').eq(2).addClass('animate__animated animate__rubberBand')
      $('.xsq .ok li').eq(6).addClass('animate__animated animate__rubberBand')
      $('.xsq .ok li').eq(3).addClass('animate__animated animate__fadeInBottomRight')
      $('.xsq .ok li').eq(7).addClass('animate__animated animate__fadeInBottomRight')
      
    }

   
  })
});
