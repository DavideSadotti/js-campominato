// Definisco un ciclo while per generare un numero random non duplicato tra 1 e 50 per 16 volte
var numPc = [];
while(numPc.length < 16){
  var numRandom = Math.floor(Math.random() * 50) + 1;
  if(numPc.indexOf(numRandom) == -1){
    numPc.push(numRandom);
  }
}
console.log(numPc);


// Faccio inserire all'utente 16 numeri diversi
var numUser = [];
var lost = false;
// Creo un cilco while per far inserire i numeri all'utente e per controllare se ha perso
while(numUser.length < 16 && lost == false){
  // Faccio inserire un numero casuale
  var number = parseInt(prompt("Inserisci un numero univoco da 1 a 50 per 16 volte. Fino ad ora hai inserito: " + numUser.length + " numeri!"));
  // Controllo se quel numero è già stato inserito
  if(numUser.indexOf(number) == -1){
    numUser.push(number);
  }
  // Controllo se quel numero è un numero vietato
  if(numPc.includes(number)){
    lost = true;
    alert("Hai perso sfigato!")
  }
}
