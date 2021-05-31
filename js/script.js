var emailRegistered = ["pippofranco@alice.it", "ottaviano.augusto@studio.unibo.it", "stalioeolio@gmail.com", "boolean.carees@javascrip.com"];

var emailLogIn = prompt("Inserire la propria mail");

var check = false;

var output = document.getElementById("log-in");

for (var i = 0; i < emailRegistered.length; i++) {
    if (emailRegistered[i] === emailLogIn)
        check = true;
}

if (check) {
    output.innerHTML += "Email coretta, Benvenuto/a: " + emailLogIn;
} else {
    alert("Email non presente nel nostro Database, si prega di registrarsi");
    var emailLogIn = prompt("Registra la propria mail");
    emailRegistered.push(emailLogIn)
}