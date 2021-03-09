// Definisco un ciclo while per generare un numero random non duplicato tra 1 e 50 per 16 volte
var numPc = [];
while(numPc.length < 16){
  var numRandom = Math.floor(Math.random() * 50) + 1;
  if(numPc.indexOf(numRandom) == -1){
    numPc.push(numRandom);
  }
}

// Faccio inserire all'utente 16 numeri diversi
var numUser = [];

while(numUser.length < 16){
  var number = parseInt(prompt("Inserisci un numero univoco da 1 a 50 per 16 volte. Fino ad ora hai inserito: " + numUser.length + "numeri!"));
  if(numUser.indexOf(number) == -1){
    numUser.push(number);
  }
}
