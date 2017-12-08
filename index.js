const ListaEncadeada = require('./ListaEncadeada')
const Elemento = require('./Elemento')
const PilhaListaEncadeada = require('./PilhaListaEncadeada')
const FilaListaEncadeada = require('./FilaListaEncadeada')

/*
* TESTES
*
* Descomentar a(s) linha(s) abaixo para testar a(s) funcionalidade(s).
*
*/

const list = []
// console.log('Initial list: ', list)

const newList = ListaEncadeada(list).atribuir([7, 3, 9, 5, 2, 17])
console.log('New list:', newList)

// console.log(Elemento(newList).inserirApos(8))

// console.log(PilhaListaEncadeada(newList).push(6))
// console.log(PilhaListaEncadeada(newList).pop())
// console.log(PilhaListaEncadeada(newList).bigger())
// console.log(PilhaListaEncadeada(newList).topo())

// console.log(FilaListaEncadeada(newList).primeiro())
// console.log(FilaListaEncadeada(newList).enqueue())
// console.log(FilaListaEncadeada(newList).dequeue(4))

console.log('Final list:', newList)
