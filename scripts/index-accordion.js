let acc = document.getElementsByClassName('button');

for (let i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		this.classList.toggle('active');
		let button = this.nextElementSibling;
		
		if (button.style.display === 'block') {
			button.style.display = 'none';
		} else {
			button.style.display = 'block';
		}
	});
}