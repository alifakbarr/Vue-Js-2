Vue.component('mynavbar',{
	template:`
		<div class="mynavbar container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="index.html">Shop<span class="o-color">pye</span></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
              <a class="nav-link active" href="#">PROMOS</a>
              <a class="nav-link active" href="#">CATEGORIES</a>
              <a class="nav-link active" href="#">MERCHANT</a>
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">MY CART</a>
            </div>
          </div>
        </nav>  
      </div>
	`
})