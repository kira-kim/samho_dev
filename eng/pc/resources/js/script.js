
// 스크롤 탑 버튼
$(window).scroll(function(){
	if ($(this).scrollTop() > 300){
		$('.scroll_top').show();
	} else{
		$('.scroll_top').hide();
	}
  if ($(this).scrollTop() > 400){
		$('.scroll_top').css("opacity","1");
	} else{
		$('.scroll_top').css("opacity","0");
	}
});

$(function() {
  var $w = $(window),
    footerHei = $('footer').outerHeight(),
    $scroll_top = $('.scroll_top');

  $w.on('scroll', function() {
    var sT = $w.scrollTop();
    var val = $(document).height() - $w.height() - footerHei;
    if (sT >= val)
        $scroll_top.addClass('on')
    else
        $scroll_top.removeClass('on')
  });
});




// 회사소개페이지 제외 나머지 탭
$(function(){
  var border_active = $(".cont_tit .cont_active");
  border_active.parent().find("a").click(function(){ 
  border_active.removeClass("active");
  $(this).addClass("active");
  });
});

// 회사소개페이지 제외 나머지 cont_tit
$(function(){
  $(".cont_tit a").on('click',function(){
    var click_tab_idx = $(".cont_tit a").index(this);
    var click_cont_idx = $(".section_cont section").index(this);
    if (click_tab_idx == click_cont_idx){
      $(".section_cont section:eq("+click_tab_idx+")").css("display","block !important");
      $(".section_cont section").not(".section_cont section:eq("+click_tab_idx+")").css("display","none");
    } else {
      $(".section_cont section:eq("+click_tab_idx+")").css("display","block");
      $(".section_cont section").not(".section_cont section:eq("+click_tab_idx+")").css("display","none");
    }
  });
});



// 메인페이지 countup 효과
var salesTxt= 355733;
var t = true;

