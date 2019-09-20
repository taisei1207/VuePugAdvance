new Vue({
	el: '#app',
	data: {
		nums: {
			"num1": null,
			"num2": null,
			"num3": null,
			"num4": null
		}
	},
	methods: {
		goNext: function() {
			$inputs = document.getElementsByClassName('input-box');
		}
	}
})
