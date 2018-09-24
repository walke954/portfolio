const cloudPoetryLink = 'https://poem-app-2322.herokuapp.com/';
const cloudPoetryGithub = 'https://github.com/walke954/poem-share-app';
const cloudPoetryApiGithub = 'https://github.com/walke954/poem-app-api';
const reflectAppLink = 'https://cryptic-reaches-81198.herokuapp.com/';
const reflectAppGithub = 'https://github.com/walke954/reflect-app';
const groupTriviaLink = 'https://walke954.github.io/Group-Trivia/';
const groupTriviaGithub = 'https://github.com/walke954/Group-Trivia';

let start = null;
let prevTimestamp = 0;
let accumulator = 0;

let headerFixed = true;
let headerY = 0
let headerFixSpeed = 10;

function mainLoop(timestamp){
	if(!headerFixed){
		adjustHeaderHeight();
	}

	window.requestAnimationFrame(mainLoop);
}

function adjustHeaderHeight(){
	const scrollHeight = $(document).scrollTop();
	const headerHeight = $('header').position().top;
	const windowWidth = $(window)[0].innerWidth;

	if(scrollHeight != headerHeight && windowWidth >= 620){
		headerY = headerY + (scrollHeight - headerHeight)/headerFixSpeed;
		$('header').css('top', headerY);
	}
	else{
		headerFixed = true;
	}
}

function contactPage(){
	const page = `
		<address class="fadeIn">
			<h2>Curious?</h2>
			<p>I can be reached by either</p>
			<ul>
				<li>Phone: <a href="tel:651-788-3606">651-788-3606</a></li>
				<li>Email: <a href="mailto:">walke954@umn.edu</a></li>
			</ul>
			<p class="fadeIn">Or check me out at <a href="https://www.linkedin.com/in/jonathan-walker-561b2580">LinkedIn</a></p>
		</address>
	`;

	$('main').html(page);
}

function projectsPage(){
	const page = `
		<div class="partition fadeIn"></div>
		<div class="project-wrapper fadeIn">
			<img src="./project-images/poem-display.png" class="project-image">
			<h2><a href="${cloudPoetryLink}">Cloud Poetry</a></h2>
			<p>Cloud Poetry is an app designed for people who are interested in creating and sharing poetry.</p>
			<p>Uses JavaScript, React, node.js, Express, and MongoDB</p>
			<p><a href="${cloudPoetryGithub}">App Github</a></p>
			<p><a href="${cloudPoetryApiGithub}">API Github</a></p>
		</div>
		<div class="partition fadeIn"></div>
		<div class="project-wrapper fadeIn">
			<img src="./project-images/calendar.png" class="project-image">
			<h2><a href="${reflectAppLink}">Reflect</a></h2>
			<p>The 'Reflect' web app is a journal-like app that provides the user with a personal journal they can use to reflect upon their day.</p>
			<p>Uses html, css, JavaScript, JQuery, Node.js, Express, and MongoDB</p>
			<p><a href="${reflectAppGithub}">App Github</a></p>
		</div>
		<div class="partition fadeIn"></div>
		<div id="" class="project-wrapper fadeIn">
			<img src="./project-images/trivia.png" class="project-image">
			<h2><a href="${groupTriviaLink}">Group Trivia</a></h2>
			<p>Group Trivia is an app for playing trivia with friends and family.</p>
			<p>Uses html, css, JQuery, JavaScript and the APIs from OpenTDB and Wikipedia</p>
			<p><a href="${groupTriviaGithub}">App Github</a></p>
		</div>
	`;

	$('main').html(page);
}

function aboutPage(){
	const page = `
		<img class="about-image fadeIn" src="./project-images/myself.jpg">
		<h2 class="fadeIn">Hello!</h2>
		<p class="fadeIn">Originally from the great and beautiful state of Minnesota, I gathered my belongings in the summer of 2017 and migrated to my current city of Phoenix, AZ. While transitioning to my new life in the desert, I discovered a newfound love of web development and computer programming, which quickly led me to enroll in a web development bootcamp. I have since developed a deep admiration for <b class="tomato">air conditioning</b>, cactuses (<b class="springgreen">cacti?</b>), and <b class="dodgerblue">dodgerblue</b>.</p>
		<p class="fadeIn">I know JavaScript, HTML, CSS, React, JQuery, MongoDB... and I know some Java too!</p>
	`;

	$('main').html(page);
}

function changePage(tab){
	const page = $(tab).attr('id');

	$($('.selected-page')[0]).removeClass('selected-page');
	$(tab).addClass('selected-page');
	fillContentWrapper(page);
}

function clearHeaderHeight(){
	headerY = 0;
	$('header').css('top', headerY);
}

function fillContentWrapper(page){
	if(page === 'about-page'){
		aboutPage();
	}
	else if(page === 'projects-page'){
		projectsPage();
	}
	else if(page === 'contact-page'){
		contactPage();
	}
}

function positionListener(){
	$(window).on('scroll', () => {
		headerFixed = false;
	});
}

function pageListener(){
	$('header').on('click', 'li', (event) => {
		const tab = event.target;

		clearHeaderHeight();
		changePage(tab);
	});
}

function resizeListener(){
	$(window).on('resize', () => {
		headerFixed = false;
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