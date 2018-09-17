let prevScrollHeight = $(document).scrollTop();

function fixHeight(){
	if($(document).width() >= 528){
		$('main').css('padding-top', 70);
	}
	else{
		$('main').css('padding-top', 110);
	}
}

function position(){
	$(window).on('scroll', () => {
		const currentScrollHeight = $(document).scrollTop();
		if(currentScrollHeight < prevScrollHeight){
			$('header').removeClass('opaque');
		}
		else{
			$('header').addClass('opaque');
		}

		prevScrollHeight = currentScrollHeight;
	});
}

function resize(){
	$(window).on('resize', () => {
		fixHeight();
	});
}

function addListeners(){
	resize();
	position();
}

function main(){
	addListeners();
}

$(main());