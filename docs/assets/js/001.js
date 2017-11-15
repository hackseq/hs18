// By: h01000110 (hi)
// github.com/h01000110
// Contribution: asantos07
// github.com/asantos07

var max = document.getElementsByClassName("btn")[1];
var min = document.getElementsByClassName("btn")[2];

var maximize = function () {
	var post = document.getElementsByClassName("content")[0];
	var cont = document.getElementsByClassName("post_content")[0];
	var wid = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth;

	if (wid > 900) {
		widf = wid * 0.9;
		post.style.width = widf + "px";

		if (wid < 1400) {
			cont.style.width = "99%";
		} else {
			cont.style.width = "99.4%";
		}
	}
}

var minimize = function () {
	var post = document.getElementsByClassName("content")[0];
	var cont = document.getElementsByClassName("post_content")[0];
	var wid = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth;

	if (wid > 900) {
		post.style.width = "800px";
		cont.style.width = "98.5%";
	}
}
if (max !== undefined)
	max.addEventListener('click', maximize, false);
if (min !== undefined)
	min.addEventListener('click', minimize, false);
