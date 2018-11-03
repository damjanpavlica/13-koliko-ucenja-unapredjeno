// SELEKTORI

const polje = document.getElementById("polje")
const pasus1 = document.getElementById("pasus1")
const pasus2 = document.getElementById("pasus2")
const dugme = document.getElementById("dugme")

function izracunaj() {
    // VARIJABLE
    let satiUcenjaDnevno = Number(polje.value)
    const satiDoPocetnika = 2000
    const satiDoEksperta = 10000

    // LOGIKA
    const danaDoPocetnika = satiDoPocetnika / satiUcenjaDnevno
    satiUcenjaDnevno = 8
    const danaOdPocetnikaDoEksperta = (satiDoEksperta - satiDoPocetnika) / satiUcenjaDnevno
    const danaDoEksperta = danaDoPocetnika + danaOdPocetnikaDoEksperta

    // ISPIS
    pasus1.innerText = "Potrebno ti je " + danaDoPocetnika + " dana učenja da postaneš početnik."
    pasus2.innerText = "Potrebno ti je " + danaDoEksperta + " dana učenja da postaneš ekspert."
}

// DOGADJAJI
dugme.addEventListener("click", izracunaj)