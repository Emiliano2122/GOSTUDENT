const url = "http://cliente.casafintech.com/propiedad";

let dataCasas = [];
retrievData();

async function retrievData(){
    dataCasas = await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log("Retriving data: ")
            return data
        })
        .catch((error) => console.log("Error: " + error));
        console.log(dataCasas)
}

    let dirrection = document.createElement("h1");
    let text = document.createTextNode("Esta es la direccio de la casa");
    dirrection.appendChild(text);
    let elemento = document.getElementById("direccionCasa")