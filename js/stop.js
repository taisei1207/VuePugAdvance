let app = new Vue({
	el: '#app',
	data: {
		time: 0,
		timer: null,
		startBool: false,
		stopBool: true
	},
	methods: {
		doStart: function() {
			this.startBool = true;
			this.stopBool = false;
			this.timer = setInterval(()=> {
				this.time++;
			}, 1000)
		},
		doStop: function() {
			this.startBool = false;
			this.stopBool = true;
			clearInterval(this.timer);
		},
		doReset: function() {
			this.time = 0;
		}
	}
});
