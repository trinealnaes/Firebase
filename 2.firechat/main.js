// HTML-elementer
const skjema = document.querySelector("#skjema");
const inpMelding = document.querySelector("#inp-melding");
const secMeldinger = document.querySelector("#sec-meldinger");

// Database-greier
const db = firebase.database();
const meldinger = db.ref("meldinger");

// Funksjon som legger en melding i databasen
function lagreMelding(evt) {
    evt.preventDefault();
    meldinger.push(inpMelding.value);
    skjema.reset();
}

// Funksjon som viser en melding
function visMelding(snap) {
    const melding = snap.val();
    secMeldinger.innerHTML += `<div>${melding}</div>`;
}

// Event Listeners
skjema.addEventListener("submit", lagreMelding);
meldinger.on("child_added", visMelding);
