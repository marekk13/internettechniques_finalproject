function showTop(x) {
  if (x.matches) { // If media query matches
    document.getElementById("slide").style.display = "inline-block";
  }
  else {
	 document.getElementById("slide").style.display = "none";
  }
}

var m = window.matchMedia("(min-width: 1200px)")
showTop(m) // Call listener function at run time
m.addListener(showTop) // Attach listener function on state changes