$(window).scroll(function(){
  if($(document).scrollTop() > 1550) {
    if(t == true) {
      $({ val : 0 }).animate({ val : salesTxt }, {
        duration: 1500,
        step: function() {
          var num = numberWithCommas(Math.floor(this.val));
          $(".sale").text(num);
        },
        complete: function() {
          var num = numberWithCommas(Math.floor(this.val));
          $(".sale").text(num);
        }
      },"swing");
    t = false;
    }
  };
});
function numberWithCommas(x) {
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 메인페이지 팝업 닫기



// 회사소개 탭
$(function(){
  var active = $(".intro .cont_active");
  active.parent().find("a").click(function(){ 
  active.removeClass("active");
  $(this).addClass("active");

  if ($(this).scrollTop() > 300){
    $(".intro .cont_active01").removeClass("active");
  } else{
    setTimeout(() =>   {
      $(".intro .cont_active01").addClass("active");
      $(".intro .cont_active02").removeClass("active");
      $(".intro .cont_active03").removeClass("active");
      $(".intro .cont_active04").removeClass("active");
      $(".intro .cont_active05").removeClass("active");
      $(".intro .cont_active06").removeClass("active");
    }, 100)
  }
  });
});


// 회사소개 연혁 탭
$(function(){
  var active = $(".history_tab>div");
  active.parent().find("div").click(function(){ 
  active.removeClass("active");
  $(this).addClass("active");
  });
});

$(function(){
  $(".history_tab div").on('click',function(){
    var tab_idx = $(".history_tab>div").index(this);
    var cont_idx = $(".history_cont_cont>div").index(this);
    if (tab_idx == cont_idx){
      $(".history_cont_cont>div:eq("+tab_idx+")").css("display","block !important");
      $(".history_cont_cont>div").not(".history_cont_cont>div:eq("+tab_idx+")").css("display","none");
    } else {
      $(".history_cont_cont>div:eq("+tab_idx+")").css("display","block");
      $(".history_cont_cont>div").not(".history_cont_cont>div:eq("+tab_idx+")").css("display","none");
    }
  });
});



// 회사소개 way_to tab 보더
$(function(){
  var way_tab_active = $(".way_to .way_to_tab>div");
  way_tab_active.parent().find("div").click(function(){ 
  way_tab_active.removeClass("active");
  $(this).addClass("active");
  });
});

// 회사소개 way_to_map
$(function(){
  $(".way_to .way_to_tab_headquartes").on('click',function(){
    $(".way_to .way_to_map_headquartes").show();
    $(".way_to .way_to_map_seoul").hide();
  });
  $(".way_to .way_to_tab_seoul").on('click',function(){
    $(".way_to .way_to_map_seoul").show();
    $(".way_to .way_to_map_headquartes").hide();
  });
});


// 주요 사업 >> 건축/조경/골재 슬라이드 이미지
var intro_slide = $(".intro_slide .swiper-slide>div").index(this);
var active = 0

$(function(){
  $(".intro_slide .box_next_btn").on("click",function(){
    active ++
    if(active == 6){
      active == 1
    }
    $('.intro_slide .swiper-slide>div:eq('+active+')').addClass("active");
    $('.intro_slide .swiper-slide>div').not('.intro_slide .swiper-slide>div:eq('+active+')').removeClass("active");
    $(".intro_slide .slide_big img").attr('src','../resources/images/major/landscape_img0'+active+'.jpg')
  });
});
$(function(){
  $(".intro_slide .box_prev_btn").on("click",function(){
    active --
    if(active == 1){
      active == 6
    }
    $('.intro_slide .swiper-slide>div:eq('+active+')').addClass("active");
    $(".intro_slide .swiper-slide>div").not('.intro_slide .swiper-slide>div:eq('+active+')').removeClass("active");
    $(".intro_slide .slide_big img").attr('src','../resources/images/major/landscape_img0'+active+'.jpg')
  });
});

// 슬라이드 이미지 클릭 border
$(function(){
  var active = $(".intro_slide .slide .swiper-slide .slide_img");
  active.parent().find(".slide_img").click(function(){ 
  active.removeClass("active");
  $(this).addClass("active");
  });
});

// 해당 이미지 크게
function change(str){
  document.getElementsById("slide_big_img").src=str;
}
function change2(s){
  document.getElementById("slide_big_img").src=s.src;
}


// 주요사업 > 토목건축 popup
$(function(){
  $(".engineering_intro .intro_popup .popup_close").on("click",function(){
    $(".engineering_intro .intro_popup").hide();
    $("html").css("overflow","auto")
  });
});

var slide_idx = $(".engineering_intro .intro_cont .cont>div").index(this);
var slide_Swiper = new Swiper('.engineering_intro .intro_popup .mySwiper', { initialSlide: 'slide_idx' });  

$(function(){
  $(".engineering_intro .intro_cont .cont>div").on("click",function(){
    $(".engineering_intro .intro_popup .swiper-wrapper:eq("+slide_idx+")").show();
    $(".engineering_intro .intro_popup").show();
    $("html").css("overflow","hidden");
  });
});


// 주요사업 >> 아스콘 지도 탭
$(function(){
  var border_active = $(".map_tab div");
  border_active.parent().find("div").click(function(){ 
  border_active.removeClass("active");
  $(this).addClass("active");
  });
});

$(function(){
  $(".map_tab .map01_tab").on("click",function(){
    $(".map01").show();
    $(".map02").hide();
  });
  $(".map_tab .map02_tab").on("click",function(){
    $(".map02").show();
    $(".map01").hide();
  });
});


// 주요사업 >> 건설기계 탭
$(function(){
  var border_active = $(".machine_tab div");
  border_active.parent().find("div").click(function(){ 
  border_active.removeClass("active");
  $(this).addClass("active");
  });
});

$(function(){
  $(".machine_tab>div").on('click',function(){
    var machine_tab_idx = $(".machine_tab>div").index(this);
    var machine_cont_idx = $(".machine_cont>div").index(this);
    if (machine_tab_idx == machine_cont_idx){
      $(".machine_cont>div:eq("+machine_tab_idx+")").css("display","block !important");
      $(".machine_cont>div").not(".machine_cont>div:eq("+machine_tab_idx+")").css("display","none");
    } else {
      $(".machine_cont>div:eq("+machine_tab_idx+")").css("display","block");
      $(".machine_cont>div").not(".machine_cont>div:eq("+machine_tab_idx+")").css("display","none");
    }
  });
});


// 사업실적 >> 시공능력 탭
$(function(){
  var ability_active = $(".ability_tab>div");
  ability_active.parent().find("div").click(function(){ 
    ability_active.removeClass("active");
    $(this).addClass("active");
  });
});
$(function(){
  $(".ability_tab .normal").on("click",function(){
    $(".ability_infor .normal_cont").show();
    $(".ability_infor .specialty_cont").hide();
  });
  $(".ability_tab .specialty").on("click",function(){
    $(".ability_infor .specialty_cont").show();
    $(".ability_infor .normal_cont").hide();
  });
});

// 사업실적 >> 시공실적 뷰

$(function(){
  $(".list_cont_box").on("click",function(){
    $(".performance_popup").show();
    $("html").css("overflow","hidden");
  });
});

$(function(){
  $(".performance_popup .clo_btn").on("click",function(){
    $(".performance_popup").hide();
    $("html").css("overflow","auto");
  });
});


// 투자정보 > 재무정보 탭
$(function(){
  var financial_tab_active = $(".financial_tab>div");
  financial_tab_active.parent().find("div").click(function(){ 
  financial_tab_active.removeClass("active");
  $(this).addClass("active");
  });
});
// 투자정보 > 재무정보 탭
$(function(){
  $(".financial_tab>div").on('click',function(){
    var financial_tab_idx = $(".financial_tab>div").index(this);
    var financial_cont_idx = $(".financial_cont>div").index(this);
    if (financial_tab_idx == financial_cont_idx){
      $(".financial_cont>div:eq("+financial_tab_idx+")").css("display","block !important");
      $(".financial_cont>div").not(".financial_cont>div:eq("+financial_tab_idx+")").css("display","none");
    } else {
      $(".financial_cont>div:eq("+financial_tab_idx+")").css("display","block");
      $(".financial_cont>div").not(".financial_cont>div:eq("+financial_tab_idx+")").css("display","none");
    }
  });
});

// 지속가능경영 탭
$(function(){
  var active = $(".sustainability .cont_active");
  active.parent().find("a").click(function(){ 
  active.removeClass("active");
  $(this).addClass("active");

  if ($(this).scrollTop() > 300){
    $(".sustainability .cont_active01").removeClass("active");
  } else{
    setTimeout(() =>   {
      $(".sustainability .cont_active01").addClass("active");
      $(".sustainability .cont_active02").removeClass("active");
    }, 100)
  }
  });
});


// 인재채용 >> 채용공고
$(function(){
  var border_active = $(".table_info .kinds button");
  border_active.parent().find("button").click(function(){ 
  border_active.removeClass("active");
  $(this).addClass("active");
  });
});

// 인재채용 >> 채용공고 >> 입력정보 확인

// 생년월일 선택
$(document).ready(function(){
	setyear();
});    
  function setyear(){
  var y_sel = new Date();
  var year = "";
  var com_year = y_sel.getFullYear();
    $("#birth_y_sel").append("<option value=''>선택</option>");
  // 올해 기준으로 80세 까지
  for(var y = (com_year); y >= (com_year-92); y--){
	  $("#birth_y_sel").append("<option value='"+ y +"'>"+ y  +"</option>");
	}
  var month;
  $("#birth_m_sel").append("<option value=''>선택</option>");
    for(var i = 1; i <= 12; i++){
      $("#birth_m_sel").append("<option value='"+ i +"'>"+ i +"</option>");
  }
  var day;
  $("#birth_d_sel").append("<option value=''>선택</option>");
    for(var i = 1; i <= 31; i++){
      $("#birth_d_sel").append("<option value='"+ i +"'>"+ i +"</option>");
  }
}

// popup
$(function(){
  $(".basic_info_cont .send_btn button").on("click",function(){
    $(".basic_info_popup_bg").show();
    $("html").css("overflow","hidden");
  });
  $(".basic_info_popup .send_btn .cancel").on("click",function(){
    $(".basic_info_popup_bg").hide();
    $("html").css("overflow","auto");
  });
});


// 인재채용 >> 채용공고 >> 지원서 작성
// 증명사진 지우기
$(function(){
	$(".pic .clo_btn").on("click",function(){
		$(".pic div").hide();
	});
});

// 입사지원서 확인 팝업
$(function(){
	$(".appli_popup .close_btn").on("click",function(){
		$(".appli_popup").hide();
		$("html").css("overflow","auto");
	});
	$(".appli_popup .eddit").on("click",function(){
		$(".appli_popup").hide();
		$("html").css("overflow","auto");
	});
	$(".application_cont .preview").on("click",function(){
		$(".appli_popup").show();
		$("html").css("overflow","hidden");
	});
});



// 홍보센터 >> 수상실적
$(function () {
    var border_active = $(".awards_tab div");
    border_active
        .parent()
        .find("div")
        .click(function () {
            border_active.removeClass("active");
            $(this).addClass("active");
        });
});

$(function () {
    $(".awards_tab div").on('click', function () {
        var awards_tab_idx = $(".awards_tab div").index(this);
        var awards_cont_idx = $(".section_cont section").index(this);
        if (awards_tab_idx == awards_cont_idx) {
            $(".awards_cont_cont>div:eq(" + awards_tab_idx + ")").css("display","block !important");
            $(".awards_cont_cont>div")
                .not(".awards_cont_cont>div:eq(" + awards_tab_idx + ")")
                .css("display", "none");
        } else {
            $(".awards_cont_cont>div:eq(" + awards_tab_idx + ")").css("display", "block");
            $(".awards_cont_cont>div")
                .not(".awards_cont_cont>div:eq(" + awards_tab_idx + ")")
                .css("display", "none");
        }
    });
});



// 홍보센터 >> 브로슈어
$(function(){
	$(".file_save .kor .img").on('mouseenter', function(){
		$(".file_save .kor .pre").show();
	});
	$(".file_save .kor .img").on('mouseleave', function(){
		$(".file_save .kor .pre").hide();
	});
	$(".file_save .en .img").on('mouseenter', function(){
		$(".file_save .en .pre").show();
	});
	$(".file_save .en .img").on('mouseleave', function(){
		$(".file_save .en .pre").hide();
	});
});