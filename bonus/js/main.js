// Recupero elementi pagina
const container = document.getElementById("container")

// Creazione div

const newDiv = document.createElement("div") 
// Recupero numeri utente
const numUser = []
let inputUser = container.innerHTML

// Numero punti
let point = 0

// Bottoni
const buttonStrat = document.getElementById("my_btn")
const buttonVerify = document.getElementById("verify")

// Generazione di 5 numeri random
const randNum = genRandSeq(1,100)
console.log("questi sono i numeri casuali", randNum)

// Stampa numeri random in pagina
container.innerText = randNum

// Imposto timer per richiesta e scomparsa numeri
let timeOut = setTimeout(scomp,3000)


// Scomparsa numeri
// Richiesta numeri utente

function scomp(){
    container.innerText = "";
    for (let i = 0; i < 5; i++){
        inputUser = container.innerHTML += `<input id="num_user${i}" type="text">`;
    }
    
    
}

buttonVerify.addEventListener("click",
    ()=>{
        for (let i = 0; i < 5; i++) {
            let nodoNumSingleUser = document.getElementById(`num_user${i}`)
            let numSingleUser = nodoNumSingleUser.value;
            console.log(numSingleUser);
            if (randNum.includes(numSingleUser)) {
                console.log(newDiv)
                newDiv.innerHTML += `${numSingleUser}`
                console.log(newDiv)
                container.append(newDiv)
                point++;
            } else {
                console.log("numero non presente",);
            }
        }
        

    }
)
