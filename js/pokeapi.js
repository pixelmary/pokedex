let findPokemon = document.querySelector('#find-pokemon');
let cardWrapper = document.querySelector('#cardWrapper');
let pokedex = new Pokedex();

findPokemon.addEventListener('keyup',function(event){
    pokeSearch(this.value, event.keyCode == 8);
})

function pokeSearch(searchQuery, backspace){

    let notFound = document.querySelector('.not-found');
    let visible = '.visible';
    if(backspace){
        visible = ':not(.visible)';
    }

    let cards = document.querySelectorAll('.card-wrapper .card'+visible);
    let cardName = document.querySelector('.card-name');
    let templateOrig = document.querySelector('#orig');

    notFound.style.display = 'none';

    for (var index = 0; index < cards.length; index++) {

        let pokeName = cards[index].querySelector('.card-name').innerText;
        let pokeCard = cards[index];
        cards[index].classList.remove('visible');

        if (pokeName.toLowerCase().indexOf(searchQuery.toLowerCase()) === 0)
        {
            pokeCard.classList.add('visible');
            templateOrig.classList.remove('visible');

        }

    }

    let visibleCards = document.querySelectorAll('.card-wrapper .card.visible');

    if(visibleCards.length == 0){
        notFound.style.display = 'block';
    }


}







