var pokemonList = ['bulbasaur', 'charmander', 'squirtle', 'pikachu', 'vulpix', 'jigglypuff', 'oddish', 'meowth', 'eevee', 'bulbasaur', 'charmander', 'squirtle', 'pikachu', 'vulpix', 'jigglypuff', 'oddish', 'meowth', 'eevee'];

function getPokemon() {

    for (let i = pokemonList.length - 1; i > 0; i--) {
        let randomNumber = Math.floor(Math.random() * i)
        let pokemon = pokemonList[randomNumber];

        pokemonList[randomNumber] = pokemonList[i];
        pokemonList[i] = pokemon;
    }

    for (let k = 0; k < pokemonList.length; k++) {
        var number = pokemonList[k];
        var pokemonNumber;

        switch (number) {
            case "bulbasaur":
                pokemonNumber = "#001";
                break;
            case "charmander":
                pokemonNumber = "#004";
                break;
            case "squirtle":
                pokemonNumber = "#007";
                break;
            case "pikachu":
                pokemonNumber = "#025";
                break;
            case "vulpix":
                pokemonNumber = "#037";
                break;
            case "oddish":
                pokemonNumber = "#043";
                break;
            case "jigglypuff":
                pokemonNumber = "#039";
                break;
            case "meowth":
                pokemonNumber = "#052";
                break;
            case "eevee":
                pokemonNumber = "#133";
                break;
        }

        document.querySelector('#number-' + (k + 1)).innerText = pokemonNumber;
        document.querySelector('#name-' + (k +1)).innerText = pokemonList[k];
    }
}

function showCard(n) {
    var card = document.querySelector('#card-' + n);
    var number = document.querySelector('#number-' + n);
    var image = document.querySelector('#image-' + n);
    var name = document.querySelector('#name-' + n);
   
    number.style.display = "block";

    var color;
    switch (pokemonList[n - 1]) {
        case "bulbasaur":
            image.src = "images/bulbasaur.png";
            color = "green";
            break;
        case "charmander":
            image.src = "images/charmander.png";
            color = "red";
            break;
        case "squirtle":
            image.src = "images/squirtle.png";
            color = "blue";
            break;
        case "pikachu":
            image.src = "images/pikachu.png";
            color = "yellow";
            break;
        case "vulpix":
            image.src = "images/vulpix.png";
            color = "orange";
            break;
        case "jigglypuff":
            image.src = "images/jigglypuff.png";
            color = "pink";
            break;
        case "oddish":
            image.src = "images/oddish.png";
            color = "purple";
            break;
        case "meowth":
            image.src = "images/meowth.png";
            color = "black";
            break;
        case "eevee":
            image.src = "images/eevee.png";
            color = "grey";
            break;
    }   

    card.style.justifyContent = "space-between";
    card.style.background = "radial-gradient(circle at 50% 0%, " + color + " 50%, white 50%)";
    card.style.cursor = "default";


    card.style.transform = "rotateY(180deg)";
    number.style.transform = "rotateY(180deg)";
    image.style.transform = "rotateY(180deg)";
    name.style.transform = "rotateY(180deg)";

    name.style.backgroundColor = color;
    name.style.display = "block";
}
    

   