let tipos = ['raio', 'água', 'fogo', 'planta'];

let meuPokemon = {
  nome: 'Pikachu',
  tipo: tipos[0],
  hp: 100
}

let pokemonInimigo = {
  nome: 'Charmander',
  tipo: tipos[2],
  hp: 100
}

function randomNumber() {
    var randNum = Math.floor(Math.random() * (25)) + 1;
    if(randNum == 7){
      hello();
    }

  }

 function hello(){
   console.log('hello');
 }