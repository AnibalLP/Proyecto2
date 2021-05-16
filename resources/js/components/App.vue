<template>
	<div>
    	<header>
      		<div class="collapse bg-dark" id="navbarHeader">
        		<div class="container">
		          	<div class="row">
			            <div class="col-sm-8 col-md-7 py-4">
			              <h1 class="text-white">TEA</h1>
			            </div>
			            <div class="col-sm-4 offset-md-1 py-4">
			              	<ul class="list-unstyled">
			                	<li><router-link :to="{name: 'Info'}">Información</router-link></li>
			                	<li><router-link :to="{name: 'Conte'}">Contenido</router-link></li>
                                <li><router-link :to="{name: 'Ayuda'}">Ayuda</router-link></li>
                                <li><router-link :to="{name: 'Comuni'}">Comunidad para Padres</router-link></li>
                                <li><router-link :to="{name: 'Dere'}">conociendo mis derechos</router-link></li>
                                <li><router-link :to="{name: 'Mision'}">Mision y Vision</router-link></li>
			              	</ul>
			            </div>
			        </div>
		        </div>
		    </div>

		</header>

		<transition name="slide-fade" mode="out-in">
			<router-view :key="$route.fullPath"></router-view>
		</transition>

     </div>
</template>
