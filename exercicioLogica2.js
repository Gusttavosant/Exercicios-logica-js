let valores = [
    {
        comprimento: 10,
        largura: 5,
        profundidade: 2
  },

 
]

let piscina = 0;

for(valor of valores){
   
    piscina += valor.comprimento * valor.largura * valor.profundidade * 1000
} 

console.log(piscina);
