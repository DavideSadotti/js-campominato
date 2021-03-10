var num = 0;

// Definisco le funzioni per ogni livello
function levelOne(){
  var level = 100;
  campoMinato();
  // Stampo a video il risultato
  document.getElementById('numConsentitoUno').innerHTML += "Hai inserito " + num + " volta/e i numeri consentiti!"
}

function levelTwo(){
  var level = 80;
  campoMinato();
  // Stampo a video il risultato
  document.getElementById('numConsentitoDue').innerHTML += "Hai inserito " + num + " volta/e i numeri consentiti!"
}

function levelThree(){
  var level = 50;
  campoMinato();
  // Stampo a video il risultato
  document.getElementById('numConsentitoTre').innerHTML += "Hai inserito " + num + " volta/e i numeri consentiti!"
}


function campoMinato(){
  // Definisco un ciclo while per generare un numero random non duplicato tra 1 e 50 per 16 volte
  var numPc = [];
  while(numPc.length < 16){
    var numRandom = Math.floor(Math.random() * level) + 1;
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
    var number = parseInt(prompt("Inserisci un numero univoco da 1 a " + level + " per 16 volte. Fino ad ora hai inserito: " + numUser.length + " numeri!"));
    if(number >= 1 && number <= level){
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
  }
  num =  numUser.length - 1;
}
