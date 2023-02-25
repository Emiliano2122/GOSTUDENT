function suma(x,y,z, d, j){
    return x + y + z + d + j;
}

const numbers1 = [1,2,3];
const numbers2 = [4,5,6];

const allNumbers = [...numbers1, ...numbers2];
//console.log(allNumbers)
//console.log(suma(...allNumbers));
//console.log(suma(...numbers1));
//console.log(suma(...numbers2));

const dateFields = [1970,1,2];

var d = new Date(...dateFields);
//console.log(d);

const obj = {a: 1, b: 2, c: 3};
const obj3 = {d: 4, f: 5, g: 6};
obj.a = 20;
//console.log(obj);

const obj2 = {...obj, ...obj3};

//console.log(obj2);

const restar = (a, ...obj) => {
    console.log(...obj);
    console.log(a);
};

const {a, ...restobj} = obj

restar(a, restobj);