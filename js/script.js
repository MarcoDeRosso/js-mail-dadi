 var emailRegistered = ["pippofranco@alice.it", "ottaviano.augusto@studio.unibo.it", "stalioeolio@gmail.com", "boolean.carees@javascrip.com"];

 var emailLogIn = prompt("Inserire la propria mail");

 var check = false;

 var output = document.getElementById("log-in");

 /for (var i = 0; i < emailRegistered.length; i++) {
 if (emailRegistered[i] === emailLogIn)
     check = true;
 }

 if (check) {
     output.innerHTML += "Email coretta, Benvenuto/a: " + emailLogIn;
 } else {
     alert("Email non presente nel nostro Database, si prega di registrarsi");
     var emailLogIn = prompt("Registra la propria mail");
     emailRegistered.push(emailLogIn);
 }

 //---- dice section

 var numberAi = Math.floor(Math.random() * 6 + 1);
 var numberUser = Math.floor(Math.random() * 6 + 1);

 var outputDice = document.getElementById("dice");

 if (numberAi < numberUser) {
     outputDice.innerHTML = "Hai vinto!" + " Risultato computer: " + numberAi + " Risultato user: " + numberUser;
 } else if (numberAi > numberUser) {
     outputDice.innerHTML = "Ha vinto il computer!" + " Risultato computer: " + numberAi + " Risultato user: " + numberUser;
 } else {
     outputDice.innerHTML = "Pareggio!" + " Risultato computer: " + numberAi + " Risultato user: " + numberUser;
 }