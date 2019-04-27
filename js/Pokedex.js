class Pokedex {
	constructor(){
		//this.apiUri = "http://pokeapi.salestock.net/api/v2/"
		this.apiUri = "https://pokeapi.co/api/v2/"
		this.paramPokemon = 'pokemon/';
		this.paramEvolutionBase = 'pokemon-species/';
		this.pokemonArray = new Array();
		this.maxPokemons = 12;
		this.init();

	}

	init(){
	    let myPokemon;
	    let pokeId = 1;
	    let self = this;
	    while (pokeId <= this.maxPokemons){

		   	try {
		        myPokemon = fetch(this.apiUri+this.paramPokemon+pokeId)
		        .then(function(myPokemon) {
		        	return myPokemon.json();
		        })
				.then(function(myPokemon){
				   let pokeName = myPokemon.name;
				   let pokemonObj = new Pokemon(myPokemon.id,myPokemon.name);
				   myPokemon.types.forEach(function(pokemonType,index){
				       pokemonObj.setType(pokemonType.type.name);
				   })

				   self.initEvolutionBase(pokemonObj)
				})

		    }catch(error){
		        console.log(error)
		    }

	    pokeId++;

	    }

	}

	initEvolutionBase(pokemon){
	   let evolveData;
	   let self = this;
	   try {
	       evolveData = fetch(this.apiUri+this.paramEvolutionBase+pokemon.getId())
	       .then(function(evolveData) {
	           return evolveData.json();
	       })
	       .then(function(evolveData){
	           
	           let evolveName = null;
	           if(evolveData.evolves_from_species){
					evolveName = evolveData.evolves_from_species.name;
	           }
	           pokemon.setEvolveBy(evolveName);

	           self.pokemonArray.push(pokemon);

	           if(self.loadCompleted()){
	           	self.sortPokemons();
	           	self.renderPokemons();

	           }

	       })

	   }catch(error){
	       console.log(error)
	   }

	}

	loadCompleted(){
		return this.pokemonArray.length == this.maxPokemons;
	}

	renderPokemons(){
		this.pokemonArray.forEach(function(pokemon,index){
			pokemon.renderCard();
		})
	}

	sortPokemons(){
		this.pokemonArray.sort(function (a, b) {
		  if (a.getId() < b.getId()) {
		    return -1;
		  }
		  if (a.getId() > b.getId()) {
		    return 1;
		  }
		  return 0;
		})
	}






}