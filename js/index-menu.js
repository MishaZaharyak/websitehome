(function () {

	const burgerMenu = document.getElementsByClassName('burgerMenu')[0];
	const menu = document.getElementsByClassName('menu')[0];
	let opened = false;

	burgerMenu.addEventListener('click', function () {
		opened = !opened;
		opened ? menu.className += " dropMenu" : menu.classList.remove("dropMenu");
	});

	const listItemAnchors = document.querySelectorAll('.menu .menu-list .list-item a').forEach(function(anchor) {
		anchor.addEventListener('click', function () {
			menu.classList.remove("dropMenu");
			opened = !opened;
		});
	});
})();