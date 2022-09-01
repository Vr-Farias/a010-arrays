const listaUm = [3, 10, 106, 55, 24, 78, 110]
const listaDois = ["flores", "perfume", "velas", "filme", "snacks"]
const listaTres = [25, "coca-cola", false, "chocolate", 02, true]

// cópias:
const listaUmCopia = listaUm
const listaDoisCopia = listaDois
const listaTresCopia = listaTres

//a
console.log(listaUm);
listaUm.push(34);
console.log(listaUmCopia);

//b
console.log(listaDois);
listaDoisCopia.pop();
console.log(listaDoisCopia);

//c
console.log(listaTres);
listaTres.splice(1,1);
console.log(listaTresCopia);

