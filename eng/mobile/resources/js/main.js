$(function(){

	// 메인 비주얼 슬라이드
		var swiper_kv = new Swiper(".visual .swiper", {
			centeredSlides: true,
			loop: true,
			autoplay: {
				delay: 3500,
				disableOnInteraction: false
			},
			speed: 1300,
			pagination: {
				el: ".visual .swiper .swiper-pagination",
				clickable: true
			}
		});


	// business swiper_nav 슬라이드
		var swiper_business_nav = new Swiper(".business .swiper_nav", {
//			centeredSlides: true,
			slidesPerView: 'auto',
			spaceBetween: 25,
			watchSlidesProgress: true,
			freeMode: true,
		});

		// 클릭요소 중앙정렬
		function muCenter(target){
			var snbwrap = $('.business .swiper_nav .swiper-wrapper');
			var targetPos = target.position();
			var boxWidth = $('.business .swiper_nav').width();
			var wrapWidth=0;
			snbwrap.find('.swiper-slide').each(function(){ 
				wrapWidth += $(this).outerWidth() + 40;
			})
			wrapWidth = wrapWidth - 40;
			
			console.log(wrapWidth)
			var selectTargetPos = targetPos.left + target.outerWidth()/2;
			var pos;
			if (selectTargetPos <= boxWidth/2)  {
				pos = 0
				console.log('a')
			//	$('.societyGroupTab__prev').addClass('swiper-button-disabled'); // 사이드 그라데이션
			}
			else if (wrapWidth - selectTargetPos <= boxWidth/2) {
				pos = wrapWidth-boxWidth;
			//	$('.societyGroupTab__next').addClass('swiper-button-disabled'); // 사이드 그라데이션
				console.log('b')
			}
			else {
				pos = targetPos.left - (boxWidth/2) + (target.outerWidth()/2);
			//	$('.societyGroupTab__prev, .societyGroupTab__next').removeClass('swiper-button-disabled'); // 사이드 그라데이션
			
				console.log('c')
			}
			if(wrapWidth > boxWidth) {
				
				setTimeout(function(){snbwrap.css({
					"transform": "translate3d("+ (pos * -1) +"px, 0, 0)",
					"transition-duration": "500ms"
				})}, 200);
			}
		}

	// business swiper_cont 슬라이드
		var swiper_business_cont = new Swiper(".business .swiper_cont", {
			autoplay: {
				delay: 3500,
				disableOnInteraction: false
			},
			centeredSlides: true,
			spaceBetween: 40,
			speed: 1300,
			navigation: {
				nextEl: ".business .swiper_cont .swiper-button-next",
				prevEl: ".business .swiper_cont .swiper-button-prev"
			},on: {
				slideChangeTransitionEnd: function(){
					var idx = this.activeIndex;
					$('.business .swiper_nav .swiper-slide').eq(idx).find('a').trigger('click')

					//swiper_business_nav.slideTo(idx,500)
				},
			},
		});


		var $lankTitle = $('.business .swiper_nav .swiper-slide a');
		$lankTitle.click(function(){
			var target = $(this).parent();
			$lankTitle.parent().removeClass('on')
			target.addClass('on');
			muCenter(target);

			var idx = $(this).parent('.swiper-slide').index();
			swiper_business_cont.slideTo(idx, 200);

		});



	// about 뉴스 슬라이드
		newsSwiperHanddler();

		$('.tab_news').each(function(index){
			var $tab_news = $(this);
			var $tab_btn = $tab_news.find('.tab_btn')
			var $btn = $tab_btn.find('a');

			$btn.bind('click', function(e){
				e.preventDefault();
				var trgt = $(this).attr('href')
				$btn.parent('li').removeClass('on')
				$(this).parent('li').addClass('on');
				$tab_news.find('.tab_cont').removeClass('on')
				$(trgt).addClass('on')
			});
		});

	
		var swiper_popup_notice = new Swiper('.popup_notice .pop_cont', {
			centeredSlides: true,
//			loop: true,

			speed: 1300,
			pagination: {
				el: ".popup_notice .pop_cont .swiper-pagination",
				clickable: true
			},
			spaceBetween: 40,
		});
		function closeNoticePopup(e){
			e.parents('.swiper-slide').remove();
		}
		$('.popup_notice .pop_cont .btn_close').bind('click', function(){
			closeNoticePopup($(this));
			swiper_popup_notice.update();
			var lgt = $('.popup_notice .pop_cont .swiper-slide').length;
			if (lgt == 0){
				$('.popup_notice').fadeOut();
			}
		});


});


//about 뉴스 슬라이더
	function newsSwiperHanddler(){
		$('.about .list_news').each(function(index){
			var $this = $(this);
			var swiper = undefined;
			var slideNum =  $this.find('.swiper-slide').length //슬라이드 총 개수
			var slideInx = 0; //현재 슬라이드 index
	//		var loopChk = ''; //무한반복 체크

			sliderAct();
			function sliderAct(){
				$this.addClass("slider-" + index);
				var $slideBtnNext = '.slider-' + index + ' .swiper-button-next';
				var $slideBtnPrev = '.slider-' + index + ' .swiper-button-prev';
				//슬라이드 초기화
				if (swiper != undefined){ 
					swiper.destroy();
					swiper = undefined;
				}
				swiper = new Swiper('.slider-' + index, {
					slidesPerView: 1,
					grid: {
						rows: 2,
					},
					initialSlide :slideInx,
					loop: false,
					navigation: {
						nextEl: $slideBtnNext,
						prevEl: $slideBtnPrev,
					},
					on: {
						activeIndexChange: function () {
							slideInx = this.realIndex; //현재 슬라이드 index 갱신
						}
					},
				});
			}
		});
	}