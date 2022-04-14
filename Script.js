var Nome = window.prompt("ciao inserisci il tuo username")

document.getElementById("Titolo").innerHTML = "Benvenuto " + Nome;

var sceltaUtente;

function carta() {
    sceltaUtente = "carta"
    document.getElementById("Case1").innerHTML = "Hai scelto " + sceltaUtente;
}
function sasso() {
    sceltaUtente = "sasso"
    document.getElementById("Case1").innerHTML = "Hai scelto " + sceltaUtente;
}
function forbice() {
    sceltaUtente = "forbice"
    document.getElementById("Case1").innerHTML = "Hai scelto " + sceltaUtente;
}

function Confirm() {
    var min = 1;
    var max =  3;
    var sceltaBot = Math.floor(Math.random() * (max - min + 1)) + min
    var sceltaBot2;
    var sceltaUtente2;
    console.log(sceltaBot)
    
    if(sceltaBot == 1){
        sceltaBot2 = "carta"
        document.getElementById("Case2").innerHTML = "Il Bot ha scelto " + sceltaBot2;
    }
    if(sceltaBot == 2){
        sceltaBot2 = "forbice"
        document.getElementById("Case2").innerHTML = "Il Bot ha scelto " + sceltaBot2;
    }
    if(sceltaBot == 3){
        sceltaBot2 = "sasso"
        document.getElementById("Case2").innerHTML = "Il Bot ha scelto " + sceltaBot2;
    }

    console.log(sceltaBot2)
    
    if(sceltaBot2 == sceltaUtente){
        document.getElementById("Frase").innerHTML = "Pareggio";
        return;

    }
    if(sceltaUtente == "carta"){
        sceltaUtente2 = 1
    }
    if(sceltaUtente == "forbice"){
        sceltaUtente2 = 2
    }
    if(sceltaUtente == "sasso"){
        sceltaUtente2 = 3
    }

    if(sceltaBot == 1){
        if(sceltaUtente2 == 2){
            document.getElementById("Frase").innerHTML = "Hai vinto";
        }
        else{
            document.getElementById("Frase").innerHTML = "Hai perso";
        }
    }
    if(sceltaBot == 2){
        if(sceltaUtente2 == 3){
            document.getElementById("Frase").innerHTML = "Hai vinto";
        
        }
        else{
            document.getElementById("Frase").innerHTML = "Hai perso";
        }
    }
    if(sceltaBot == 3){
        if(sceltaUtente2 == 1){
            document.getElementById("Frase").innerHTML = "Hai perso";
        }
        else{
            document.getElementById("Frase").innerHTML = "Hai perso";
        }
    }



}