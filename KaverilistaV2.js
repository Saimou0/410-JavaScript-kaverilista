const kaveriLista = new Array();

function lisaaKaveri(form) {
    const muokattavaKaveri = form.syotto.value;
    
    if (muokattavaKaveri != "") {
        document.getElementById("varoitus").innerHTML = "";

        const lisattavaKaveri = kaveriLista.indexOf(muokattavaKaveri);
        if (lisattavaKaveri == -1) {
            kaveriLista.push(muokattavaKaveri);
        } else {
            document.getElementById("varoitus").innerHTML = "Lista sisältää nimen.";
        }


        let teksti = "<ol>";
        for (let i = 0; i < kaveriLista.length; i++) {
            teksti += "<li>" + kaveriLista[i] + "</li>";
        }
        teksti += "</ol>";
        document.getElementById("listaus").innerHTML = teksti;
        
    }


    if (muokattavaKaveri == "") {
        document.getElementById("varoitus").innerHTML = "Tekstikenttä tyhjä.";
    }

}

function poistaKaveri(form) {
    const muokattavaKaveri = form.syotto.value;
    const poistettavaKaveri = kaveriLista.indexOf(muokattavaKaveri);
    document.getElementById("varoitus").innerHTML = "";

    if (poistettavaKaveri > -1) {
        kaveriLista.splice(poistettavaKaveri, 1);
    } else {
        document.getElementById("varoitus").innerHTML = "Kaveria ei löydy listalta.";
    }

    if (muokattavaKaveri == "") {
        document.getElementById("varoitus").innerHTML = "Tekstikenttä tyhjä.";
    }

    let teksti = "<ol>";
    for (let i = 0; i < kaveriLista.length; i++) {
        teksti += "<li>" + kaveriLista[i] + "</li>";
    }
    teksti += "</ol>";
    document.getElementById("listaus").innerHTML = teksti;

    
}

function jarjestaKaverit(form) {
    document.getElementById("varoitus").innerHTML = "";
    kaveriLista.sort();
    document.getElementById("varoitus").innerHTML = "Lista järjestetty";

    let teksti = "<ol>";
    for (let i = 0; i < kaveriLista.length; i++) {
        teksti += "<li>" + kaveriLista[i] + "</li>";
    }
    teksti += "</ol>";
    document.getElementById("listaus").innerHTML = teksti;
}