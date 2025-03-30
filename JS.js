let balloon = document.getElementById('balloon');
let testElement = document.getElementById('test');
let logo = document.getElementById('logo');
let apeLogo = document.getElementById('apelogo');


window.addEventListener('scroll', ResizeElements);

window.addEventListener('resize', ResizeElements);

window.addEventListener('load', ResizeElements);

function ResizeElements()
{
	let value = window.scrollY;
	balloon.style.top = value * 0.35+ 2400  + 'px';
	logo.style.left =  0+ window.outerWidth / 2 - logo.offsetWidth / 2 + 'px';
	apeLogo.style.left =  0+ window.outerWidth / 2 - apeLogo.offsetWidth / 2 + 'px';
}

