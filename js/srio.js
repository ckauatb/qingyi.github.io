$(function () {
    // 页面滚动到某位置显示
    let rty = $(".rty").offset().top;
    $(window).scroll(function () {
      if ($(document).scrollTop() >= 200 && $(document).scrollTop() < rty - 600) {
        $(".ycdh").fadeIn();

      } else {
        $(".ycdh").fadeOut();
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
    //返回顶部
    $(".ycdh .back").click(function () {
      $("body,html").stop().animate({
        scrollTop: 0,
      });
    });
    $(window).scroll(function () { 
      let num = $(document).scrollTop()
      console.log(num);
      if (num>790) {
       $('.b .hk-1').addClass('animate__animated animate__fadeInTopLeft')
      }
      if (num > 1080) {
      
        $('.b .hk-2 img').addClass('animate__animated animate__fadeInRightBig')
        
      }
      if (num > 1120) {
        $('.b .hk-3 img').addClass('animate__animated animate__fadeInLeftBig')
        
      }
      if (num > 1210) {
        $('.b .hk-5 img').addClass('animate__animated animate__fadeInUpBig')
        
      }
      if (num > 1300) {
        $('.b .hk-6 img').addClass('animate__animated animate__fadeInBottomRight')
        // $('.b .hk-4 img').addClass('animate__animated animate__fadeIn')
      }
      if (num > 1180) {
        // $('.b .hk-6 img').addClass('animate__animated animate__fadeInBottomRight')
        $('.b .hk-4 img').addClass('animate__animated animate__fadeIn')
      }
    
     
    })
  });
  
