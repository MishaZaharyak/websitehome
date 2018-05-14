(function() {

let slideIndex = 1;

function showSlides(n) {
	let slides = document.getElementsByClassName('mySlides');
	let dots = document.getElementsByClassName('demo');
	let slideText = document.getElementsByClassName('centered');

	if (n > slides.length) {
		slideIndex = 1;
	} else if (n < 1) {
		slideIndex = slides.length;
	};

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (let i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');				
	}
	for (let i = 0; i < slideText.length; i++) {
		slideText[i].className = slideText[i].className.replace(' slideText', '');
	}	

    slides[slideIndex -1].style.display = 'block';
    slideText[slideIndex -1].className += ' slideText';
    dots[slideIndex -1].className += ' active';
}
showSlides(slideIndex);

function plusSlides() {
	showSlides(slideIndex += 1);
}

let previous = document.getElementsByClassName('prev')[0];
previous.addEventListener('click', minusSlides);

function minusSlides() {
	showSlides(slideIndex -= 1);
}

let next = document.getElementsByClassName('next')[0];
next.addEventListener('click', plusSlides);

function currentSlide(n) {
	showSlides(slideIndex = n);
}

let currentImage = document.getElementsByClassName('demo');
	for (let i = 0; i < currentImage.length; i++) {
		currentImage[i].addEventListener('click', function () {
			currentSlide(currentImage[i].dataset.number);
		});
	}
})();
