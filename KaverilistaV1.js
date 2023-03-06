const kaveriLista = new Array();

function lisaaKaveri(form) {
    const lisattavaKaveri = form.syotto.value;
    
    if (lisattavaKaveri != "" && kaveriLista.length < 10) {
        document.getElementById("varoitus").innerHTML = "";
        kaveriLista.push(lisattavaKaveri);
    }

    if(kaveriLista.length == 10) {
        let teksti = "<ol>";
        for (let i = 0; i < kaveriLista.length; i++) {
            teksti += "<li>" + kaveriLista[i] + "</li>";
        }
        teksti += "</ol>";
        document.getElementById("listaus").innerHTML = teksti;
    }

    if (lisattavaKaveri == "") {
        document.getElementById("varoitus").innerHTML = "Nimi ei saa olla tyhjä!"
    }

}