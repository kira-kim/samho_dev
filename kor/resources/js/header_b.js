// // header 메뉴 스크롤 효과
// $(window).scroll(function(){
// 	if ($(this).scrollTop() > 70){
//     $(".b_header").addClass("header_background");
// 	} else{
// 		$(".b_header").removeClass("header_background");
// 	}
// });


// // header mouseover
// $(function(){
//   $(".header_txt, .header_cont").mouseover(function(){
//     $(".header_cont").show();
//     $(".header").css("background","#fff");
//   });
//   $(".header_txt, .header_cont").mouseout(function(){
//     $(".header_cont").hide();
//     $(".header").css("background","rgba(0,0,0,0)");
//   });
// });


// // header mouseover 폰트컬러효과
// $(function(){
//   $(".header_cont ul").mouseover(function(){
// 	  var idx = $(".header_cont ul").index(this);
// 	  $(".header_txt li:eq("+idx+") a").css("color","#0071d7"); 
//   });
//   $(".header_cont ul").mouseout(function(){
// 	  var idx = $(".header_cont ul").index(this);
// 	  $(".header_txt li:eq("+idx+") a").css("color","#222");    
//   });
// });



document.createElement('header');
document.createElement('nav');

$(function(){
  $(window).on('scroll resize', function(){
    $('#b_header').css('left', -$('html').scrollLeft());
  });
  // nav
  HeaderNav('#b_header');
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


// b_header mouseover
$(function(){
  if($('body').hasClass('b_header')){
    $('#b_header').addClass('HeaderMove');

    $('nav, .nav_2dep_bg').mouseover(function(){
      $('#b_header').addClass('active');
    })
    $('nav, .nav_2dep_bg').mouseleave(function(){
      $('#b_header').removeClass('active');
    });

      $(window).on('scroll');
  };
});

// Header Scroll Fixed
$(function(){
  if($('body')){
    $('nav, .nav_2dep_bg').mouseover(function(){
      $('#b_header').addClass('active');
    })
    $('nav, .nav_2dep_bg').mouseleave(function(){
      $('#b_header').removeClass('active');
    });

    $(document).scroll(function(){
      var WindowTop_Position = $(window).scrollTop();

      if (WindowTop_Position >= 70) {
        console.log("70");
        $('#b_header').removeClass('HeaderMove');
        // $('#b_header').addClass('active');
      }else{
        $('#b_header').addClass('HeaderMove');
        // $('#b_header').removeClass('active');
      };
    });
      $(window).on('scroll');
  };
});