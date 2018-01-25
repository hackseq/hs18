// By: h01000110 (hi)
// github.com/h01000110
// Contribution: asantos07
// github.com/asantos07

const max = document.getElementById("maximize-btn");
const min = document.getElementById("minimize-btn");

if (typeof min !== 'undefined' && min !== null)
	min.onclick = function () {
		console.log("MIN");

		var post = document.getElementById("content");
		var cont = document.getElementsByClassName("post_content")[0];
		var wid = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth;

		if (wid > 900) {
			post.style.width = "800px";
			cont.style.width = "98.5%";
		}
	}

if (typeof max !== 'undefined' && max !== null)
	max.onclick = function () {
		console.log("MAX");
		var post = document.getElementById("content");
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