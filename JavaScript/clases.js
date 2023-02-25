class Saludos{
    escritoHola = "";
    animo = true;
    constructor(estado){
        this.escritoHola=estado
        console.log("Se ha creado un objeto usando la clase Saludos");
    }

    Hola() {
        console.log(
            `El saludo es: ${this.escritoHola} y esto ${this.animo ? "de buen animo" : "triste"}`
        );
        
    }

    modSaludo(nuevoSaludo){
        this.escritoHola=nuevoSaludo
    }
}
const Saludo1 = new Saludos("Hola");

Saludo1.Hola();
console.log(Saludo1.escritoHola);

Saludo1.animo = false;
Saludo1.modSaludo("que paso");
Saludo1.Hola();
const Saludo2 = new Saludos("Buenas tardes");
console.log(Saludo2.escritoHola);

