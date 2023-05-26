let bottonePari = document.getElementById('bottone-pari')
let bottoneDispari = document.getElementById('bottone-dispari')
let somma = 0;



function sommaNumeri(){
    let sceltaUtente = parseInt(prompt('scegli un numero da 1 a 5'))
    let sceltasCpu = Math.floor(Math.random() * 5)
    somma = parseInt(sceltaUtente + sceltasCpu)

    if (isNaN(sceltaUtente)){
        alert('non è un numero')
        location.reload()
    }

    else if (sceltaUtente > 5){
        alert('il numero inserito non è corretto')
        location.reload()
    }

    else{
        return somma;
    }
}

bottonePari.addEventListener('click', function(){
   sommaNumeri()

    if (somma % 2 === 0){
        console.log(somma)
        console.log('Il giocatore vince')
    }

    else{
        console.log(somma)
        console.log('Il giocatore perde')
    }
})

bottoneDispari.addEventListener('click', function(){
    ('prova b-dispari');
    sommaNumeri()

    if (somma % 2 === 0){
        console.log(somma)
        console.log('Il giocatore perde')
    }

    else{
        console.log(somma)
        console.log('Il giocatore vince')
    }

})