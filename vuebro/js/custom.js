Vue.component('myfood',{
	props:['favorites'],
	template:'<li>{{ favorites.food}}</li>'
})

var header = new Vue({
	el:'.header',
	data:{
		name:'Alif Akbar',
		info:'Hello i am susan',
		showtext:true,
		foods:[
			{
				text:'Broccoli'
			},
			{
				text:'Carrot'
			},
			{
				text:'Milk'
			},

		],
		myCountry:'Singapura',
		myName:' ',
		foodlist:[
			{
				id:0,food:'pizza'
			},
			{
				id:1,food:'Carrot'
			},
			{
				id:2,food:'Egg'
			},

		],
		sayHello:'Hello',
		myDrink:[
			{
				id:0, nama:'Milk'
			},
			{
				id:1, nama:'Water'
			},
			{
				id:2, nama:'Coconut Water'
			},
			{
				id:3, nama:'Jus'
			},
		],
		show:true;
	},
	methods:{
		changeCountry: function () {
			this.myCountry='Indonesia'
			// variabel myCountry akan di replace dengan indonesia
		}
	},
	// computed:{
	// 	// filter data
	// 	orderedDrink: function () {
	// 		return _.orderBy(this.myDrink,"nama")
	// 	}
	// }
})