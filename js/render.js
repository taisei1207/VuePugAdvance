new Vue({
	el: '#app',
	data: {
		message: "Render"
	},
	render: function(h) {
		return h('h2', 'HELLO ' + this.message);
	}
});
