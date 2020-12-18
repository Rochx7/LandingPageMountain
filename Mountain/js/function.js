
var navSlide = () => {
	let burguer = document.querySelector('.burguer');
	let nav = document.querySelector('.nav-links');
	let navLinks = document.querySelectorAll('.nav-links li');


	
burguer.addEventListener('click', () => {
		//Toggle Nav
	nav.classList.toggle('nav-active');
	

	//Animate Links
	navLinks.forEach((link, index) => {
		if(link.style.animation){
			link.style.animation = '';
		} else{
			link.style.animation = `navLinkFade 0.9s ease forwards ${index / 7 + 0.1}s`;
			}	
		});	
	});
}

navSlide();