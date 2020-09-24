var app = new Vue({
	el:'#app',
	data: function () {
		return{
		title:null,
		assigned:null,
		mywork:[
				{
				title:'Fix laptop',
				assigned:'Jason'
				},
				{
				title:'Fix Phone',
				assigned:'Irdho'
				},
				{
				title:'Buy Book',
				assigned:'Akbar'
				},
				{
				title:'Buy Water',
				assigned:'Billy'
				},
			]
		}
	},
	methods:{
		addNewtask: function () {
			this.mywork.push({
				// mengambil dari v-model
				title:this.title,
				assigned:this.assigned
			})
		}
	}
})