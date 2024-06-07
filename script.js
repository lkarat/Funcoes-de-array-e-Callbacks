const multiplicaPorTres = (listaNumeros) => {

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
console.log(retornaPares([1,2,3,4,5,6,7,8]));




