const anchor = document.getElementsByClassName('anchor')[0];
const menu = document.getElementsByClassName('menu')[0];
const list = document.getElementsByClassName('menu-list')[0];
const items = document.getElementsByClassName('list-item');
const itemsAnchor = document.querySelectorAll('.list-item a');
console.log(itemsAnchor);
let opened = false;

anchor.addEventListener('click', function (el) {
	const name = el.target.className;
	opened = !opened;
	opened ? menu.className += " a" : menu.className = name;
	
});

