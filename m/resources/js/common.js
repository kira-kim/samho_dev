$(document).ready(function(){
	// a link
		$("a").each(function(){
			if( $(this).attr("href") == "#" || $(this).attr("href") == "#none" || $(this).attr("href") == ""){
				$(this).attr("href", "javascript:void(0)");
			}
		});


	// btn gotop
	var $w = $(window),
		footerHei = $('#footer').outerHeight(),
		$btnGoTop = $('#btn_gotop');

	$w.on('scroll', function(){
		goTopHandler();
	});
	$btnGoTop.bind('click', function(){
		$('html, body').animate({
			scrollTop: 0
		}, 500)
	});

	function goTopHandler(){
		var sT = $w.scrollTop();
		var winH = $(window).height();
		var val = $(document).height() -  winH - footerHei;
		if (sT < 500){  //sT < winH
			$btnGoTop.css({
				'opacity': 0,
				'z-index':-1
			});
		}else{
			$btnGoTop.css({
				'opacity': 1,
				'z-index' : 1
			});
		}
		if (sT >= val){
			$btnGoTop.addClass('on')
		}
		else{
	        $btnGoTop.removeClass('on')
		}
		$(window).on('scroll');
	}


	// header
		var $header = $('#header');
		var $language_select = $header.find('.language_select');
		var $btn_lang = $language_select.find('.btn_language');
		var $btn_gnb = $header.find('.btn_gnb');
		var $gnb = $('#gnb');
		var $NavOpen = false;
		var $LangOpen = false;
		$btn_gnb.bind('click', function(){
			if(!$NavOpen){
				$header.addClass('gnb_open');
				$language_select.fadeIn();
				$NavOpen = true;
				$('html, body').css('overflow-y', 'hidden')
			}
			else{
				gnbClose();
			}
		});
		function gnbClose(){
			$header.removeClass('gnb_open');
			$language_select.fadeOut();
			$NavOpen = false;
			$('html, body').css('overflow-y', 'auto')
		}

		$btn_lang.bind('click', function(){
			if (!$LangOpen){	
				$(this).next('.list').stop().slideDown();
				$language_select.addClass('open');
				$LangOpen = true;
			}else{
				$(this).next('.list').slideUp();
				$language_select.removeClass('open');
				$LangOpen = false;
			}
		});
		$gnb.find('.nav_1dep > li > a').bind('click', function(){
			var $gnb1depLi = $gnb.find('.nav_1dep > li')
			var $this = $(this);
			var $thisP = $this.parent('li');
			var $notthis = $gnb1depLi.not($this);
			if($thisP.hasClass('active')){
				$this.next('.nav_2dep').stop().slideUp();
				$thisP.removeClass('active');
			}else{
				$notthis.removeClass('active');
				$notthis.find('.nav_2dep').stop().slideUp();
				$this.next('.nav_2dep').stop().slideDown();
				$thisP.addClass('active');
			}
		});
		$gnb.find('.nav_2dep > li > a').bind('click', function(){
			var url = $(location).attr('href'),
				urlId = url.split('#'),
				urlTrgt = urlId[1];
				$urlTrgt = $('#' + urlTrgt);
			if (urlTrgt === undefined){
				
			}else{
				gnbClose();
				moveScrollSnb($urlTrgt);
			}
		});


	// Header Scroll Fixed
			$(document).scroll(function(){
				var WindowTop_Position = $(window).scrollTop();
				var $Window_Height = $(window).height();
				var stnd;

				if ($('#wrap').hasClass('main')){
					stnd = 110;
				}else {
					stnd = 110;
				}

				if(WindowTop_Position >= stnd){
					$('#header').addClass('scrolled');
				}else{
					$('#header').removeClass('scrolled');
				};
			});
			$(window).on('scroll');


	//Popup
		$('.popup_content').wrap('<div class="div_table"><div class="div_table_cell"></div></div>');
		$('.popup_open').bind('click', function(){
			$('html').css('overflowY', 'hidden');

			var Open_Data = $(this).attr('data-Popup_Open');
			var OpenData_Class = $('.' + Open_Data);
			OpenData_Class.addClass('active').show();

			$('.popup_close, .btn_popup_close').click(function(){
				var Close_Data = $(this).attr('data-Popup_Close');
				var CloseData_Class = $('.' + Close_Data);
				CloseData_Class.removeClass('active').delay(300).hide();

				$('.dim').hide();
				if(!$('.popup_wrap').hasClass('active')){
					setTimeout(function(){
					$('html').css('overflowY', 'auto');
//					$(window).unbind();
					}, 700);
				};
			});
		});


	//counter
		counterEvent($('.counter'));
		function counterEvent(e){
			e.each(function(){
				var $this = $(this);
				var cntOffsetTop = $this.offset().top;
				var cntH = $this.outerHeight();
				var cntSpeed = $this.data('speed'),
					 cntDelay = $this.data('delay'),
					 txtComma = $this.data('comma'),
					 scrollOn = $this.data('scrolling')
				$this.css({
					opacity : 1,
					transition : 'opacity ' + (cntDelay/300)  + 's ease'
				})
				$this.text('0');
				counterMotion();

				$(window).on('scroll', function(){
					counterMotion();
				});

				function counterMotion(){
					var winST = $(window).scrollTop();
					var winH = $(window).height();
					if (winST > cntOffsetTop - winH && winST < cntOffsetTop + cntH){
						if(!$this.hasClass('anm')){
							$this.prop('Counter',0).stop().delay(cntDelay).css('opacity', 1).animate({
								Counter: $this.data('num')
							}, {
								duration: cntSpeed,
								step: function (now) {
									if (txtComma == 'on'){
										$this.text(Math.ceil(now).toLocaleString('en'));
									}else{
										$this.text(Math.ceil(now))
									}
								}
							});
							$this.addClass('anm');
						}
					}else{
						if (scrollOn == 'on'){
							$this.stop().removeClass('anm').text('0');
						}
					}
				}
			});
		};


	// snb 위치 조정
		var $scrItem = $('#snb li');
		var $scrItemBtn = $scrItem.find('a')
		var scrIWidth = 0;
		for (var i=0; i<$scrItem.length; i++) {
			scrIWidth += $scrItem.eq(i).outerWidth()
		}
		//$('.snb_wrap').css('width',scrIWidth)
		$scrItemBtn.click(function(e){
			var target = $(this); 
			$scrItemBtn.parent('li').removeClass('on')
			target.parent('li').addClass('on');
			muCenter(target);
			if ($('#snb').hasClass('scroll_move')){
				e.preventDefault();
				console.log('aa')
				var trgt = target.attr('href');
				var $trgt = $(trgt);
				history.pushState(null, null, e.target.href);
				moveScrollSnb($trgt)
			}
		});

		if ($('#wrap').hasClass('introduction')){
			var url = $(location).attr('href'),
				urlId = url.split('#'),
				urlTrgt = urlId[1];
				$urlTrgt = $('#' + urlTrgt);
			if (urlTrgt === undefined){
				
			}else{
				moveScrollSnb($urlTrgt);
			}
		}

		function moveScrollSnb(e){
			var t = e.offset().top - $('#header').outerHeight();
				$('html, body').animate({
//					scrollTop : trgtT - $('#header').outerHeight()
					scrollTop : t
				}, 500)
		}

		function muCenter(target){
			var box = $('#snb');
			var boxItem = box.find('a');
			var boxHarf = box.width()/2;
			var pos;
			var listWidth=0;
			var targetLeft = 0;

			boxItem.each(function(){ listWidth += $(this).parent('li').outerWidth(); })    
		
			for (var i=0; i<target.parent('li').index(); i++) targetLeft += boxItem.parent('li').eq(i).outerWidth(); // 선택요소 까지 길이
			
			var selectTargetPos = (targetLeft + target.parent('li').outerWidth()/2);
			if (selectTargetPos <= boxHarf) { // left
				pos = 0;
			}else if (listWidth - selectTargetPos <= boxHarf) { //right : target 절반 이후 영역이 boxHarf 보다 작을경우 right 정렬
				pos = listWidth+box.width();
			}else {
				pos = selectTargetPos - boxHarf; // 중앙정렬
			}

			setTimeout(function(){
				box.animate({scrollLeft:pos},500)
			}, 200);
		} //muCenter


	// tab
		$('.tab_wrap').each(function(){
			var $tabs= $(this);
			var $tabBtns = $tabs.find('.tab_btn')
			var $btn = $tabBtns.find('a');
			var $tabCont = $tabs.find('.tab_cont');

			$btn.bind('click', function(e){
				e.preventDefault();
				var $this = $(this)
				var trgt = $this.attr('href');
				$tabBtns.find('li').removeClass('on');
				$this.parent().addClass('on');
				$tabCont.removeClass('on');
				$(trgt).addClass('on')
			})
		});




});//(document).ready END