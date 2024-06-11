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







/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const letras = ['a', 'b', 'c', 'd', 'e']

const novaListaModificada = numeros.map((cadaItem, index, array) => {


    return cadaItem*3
})
console.log(novaListaModificada)


const novaListaFiltrada = novaListaModificada.filter((cadaItem, index, array)=>{
    return cadaItem % 2 === 0
        
    })

console.log(novaListaFiltrada);*/


const pokemons = [
    {
        nome: 'Bulbasaur',
        tipo: 'grama',
        vida: 40
    },
    {
        nome: 'Bellsprout'
        , tipo: 'grama',
        vida: 20
    },
    {
        nome: 'Charmander',
        tipo: 'fogo',
        vida: 35
    },
    {
        nome: 'Vulpix',
        tipo: 'fogo',
        vida: 25
    },
    {
        nome: 'Squirtle',
        tipo: 'água', vida: 45
    },
    {
        nome: 'Psyduck',
        tipo: 'água',
        vida: 25
    }
]

const pokemonsVidaCheia = pokemons.map((cadaItem, index)=>{

    return {...cadaItem,vida:100}

})

const pokemonsDeFogo = pokemons.filter((cadaItem,index)=>{

    return cadaItem.tipo==='fogo'



})


console.log(pokemonsVidaCheia);

console.log(pokemonsDeFogo);
