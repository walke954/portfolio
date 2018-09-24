let aboutHeight = $('#about-page').position().top;
let projectsHeight = $('#projects-page').position().top;
let contactHeight = $('#contact-page').position().top;
let bottom = $(document).height();

let prevTime = 0;

let headerFixed = true;
let headerY = 0
let headerFixSpeed = 0.55;

function mainLoop(timestamp){
	if(!headerFixed){
		adjustHeaderHeight(timestamp - prevTime);
	}

	prevTime = timestamp;

	window.requestAnimationFrame(mainLoop);
}

function adjustHeaderHeight(timestamp){
	const scrollHeight = $(document).scrollTop();
	const headerHeight = $('header').position().top;
	const windowWidth = $(window)[0].innerWidth;

	if(scrollHeight != headerHeight && windowWidth >= 620){
		headerY = headerY + (scrollHeight - headerHeight)/(headerFixSpeed * timestamp);
		$('header').css('top', headerY);
	}
	else{
		headerFixed = true;
	}
}

function contactPage(){
	$(window).scrollTop(bottom);
}

function projectsPage(){
	$(window).scrollTop(projectsHeight);
}

function aboutPage(){
	$(window).scrollTop(aboutHeight);
}

function changePage(tab){
	const page = $(tab).attr('id');

	scrollToPage(page);
}

function scrollToPage(page){
	if(page === 'about-page-tab'){
		aboutPage();
	}
	else if(page === 'projects-page-tab'){
		projectsPage();
	}
	else if(page === 'contact-page-tab'){
		contactPage();
	}
}

function positionListener(){
	$(window).on('scroll', () => {
		const scrollHeight = $(document).scrollTop();

		headerFixed = false;
	});
}

function pageListener(){
	$('header').on('click', 'li', (event) => {
		const tab = event.target;

		changePage(tab);
	});
}

function resizeListener(){
	$(window).on('resize', () => {
		headerFixed = false;
		aboutHeight = $('#about-page').position().top;
		projectsHeight = $('#projects-page').position().top;
		contactHeight = $('#contact-page').position().top;
	});
}

function addListeners(){
	pageListener();
	resizeListener();
	positionListener();
}

function main(){
	addListeners();
	mainLoop(0);
}

$(main());