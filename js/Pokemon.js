class Pokemon {
	constructor(id,name){
		this.imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
		this.template = document.querySelector('.template.card');
		this.id = id;
		this.name = name;
		this.evolveBy = null;
		this.types = new Array();
	}

	getId(){
		return this.id;
	}

	setEvolveBy(name)
	{
	   this.evolveBy = name;
	}

	getEvolveBy()
	{
	   return this.evolveBy;
	}

	isEvolution()
	{
	   return this.evolveBy !== null;
	}

	setType(type){
		this.types.push(type);	
	}

	renderCard(){
		let templateCard = this.template.cloneNode(true);
		let cardWrapper = document.querySelector('.card-wrapper');
		let cardImg = templateCard.querySelector('.card-img img');
		let cardId = templateCard.querySelector('.card-img span');
		let cardName = templateCard.querySelector('.card-name');
		let pokemonType = templateCard.querySelector('.pokemon-type');
		let pokemonBase = templateCard.querySelector('.pokemon-base');
		let self = this;

		cardImg.src = this.imgUrl + this.id + '.png'
		cardId.innerText = this.id;
		cardName.innerText = this.name;
		templateCard.id = this.id;

		if(!this.isEvolution()){
			templateCard.querySelector('.evolution-info').style.display = 'none';
		}else{
			templateCard.querySelector('.pokemon-base').innerText = this.getEvolveBy();
		}

		this.types.forEach(function(pokeType,index){
			let typeSpan = document.createElement('span');
			typeSpan.innerText = pokeType;
			pokemonType.appendChild(typeSpan);

		})

		templateCard.classList.add('visible');

		cardWrapper.appendChild(templateCard);

		templateCard.addEventListener('click',function(){
			let parent = this.parentElement;
			let result = parent.classList.toggle('one-card');
			let templateOrig = document.querySelector('#orig')
			let currentUrl = window.location.href;

			if(result){
				for (var index = 0; index < parent.children.length; index++) {
				    parent.children[index].classList.remove('visible');
				}

				document.querySelector('#find-pokemon').disabled = true;
				this.classList.add('visible');
				window.history.pushState("index", "Title", self.name+".html");



			}else{
				for (var index = 0; index < parent.children.length; index++) {
				    parent.children[index].classList.add('visible');
				}

				document.querySelector('#find-pokemon').disabled = false;
				templateOrig.classList.remove('visible');
				window.history.replaceState("index", "Title", "index.html");

			}

		})

	}

}