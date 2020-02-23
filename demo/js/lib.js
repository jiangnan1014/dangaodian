
$(document).ready(function() {

	// 购物车加减
	$('.buyNum').each(function(){
	    var _val = $(this).find('input').val()*1;
	    if( _val == 1 ){
	        $(this).find('.minus').addClass('disabled');
	    }
	});
	$('.buyNum .minus').click(function(){
	    var _val = $(this).siblings('input').val()*1 - 1;
	    if( _val>0 ){
	        $(this).siblings('input').val(_val);
	    }else{
	        $(this).addClass('disabled');
	    }
	});
	$('.buyNum .plus').click(function(){
	    var _val = $(this).siblings('input').val()*1 + 1;
	    $(this).siblings('input').val(_val);
	    $(this).parents('.buyNum').find('.minus').removeClass('disabled');
	});

	// 弹出
	$('.fancyBtn').click(function(){
		$('.fancyBox').stop().fadeOut();
		if( !$('.overlay').length ){
			$('body').append('<div class="overlay"></div>');
		}
		var _id = $(this).attr('href');
		$(_id).css({
			'margin-left':-$(_id).outerWidth()/2,
			'margin-top':-$(_id).outerHeight()/2
		}).stop().fadeIn();
		return false;
	});
	$('.fancyClose').click(function(){
		$(this).parents('.fancyBox').stop().fadeOut();
		$('.overlay').stop().fadeOut();
		setTimeout(function(){
			$('.overlay').remove();
		},500);
	});

});
