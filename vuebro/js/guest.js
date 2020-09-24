const STORAGE_KEY="guest-storage"

var app = new Vue({
	el:'#app',
	data: function () {
		return {
			guestname:'',
			myguest:[]
		}
	},
	created(){
		this.myguest= JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
	},
	methods:{
		saveguest(){
			this.myguest.push({
				guestname:this.guestname
			})
			this.guestname = ""
			localStorage.setItem(STORAGE_KEY, JSON.stringify(this.myguest))
		},
		deleteguest(guest){
			this.myguest.splice(this.myguest.indexOf(guest),1)
		}
	}
})