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
        // Hva skal innlegget på nettsiden inneholde?
        overskrift: inpOverskrift.value,
        hovedtekst: inpHovedtekst.value,
        bilde: inpBilde.value
    });
    skjema.reset();
}

// Eventlistenere
skjema.addEventListener("submit", lagreNettside);