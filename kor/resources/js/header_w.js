
// function changeIMGb(){
//   $(".w_logo").attr("src", "resources/images/b_logo.png");
// }
// function changeIMGw(){
//   $(".w_logo").attr("src", "resources/images/w_logo.png");
// }

// // header mouseover
// $(function(){
//   $(".header_txt, .header_cont").mouseover(function(){
//     $(".header_cont").show();
//     $(".header").css("background","#fff");
//     $(".w_header .header_txt ul a").addClass("b");
//     $(".w_header .header_txt ul a").removeClass("w");
//     $("header .header_sub a").addClass("b");
//     $("header .header_sub a").removeClass("w");
//     changeIMGb();
//   });
//   $(".header_txt, .header_cont").mouseout(function(){
//     $(".header_cont").hide();
//     $(".header").css("background","rgba(0,0,0,0)");
//     // $(".w_header .header_txt ul a").removeClass("b");
//     $(".w_header .header_txt ul a").addClass("w");
//     // $("header .header_sub a").removeClass("b");
//     // $("header .header_sub a").addClass("w");
//     // changeIMGw();
//   });
// });


// $(window).scroll(function(){
// 	if ($(this).scrollTop() > 70){
//     $("#w_header").addClass("header_background");
//     // $(".w_header .header_txt ul a").addClass("b");
//     // $(".w_header .header_txt ul a").removeClass("w");
//     // $("header .header_sub a").addClass("b");
//     // $("header .header_sub a").removeClass("w");
//     // changeIMGb();
// 	} else{
// 		$("#w_header").removeClass("header_background");
//     // $(".w_header .header_txt ul a").removeClass("b");
//     // $(".w_header .header_txt ul a").addClass("w");
//     // $("header .header_sub a").removeClass("b");
//     // $("header .header_sub a").addClass("w");
//     // changeIMGw();
// 	}
// });


// header mouseover 폰트컬러효과
// $(function(){
//   $("nav li").mouseover(function(){
// 	  var idx = $("nav li").index(this);
// 	  $("nav li:eq("+idx+") a").css("color","#0071d7"); 
//   });
//   $("nav li").mouseout(function(){
// 	  var idx = $("nav li").index(this);
// 	  $("nav li:eq("+idx+") a").css("color","inherit");    
//   });
// });

document.createElement('header');
document.createElement('nav');

$(function(){
  $(window).on('scroll resize', function(){
    $('#w_header').css('left', -$('html').scrollLeft());
  });
  // nav
  HeaderNav('#w_header');
  function HeaderNav(){
    var $SelectOpen = false;
    $('.selected_language').bind('click', function(){
      if(!$SelectOpen){
        $(this).addClass('active');
        $(this).next('ul').slideDown();
        $SelectOpen = true;
      }else{
        $(this).removeClass('active');
        $(this).next('ul').slideUp();
        $SelectOpen = false;
      };
    });

    $('nav, .nav_2dep_bg').mouseover(function(){
      $('.nav_2dep').stop().animate({height:'350px'}, 300, 'linear');
      $('.nav_2dep_bg').stop().animate({height:'470px'}, 200, 'linear');
    })
    $('nav, .nav_2dep_bg').mouseleave(function(){
      $('.nav_2dep').stop().animate({height:'0px'}, 200, 'linear');
      $('.nav_2dep_bg').stop().animate({height:'0px'}, 300, 'linear');
    });

    $('nav li').mouseover(function(){
      $(this).children('p').addClass('active');
    });
    $('nav li').mouseleave(function(){
      $(this).children('p').removeClass('active');
    });
  };
});


// w_header mouseover
$(function(){
  if($('body').hasClass('w_header')){
    $('#w_header').addClass('HeaderMove');

    $('nav, .nav_2dep_bg').mouseover(function(){
      $('#w_header').addClass('active');
    })
    $('nav, .nav_2dep_bg').mouseleave(function(){
      $('#w_header').removeClass('active');
    });

      $(window).on('scroll');
  };
});

// Header Scroll Fixed
$(function(){
  if($('body')){
    $('nav, .nav_2dep_bg').mouseover(function(){
      $('#w_header').addClass('active');
    })
    $('nav, .nav_2dep_bg').mouseleave(function(){
      $('#w_header').removeClass('active');
    });

    $(document).scroll(function(){
      var WindowTop_Position = $(window).scrollTop();

      if (WindowTop_Position >= 70) {
        console.log("70");
        $('#w_header').removeClass('HeaderMove');
        // $('#w_header').addClass('active');
      }else{
        $('#w_header').addClass('HeaderMove');
        // $('#w_header').removeClass('active');
      };
    });
      $(window).on('scroll');
  };
});