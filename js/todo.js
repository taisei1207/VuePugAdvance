let myComponent = {
	template: '#list-template',
	data: function() {
		return {
			addItem: ''
		}
	},
	props: {
		'myList': Array
	}
	,
	methods: {
		add: function () {
			this.myList.push(this.addItem);
		}
	}
}

new Vue({
	el: '#app',
	data: {
		list: [
			'HTML', 'CSS', 'JavaScript'
		]
	},
	methods: {
		write: function() {
			console.log(this.list);
		}
	},
	components: {
		'my-component': myComponent
	},
	created: function() {
		this.write();
	},
	updated: function() {
		this.write();
	}
})
