$(window).scroll(function(){
	if ($(this).scrollTop() > 70){
    $(".w_header").addClass("header_background");
    $(".w_header .header_txt ul a").addClass("b");
    $(".w_header .header_txt ul a").removeClass("w");
    changeIMGb();
	} else{
		$(".w_header").removeClass("header_background");
    $(".w_header .header_txt ul a").removeClass("b");
    $(".w_header .header_txt ul a").addClass("w");
    changeIMGw();
	}
});
function changeIMGb(){
  $(".w_logo").attr("src", "resources/images/b_logo.png");
}
function changeIMGw(){
  $(".w_logo").attr("src", "resources/images/w_logo.png");
}