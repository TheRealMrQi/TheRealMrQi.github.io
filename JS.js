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
	var ratio = window.devicePixelRatio || 1;
	var w = screen.width * ratio;
	var h = screen.height * ratio;
	logo.style.left =  0+ document.body.clientWidth / 2 - logo.offsetWidth / 2 + 'px';
	apeLogo.style.left =  0+ document.body.clientWidth / 2 - apeLogo.offsetWidth / 2 + 'px';
	
	/*testElement.innerHTML = detectMob();*/
	testElement.innerHTML = '';
}

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}
