
// nav 클릭 드롭다운
$(function(){
  $(".nav_menu").on('click',function(){
    $(this).children(".submenu").stop().slideToggle();
  });
});



// 관리자등급관리 팝업
$(function(){
  $(".individual_set .close_btn").on('click',function(){
    $(".individual_set").hide();
  });
});