function Hola (){
    return "hola";
}

function Saludar(nombre){
    return console.log("hola" + nombre)
}

const adios = () => console.log("Adios");



export {adios};
export default Hola;
export {Saludar};