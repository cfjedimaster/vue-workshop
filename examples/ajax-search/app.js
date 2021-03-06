const app = new Vue({
	el:'#app',
	data:{
		term:'',
		results:[],
		noResults:false,
		searching:false
	},
	methods:{
		search:function() {
			this.results = [];
			this.searching = true;
			fetch(`https://api.openbrewerydb.org/breweries/search?query=${encodeURIComponent(this.term)}`)
			.then(res => res.json())
			.then(res => {
				this.searching = false;
				this.results = res;
				this.noResults = this.results.length === 0;
			});
		}
	}
});