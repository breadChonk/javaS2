document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
    let kirjautunut = "kylla";
    if (kirjautunut === "kylla") {
         document.getElementById("Tervetulo_teksti").textContent += " Emma";
    }
}
function kirjaudu(){
    Localstorage.setItem("nimi", "emma");
}