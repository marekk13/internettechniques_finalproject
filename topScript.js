$(document).ready(function () {
	$('#menup').click(function () {
		$('#slide').slideToggle(1);
	});
});


const photos = ["url('photos/nauru.jpg')", "url('photos/svalbard.jpg')", "url('photos/turkmenistan.png')"];
const galh1 = ["Nauru", "Svalbard", "Turkmenistan"];
const galh2 = ["Perła końca świata", "Polarny raj", "Wrota Piekieł"];
const gala = ["wycieczka1.html", "wycieczka2.html", "wycieczka3.html"];
const bigPhoto = document.querySelector("#bigPhoto");
const galh1txt = document.querySelector("#napgal h1");
const galh2txt = document.querySelector("#napgal h2");
const galatxt = document.querySelector("#zobacz a");

function mod(a, n) { //stworzenie wlasnej funkcji modulo zeby dla liczb ujemnych
	//zwracalo dodatnia wartosc
	return a - (n * Math.floor(a / n));
}

let x = 0;
let colLgth = photos.length;

document.getElementById("gleft").addEventListener('click', event => {
	--x;
	bigPhoto.style.backgroundImage = photos[mod(x, colLgth)];
	galh1txt.innerHTML = galh1[mod(x, colLgth)];
	galh2txt.innerHTML = galh2[mod(x, colLgth)];
	galatxt.setAttribute('href', gala[mod(x, colLgth)]);

});
document.getElementById("gright").addEventListener('click', event => {
	++x;
	bigPhoto.style.backgroundImage = photos[mod(x, colLgth)];
	galh1txt.innerHTML = galh1[mod(x, colLgth)];
	galh2txt.innerHTML = galh2[mod(x, colLgth)];
	galatxt.setAttribute('href', gala[mod(x, colLgth)]);
});


function scrolll() {
	var left = document.querySelector("#op-scroll-images");
	left.scrollBy(-350, 0);
}

function scrollr() {
	var right = document.querySelector("#op-scroll-images");
	right.scrollBy(350, 0);
}



