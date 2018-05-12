const anchor = document.getElementsByClassName('anchor')[0];
const menu = document.getElementsByClassName('menu')[0];
let opened = false;

anchor.addEventListener('click', function (el) {
	const name = el.target.className;
	opened = !opened;
	opened ? menu.className += " dropMenu" : menu.classList.remove("dropMenu");
});

const listItemAnchor = document.querySelectorAll('.menu .menu-list .list-item a');
listItemAnchor.forEach(function(anchor) {
	anchor.addEventListener('click', function () {
		menu.classList.remove("dropMenu");
		opened = !opened;
	})
})
console.log(listItemAnchor);