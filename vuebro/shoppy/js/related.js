Vue.component('related',{
	template: `
		<div class="container new-arrival">
        <div class="row">
          <div class="col">
            <h5 class="title">{{ title }}</h5>
          </div>
        </div>
        <div class="row">
          <div v-for="product in productItem" class="item col-3">
            <a href="product.html"><img v-bind:src="product.imgPath"></a>
            <p class="product-name">{{ product.name }}</p>
            <p class="price">{{ product.price }}</p>
          </div>   
        </div>
      </div>
	`,
	data:function () {
		return{
			title:'RELATED PRODUCT',
			productItem :[
				{
					name:'Iphone 11',
					price:'$2.500,00',
					imgPath:'img/iphone11.png'
				},
				{
					name:'Macbook',
					price:'$2.500,00',
					imgPath:'img/macbook.png'
				},
				{
					name:'Iphone 11',
					price:'$2.500,00',
					imgPath:'img/iphone11.png'
				},
				{
					name:'Macbook',
					price:'$2.500,00',
					imgPath:'img/macbook.png'
				},
				{
					name:'Iphone 11',
					price:'$2.500,00',
					imgPath:'img/iphone11.png'
				},
				{
					name:'Macbook',
					price:'$2.500,00',
					imgPath:'img/macbook.png'
				},
			]
		}
	}
})
