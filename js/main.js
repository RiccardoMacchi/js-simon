// Recupero div container
const container = document.getElementById("container")

// Generazione di 5 numeri random
const randNum = genRandSeq(1,100)
console.log("questi sono i numeri casuali", randNum)

// Stampa numeri random in pagina
container.innerText = randNum

// Imposto timer per richiesta e scomparsa numeri
let timeOut = setInterval(scomp,10000)




// Scomparsa numeri
// Richiesta numeri utente

function scomp(){
    container.innerText = "";
    for (let i = 0; i < 5; i++){
        let num = parseInt(prompt("Inserisci uno dei numeri che hai visto prima"))
        // Verifica numeri dati dall'utente
        if (randNum.includes(num)) {
            console.log("numero presente", num)
        } else {
            console.log("numero non presente", num)
        }
    }
}