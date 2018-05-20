(function() {

let slideIndex = 1;

function showBigImage(n) {
	let bigImages = document.getElementsByClassName('bigImage');
	let smallImages = document.getElementsByClassName('smallImage');
	let slideText = document.getElementsByClassName('bigImgText');

	if (n > bigImages.length) {
		slideIndex = 1;
	} else if (n < 1) { 
		slideIndex = bigImages.length;
	};

	for (let i = 0; i < bigImages.length; i++) {
		bigImages[i].style.display = 'none';
	}
	for (let i = 0; i < smallImages.length; i++) {
		smallImages[i].className = smallImages[i].className.replace(' smallImgActive', '');				
	}
	for (let i = 0; i < slideText.length; i++) {
		slideText[i].className = slideText[i].className.replace(' bigImgText', '');
	}	

    bigImages[slideIndex -1].style.display = 'block';
    slideText[slideIndex -1].className += ' bigImgText';
    smallImages[slideIndex -1].className += ' smallImgActive';
}
showBigImage(slideIndex);

function plusBigImage() {
	showBigImage(slideIndex += 1);
}

let previous = document.getElementsByClassName('prev')[0];
previous.addEventListener('click', minusBigImage);

function minusBigImage() {
	showBigImage(slideIndex -= 1);
}

let next = document.getElementsByClassName('next')[0];
next.addEventListener('click', plusBigImage);

function currentSlide(n) {
	showBigImage(slideIndex = n);
}

let currentImage = document.getElementsByClassName('smallImage');
	for (let i = 0; i < currentImage.length; i++) {
		currentImage[i].addEventListener('click', function () {
			currentSlide(currentImage[i].dataset.number);
		});
	}
})();


