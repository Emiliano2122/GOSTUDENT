const numbers = [0, 1, 2, 3, 4];

const r = numbers.filter((el) => el > 2);
console.log(r)

const valoresMenos = numbers.filter((el) => el < 2);
console.log(valoresMenos);

const cities = ["Berlin", "Madrid", "Mexico", "Mallorca", "Marsella"];

const mCities = cities.filter((el)=> el.toLowerCase().includes("x".toLowerCase()))

console.log(mCities);

const mapped = numbers.map((el, index)=> {
    console.log(`Este es el inidce: ${index}`);
    console.log(`La multiplicacion es esto ${el * 2}`);
});

console.log(mapped);

const myCities = cities.filter((el)=> el.toLowerCase().includes("r"))
console.log(myCities);

myCities.map((el, index)=> {
    console.log(`Este es el inidce: ${index + 1}`);
    console.log(`Esta es la ciudad ${el}`);
});
