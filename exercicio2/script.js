const listaUm = [3, 10, 106, 55, 24, 78, 110];

const listaDois = ["flores", "perfume", "velas", "filme", "snacks"];

const listaTres = [25, "coca-cola", false, "chocolate", 02, true];


//a
console.log(listaUm.length) // imprimiu 7 itens
console.log(listaDois.length) // imprimiu 5 itens
console.log(listaTres.length) // imprimiu 6 itens

//b
console.log(listaUm.slice(0,1)) // 3
console.log(listaDois.slice(1,2)) // perfume
console.log(listaTres.slice(2,3)) // false

//c
console.log(listaUm.includes(24)) // true
console.log(listaTres.includes("brigadeiro")) // false