// tady je místo pro náš program

function hodKostkou(){

    let cislo
    let zprava = document.querySelector("#zprava");
    let obrazek = document.querySelector("#kostka");

    cislo = Math.floor(Math.random() *6 + 1);

    if (cislo === 6){
            zprava.innerHTML = ("Hodila jsi 6!!! Vyhráváš!");
        } else{
            zprava.innerHTML = ("Hodila jsi "+ cislo +"! Pokračuj ve hře!");
    }

    obrazek.src = 'obrazky/'+cislo+'.png';
    
}





