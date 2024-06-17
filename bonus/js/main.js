// Recupero elementi pagina
const container = document.getElementById("container")

// Creazione div

const newDiv = newElCl("div","right_num")
// Recupero numeri utente
const numUser = []
let inputUser = container.innerHTML

// Numero punti
let point = 0

// Creazione arrey vuoto sequenza
let randNum;
// Bottoni
const buttonStrat = document.getElementById("my_btn")
const buttonVerify = document.getElementById("verify")


buttonStrat.addEventListener("click",
    ()=>{
        container.innerHTML = `<h3>Ricordati questi numeri!! Hai 30 secondi...</h3>`
        // Generazione di 5 numeri random
        randNum = genRandSeq(1,100)
        console.log("questi sono i numeri casuali", randNum)

        // Stampa numeri random in pagina
        container.innerHTML += `<span>${randNum}</span>`

        // Imposto timer per richiesta e scomparsa numeri
        setTimeout(crateInput,3000)
    }
)

buttonVerify.addEventListener("click",
    ()=>{
        for (let i = 0; i < 5; i++) {
            let nodoNumSingleUser = document.getElementById(`num_user${i}`);
            let numSingleUser = parseInt(nodoNumSingleUser.value);
            console.log("prima dell'if", numSingleUser);
            if (randNum.includes(numSingleUser)) {
                console.log("presente");
                newDiv.innerHTML += `<span>${numSingleUser}</span>`
                console.log(newDiv);
                point++;
            } else {
                console.log("numero non presente",);
                // console.log("else console", numSingleUser);
            }
            nodoNumSingleUser.value = "";
        }
        // Stampa numeri giusti
        newDiv.innerHTML += `<h3>Hai memorizzato correttamente: ${point} numeri</h3>`
        container.append(newDiv);

    }
)
