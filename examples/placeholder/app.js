Vue.component('image-placeholder', {
	template:`
	<img :src="url" :width="width" :height="height" :title="text">
`,
	computed: {
		url() {
			let url = `https://via.placeholder.com/${this.width}x${this.height}`;
			if(this.text) url += `&text=${encodeURIComponent(this.text)}`;
			return url;
		}
	},
	props:{
		height:{
			default: 250
		},
		width:{
			default: 250
		},
		text:''
	}

});

const app = new Vue({
	el: '#app',
	data: {
	},
	methods: {
		
	}
});