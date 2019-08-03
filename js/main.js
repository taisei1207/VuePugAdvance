'use strict'
var MyComponent = {
	// id="compo-member" のタグの中身を取得
	template: '#child-template',
	props: {
		'message': {
			type: String,
			default: "World!"
		}
	}
}

new Vue({
	el: '#app',
	data: {
		item: 'Vue Advance World!'
	},
	components: {
		'my-component': MyComponent
	}
});
