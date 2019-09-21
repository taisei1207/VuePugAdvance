let vm = new Vue({
	el: '#app',
	data: {
		"num1": null,
		"num2": null,
		"num3": null,
		"num4": null
	},
	methods: {
		goNext: function(event) {
			$inputs = document.getElementsByClassName('input-box');
			nowIndex = Array.from($inputs).indexOf(event.target);
			var ref = 0;
			var nextRef = 0;
			ref = Number(event.target.id);
			if (event.target.value.length == 1) {
				if (nowIndex < $inputs.length - 1) {
					nextRef = ref + 1;
					this.$refs[nextRef].focus();
				}

				else {
					this.$refs[ref].blur();
				}
			}
		}
	}
})
