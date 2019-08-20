'use strict'
let app = new Vue({
	el: '#app',
	data: {
		list: [
			'ABOUT', 'BLOG', 'WORK', 'RECRUIT','CONTACT'
		]
	}
});

var myWindow = documet.getElementByTagName(window);
var myMain = document.getElementsByClassName(".header");
var rect = myMain.getBoundingClientRect();
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
var myTop = rect.top + scrollTop;
