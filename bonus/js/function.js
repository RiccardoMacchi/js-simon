// funzione creazione element
function newElCl(tag,classAdd){
    let myBox = document.createElement(tag)
    myBox.className = classAdd
    return myBox
}

// Generazione numeri random
function randNumMinMax(min,max){
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    return num
}

// Generazione arry da n numeri random da min a max
function genRandSeq(min,max){

    const arryNum = [];

    while (arryNum.length < 5){
        let num = randNumMinMax(min,max)

        if (!arryNum.includes(num)){
            arryNum.push(num);
        }
    }
    return arryNum
}

function crateInput(){
    container.innerText = "";
    container.innerHTML = `<h3>INSERISCI QUI I NUMERI CHE HAI MEMORIZZATO E POI VERIFICA QUANTI NE HAI INDOVINATI</h3>`
    for (let i = 0; i < 5; i++){
        inputUser = container.innerHTML += `<input id="num_user${i}" type="text">`;
    }
}