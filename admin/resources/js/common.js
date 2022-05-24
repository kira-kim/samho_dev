//HTML5 태그 block 선언
document.createElement('header');
document.createElement('footer');
document.createElement('section');
document.createElement('aside');
document.createElement('nav');
document.createElement('article');

$(document).ready(function(){
	//a link
		$("a").each(function(){
			if( $(this).attr("href") == "#" || $(this).attr("href") == "#none" || $(this).attr("href") == ""){
				$(this).attr("href", "javascript:void(0)");
			}
		});

	//calendar
		//btn_calendar_type_01
		$(function(){
			$('.btn_calendar_type_01').datepicker({
				showMonthAfterYear: true,
				yearSuffix: "년",
				monthNames: [ "1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월" ],
				dayNamesMin: [ "일","월","화","수","목","금","토" ],
				dateFormat: "yy년 mm월 dd일",
				showOn:'button',
				buttonImage:'../resources/images/common/icon_calendar.gif',
				buttonImageOnly:true,
				buttonText:'Select date'
			});
		});

		//btn_calendar_type_02
			$(function(){
				$('.btn_calendar_type_02').datepicker({
					showMonthAfterYear: true,
					yearSuffix: "년",
					monthNames: [ "1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월" ],
					dayNamesMin: [ "일","월","화","수","목","금","토" ],
					dateFormat: "yy년 mm월 dd일"
				});
			});

		//btn_calendar_type_03
			$(function(){
				$('.btn_calendar_type_03').datepicker({
					changeMonth:true,
					changeYear:true,
					showMonthAfterYear: true,
					yearSuffix: "년",
					monthNames: [ "1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월" ],
					dayNamesMin: [ "일","월","화","수","목","금","토" ],
					dateFormat: "yy년 mm월 dd일"
				});
			});

		//btn_calendar_type_04
			$(function(){
				$('.btn_calendar_type_04').datepicker({
					minDate:-20,
					maxDate:'+1M +10D',
					showMonthAfterYear: true,
					yearSuffix: "년",
					monthNames: [ "1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월" ],
					dayNamesMin: [ "일","월","화","수","목","금","토" ],
					dateFormat: "yy년 mm월 dd일"
				});
			});

		//btn_calendar_type_05
			$('.btn_calendar_type_05').each(function(){
				var dateFormat = 'yy년 mm월 dd일',
				from = $('.from')
				.datepicker({
					defaultDate:'+1w',
					changeMonth: true,
					numberOfMonths:3,
					dateFormat: "yy년 mm월 dd일"
				})
				.on('change', function(){
					to.datepicker('option', 'minDate', getDate(this));
				}),
				to = $('.to').datepicker({
					defaultDate:'+1w',
					changeMonth:true,
					numberOfMonths:3,
					dateFormat: "yy년 mm월 dd일"
				})
				.on('change', function(){
					from.datepicker('option', 'maxDate', getDate(this));
				});

				function getDate(element){
					var date;
					try{
						date = $.datepicker.parseDate(dateFormat, element.value);
					}catch(error){
						date = null;
					}
					return date;
				};
			});

		//calendar value reset
			$('.btn_calendar_type_02, .btn_calendar_type_03, .btn_calendar_type_04, .btn_calendar_type_05').on('click', function(){
				$(this).val('');
			});

	//all_check
		$('.all_check :checkbox').click(function(){
			var AllCheck_Name = $(this).attr('name');
			var ListCheck_Name = $(':checkbox[name=' + AllCheck_Name + ']');

			if ($(this).prop('checked')) {
				ListCheck_Name.prop('checked', true);
			}else{
				ListCheck_Name.prop('checked', false);
			};
		});

	//AddFile
		AddFile('.add_file');
		function AddFile(){
			$('.BtnCopyVal_Add').click(function(){
				var AddNum = 2;
				var IdCheck = $(this).siblings('.file_ui_text:last').children('.file_text').attr('id');
				var IdNum = $(this).siblings('.file_ui_text').length;
				var IdCount = IdCheck+'_'+IdNum;
				var ValCheck = $(this).siblings('.file_ui_text').children('.file_text').val();

				var FileUiText_Copy = '';
					 FileUiText_Copy +='		<div class="file_ui_text">';
					 FileUiText_Copy +='			<input type="text" id="'+IdCount+'" class="file_text" readonly="readonly" title="첨부된 파일경로" />';
					 FileUiText_Copy +='			<span class="file_wrap">';
					 FileUiText_Copy +='			찾아보기';
					 FileUiText_Copy +='			<input type="file" class="file_add" onchange="javascript:document.getElementById('+"'"+IdCount+"'"+').value=this.value" />';
					 FileUiText_Copy +='			</span>';
					 FileUiText_Copy +='		</div>';
					 FileUiText_Copy +='		<a href="#none" class="BtnTag_Del">삭제</a>';

				if(IdNum <= AddNum){
					if(ValCheck){
						$(this).parent('.add_file').prepend(FileUiText_Copy);
					}else{
						alert('파일을 선택해 주세요.');
					};
					$('.BtnTag_Del').click(function(){
						$(this).prev('.file_ui_text').remove();
						$(this).remove();
					});
				}else{
					alert('파일 추가는 최대' + AddNum + '개 입니다.');
					$(this).parent().children('.file_ui_text:eq(0)').children('.file_text, .file_add').val('');
				};
			});
		};

	//AddCheck
		$('.addcheck_content').each(function(){
			$(this).find('.btn_add > a').click(function(){
				var $this = $(this).parent();
				var AddVal = $(this).siblings('input').val();
				var LastId_Check = $this.siblings('.add_check').find('p:first > input[type=checkbox]').attr('id');
				var Input_name = $this.siblings('.add_check').find('p:first > input[type=checkbox]').attr('name');
				var LastId_Len = LastId_Check.length;
				var LastId_Text = LastId_Check.slice(0, LastId_Len-1);
				var LastId_Num = LastId_Check.slice(LastId_Len-1, LastId_Len);
				LastId_Num++;
				var AddTag ='<p><input type="checkbox" name="'+Input_name+'" id="'+LastId_Text+LastId_Num+'" title="" /><label for="'+LastId_Text+LastId_Num+'">'+AddVal+'</label><a href="#none" class="BtnTag_Del">[삭제]</a></p>';

				if(AddVal){
					$this.next('.add_check').prepend(AddTag);
				}else{
					alert('이름을 지정해주세요');
					$(this).prev('input').focus();
				};
				$('.BtnTag_Del').click(function(){
					$(this).parent('p').remove();
				});
			});
			$('.BtnTag_Del').click(function(){
				$(this).parent('p').remove();
			});
		});

	//AddCheckInp
		$('.addcheckinp_content').each(function(){
			$(this).find('.btn_add > a').click(function(){
				var $this = $(this).parent();
				var AddVal = $(this).siblings('input').val();
				var LastId_Check = $this.siblings('.add_check_inp').find('p:first > input[type=checkbox]').attr('id');
				var Input_name = $this.siblings('.add_check_inp').find('p:first > input[type=checkbox]').attr('name');
				var LastId_Len = LastId_Check.length;
				var LastId_Text = LastId_Check.slice(0, LastId_Len-1);
				var LastId_Num = LastId_Check.slice(LastId_Len-1, LastId_Len);
				LastId_Num++;
				var AddTag ='<p><input type="checkbox" name="'+Input_name+'" id="'+LastId_Text+LastId_Num+'" title="" /><label for="'+LastId_Text+LastId_Num+'">'+AddVal+'</label><input type="text" class="inp" /><a href="#none" class="BtnTag_Del">[삭제]</a></p>';

				if(AddVal){
					$this.next('.add_check_inp').prepend(AddTag);
				}else{
					alert('이름을 지정해주세요');
					$(this).prev('input').focus();
				};
				$('.BtnTag_Del').click(function(){
					$(this).parent('p').remove();
				});
			});
			$('.BtnTag_Del').click(function(){
				$(this).parent('p').remove();
			});
		});

	//inp_text_limit
		$('.inp_text_limit').each(function(){
			var Limit_Number = $(this).attr('data-TextLimit');
			var text_limit_Info = '<i class="text_limit_info"><b>0</b>&#47;'+Limit_Number+'</i>';
			var Placeholder_Info =  $(this).find('input').attr('placeholder', '최대' +Limit_Number+ '자 까지 입력');
			$(this).append(text_limit_Info);

			$(this).find('input').keyup(function(){
				var Text_Number = $(this).val().length;

				if(Text_Number <= Limit_Number){
					$(this).next('.text_limit_info').find('b').text(Text_Number);
				}else{
					alert('글자수가 초과되었습니다.');
					$(this).val($(this).val().substring(0, Limit_Number));
				};
			});
		});

	//textarea_text_limit
		$('.textarea_text_limit').each(function(){
			var Limit_Number = $(this).attr('data-TextLimit');
			var text_limit_Info = '<i class="text_limit_info"><b>0</b>&#47;'+Limit_Number+'</i>';
			var Placeholder_Info =  $(this).find('textarea').attr('placeholder', '최대' +Limit_Number+ '자 까지 입력');
			$(this).append(text_limit_Info);

			$(this).find('textarea').keyup(function(){
				var Text_Number = $(this).val().length;

				if(Text_Number <= Limit_Number){
					$(this).next('.text_limit_info').find('b').text(Text_Number);
				}else{
					alert('글자수가 초과되었습니다.');
					$(this).val($(this).val().substring(0, Limit_Number));
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

	//accordion_list
		$('.accordion_list').each(function(){
			$(this).find('.q_box').bind('click', function(){
				if(!$(this).parent().hasClass('active')){
					$('.accordion_list li').removeClass('active');
					$(this).parent().addClass('active');
					$('.a_box').stop().slideUp();
					$(this).next('.a_box').stop().slideDown();
				}else{
					$(this).parent().removeClass('active');
					$(this).next('.a_box').stop().slideUp();
				};
			});
		});

	//withdrawal_list
		$('.withdrawal_list').each(function(){
			$(this).find('.btn_type_01').bind('click', function(){
				if(!$(this).parent().parent().hasClass('active')){
					$('.tr_withdrawal').prev().removeClass('active');
					$('.tr_withdrawal').stop().slideUp();
					$(this).parent().parent().addClass('active');
					$('.active').next('.tr_withdrawal').stop().slideDown();
				}else{
					$(this).parent().parent().removeClass('active');
					$('.tr_withdrawal').stop().slideUp();
				};
			});
		});

	//link_dragging
		if($('.table_list tr').hasClass('link_dragging')){
			$('.table_list').append('<textarea class="copy_tag" style="display:none"></textarea>');
		};

		var Dragging = false;
		var startingPos = [];
		$('.link_dragging').mousedown(function(evt){
			Dragging = false;
			startingPos = [evt.pageX];
		}).mousemove(function(evt){
			if(!(evt.pageX === startingPos[0])){
				Dragging = true;
			};
		}).mouseup(function(){
			if(Dragging){
				var Copy_Text = $(this).text();
				$('.copy_text').css('display', 'block').val(Copy_Text).select();
				var succeed;
				try{
					succeed = document.execCommand("copy");
					$('.copy_text').css('display', 'none');
				}catch(e){
					succeed = false;
				}
				if(succeed){
					alert('복사 되었습니다');
				}
				return false;
			}else{
				var UrlLink = $(this).attr('datd-url');
				var UrlTarget = $(this).attr('data-target');
				window.open(UrlLink, UrlTarget)
			};
			Dragging = false;
		});

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
					$(window).unbind();
					}, 700);
				};
			});
		});

	//Top_Move
		var TopMove = '<a href="#none" class="Top_Move"><img src="../resources/images/common/btn_top.png" alt="Top" /></a>';
		var TopMove_Add = $('#wrap').append(TopMove);
		$('.Top_Move').hide();

		$(window).scroll(function(){
			var Position = $(this).scrollTop();
			if(Position >= 300){
				$('.Top_Move').fadeIn(800);
			}else if(Position >= 0){
				$('.Top_Move').fadeOut(800);
			}
		});

		$('.Top_Move').click(function(){
			$('body, html').animate({scrollTop:0}, 1000);
			return false;
		});

	//nav
		$('#header_wrap').each(function(){
			var Nav2dep_Height = $('.nav_2dep ul').map(function(){return $(this).outerHeight(true);});
			var Nav2dep_MaxHeight = Math.max.apply(null, Nav2dep_Height);

			$('nav.nav2dep_motion, .nav_2dep_bg').mouseover(function(){
				$('.nav_2dep').stop().animate({height : Nav2dep_MaxHeight+ 'px'}, 300, 'linear');
				$('.nav_2dep_bg').stop().animate({height : Nav2dep_MaxHeight+ 'px'}, 200, 'linear');
			})
			$('nav.nav2dep_motion, .nav_2dep_bg').mouseout(function(){
				$('.nav_2dep').stop().animate({height:'0px'}, 200, 'linear');
				$('.nav_2dep_bg').stop().animate({height:'0px'}, 300, 'linear');
			});

			$('nav.nav2dep_motion > ul > li').mouseover(function(){
				$(this).addClass('active');
			});
			$('nav.nav2dep_motion > ul > li').mouseout(function(){
				$(this).removeClass('active');
			});
		});

	//aside
		$('aside.nav2dep_motion').each(function(){
			var $nav1dep = $(this).find('.depth1 > li');
			if($nav1dep.find('.depth2 li.active')){
				$nav1dep.find('.depth2 li.active').parent().stop().slideDown(0);
			}
			$nav1dep.children('a').bind('click', function(){
					$nav1dep.removeClass('active');
					$nav1dep.find('.depth2').stop().slideUp();
				if(!$(this).parent().hasClass('active')){
					$(this).parent().addClass('active');
					$(this).next('.depth2').stop().slideDown();
				}
			});
		});

	//tag_type_list
		$('.tag_type_list').each(function(){
			var $tag_type_list = $(this);
			$tag_type_list.find('button.btn_x').bind('click', function(){
				console.log('a')
				$(this).parent('li').remove();
			});
		});


});//(document).ready END
