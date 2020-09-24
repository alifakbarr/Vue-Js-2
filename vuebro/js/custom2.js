var app = new Vue({
	el:'#app',
	data: function () {
		return {
			search:'',
			mybook:[
				{
					id:0,
					name:'Lord Ring'
				},
				{
					id:1,
					name:'Apple Boy'
				},
				{
					id:2,
					name:'Black Clover'
				},
				{
					id:3,
					name:'One Piece'
				},
				{
					id:4,
					name:'Gintama'
				},
				{
					id:5,
					name:'Nightfall'
				},
				{
					id:6,
					name:'Fly Rice'
				},
			]
		}
	},
	computed:{
		filteredBook:function () {
			// untuk memfilter 
			var self= this
			return this.mybook.filter(function (book){
				return book.name.toLowerCase().indexOf(self.search.toLowerCase())>=0
			})
		}
	}
})