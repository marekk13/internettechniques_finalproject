$(document).ready(function () {
	$('#menup').click(function () {
		$('#slide').slideToggle(1);
	});
	let z = 0;
	$('.open').click(function () {
		if (z === 0) {
			$(this).siblings().stop().slideDown();
			$(this).children('img').attr('src', 'photos/close.png');
			z++;
		}
		else {
			$(this).siblings().stop().slideUp();
			$(this).children('img').attr('src', 'photos/open.png');
			z--;
		}

	});
});
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function toursGallery(imgs) {
	var expandImg = document.getElementById("expandedImg");
	expandImg.src = imgs.src;
	expandImg.parentElement.style.display = "block";
}
