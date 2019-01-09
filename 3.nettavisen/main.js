// HTML-elementer
const skjema = document.querySelector("#skjema");
const inpOverskrift = document.querySelector("#inpOverskrift");
const inpHovedtekst = document.querySelector("#inpHovedtekst");
const inpBilde = document.querySelector("#inpBilde");

// DATABASE-kobling
const db = firebase.database();

// Angi hvor i databasen vi skal lagre nettsiden
const nettsider = db.ref("nettsider");

function lagreNettside(evt) {
    evt.preventDefault();
    nettsider.push({
        overskrift: inpOverskrift.value,
        hovedtekst: inpHovedtekst.value,
        bilde: inpBilde.value
    })
}

// Eventlistenere
skjema.addEventListener("submit", lagreNettside);