//HTML-elementer
const main = document.querySelector("main");

//Database-kobling
const db = firebase.database();
const nettsider = db.ref("nettsider");

function visNettside(snap) {
    const id = snap.key;
    const nyhet = snap.val();

    main.innerHTML += `
        <article>
            <img src="${nyhet.bilde}">
            <h1>${nyhet.overskrift}</h1>
            <p>${nyhet.hovedtekst}</p>
        </article>
    `;
}

// Eventlistener 
nettsider.on("child_added", visNettside);