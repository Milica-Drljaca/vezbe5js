
//console.log(obrisiDugmad);

// 1. IZVRSNA FUNKCIJA
function menjanjeBoja(boja){
    let obrisiDugmad = document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor=boja;
    }
}

//menjanjeBoja("green");

// 2. ARROW FUNKCIJA

let menjanjeBojaA = (boja)=>{
    let obrisiDugmad = document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor=boja;
    }
}

//menjanjeBojaA("blue");

let menjanjeBojaB = (boja)=>Array.from(document.getElementsByClassName("obrisi")).forEach(dugme=>dugme.style.backgroundColor=boja);
menjanjeBojaB("purple");

//3. CALLBACK FUNKCIJA

let obrisiDugmad = document.getElementsByClassName("obrisi");

for (const dugme of obrisiDugmad) {
    dugme.addEventListener("click", function (e){
        console.log(this);
        console.log(this.parentNode);
        let ElementZaBrisanje=this.parentNode;
        ElementZaBrisanje.remove();

    })
}

function dodajDestinaciju(event){
    event.preventDefault();
    let inputPolje = document.querySelector("#dodaj-destinaciju input");

    let nazivNoveDestinacije = inputPolje.value;

    if(nazivNoveDestinacije){
        let ul=document.getElementById("lista");
        let noviList = document.createElement("li");

        noviList.innerHTML=`<span class="naziv">${nazivNoveDestinacije}</span>
        <span class="obrisi">obriši</span>`

        ul.appendChild(noviList);
        inputPolje.value="";
    }
}

function pozivCallBackFunkcije (){
    let forma = document.forms["dodaj-destinaciju"];
    forma.addEventListener("submit", dodajDestinaciju);
}

document.addEventListener("DOMContentLoaded", pozivCallBackFunkcije);