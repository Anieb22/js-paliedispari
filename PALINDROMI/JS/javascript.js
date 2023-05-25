let parola = prompt('Inserisci una parola')
let parolaDivisa = parola.split('')
let parolaInversa = parolaDivisa.reverse()
let parolaUnita = parolaDivisa.join('')
console.log(parolaUnita)


if(parola == parolaUnita){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  