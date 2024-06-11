/*const multiplicaPorTres = (listaNumeros) => {

    let numerosPorTres = []
    for (const cadaItem of listaNumeros) {
        numerosPorTres.push(cadaItem * 3)

    }
    return numerosPorTres
}
const retornaPares = (lista2Numeros) => {
    let novoArray = []

    for (const cadaItem2 of lista2Numeros) {
        if (cadaItem2 % 2 === 0) {
            novoArray.push(cadaItem2)
        }
    }
    return novoArray
}

const imprimirCallback = (array, callback) => {
console.log(callback(array));

}
imprimirCallback([1,2,3,4,5,6,7,8,9,10], multiplicaPorTres)

imprimirCallback([1,2,3,4,5,6,7,8,9,10], retornaPares)

imprimirCallback(multiplicaPorTres([1,2,3,4,5,6,7,8,9,10]), retornaPares)*/

const numeros=[1,2,3,4,5,6,7,8,9,10]
const letras = ['a', 'b', 'c', 'd', 'e']

const novalista=letras.map((cadaItem, index, array)=>{
   
   return cadaItem
})

console.log(novalista);
