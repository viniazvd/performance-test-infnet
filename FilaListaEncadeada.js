/*
* 'classe': FilaListaEncadeada
*
* pseudo-classe, pois no caso, se trata de uma factory
*
* função primeiro: retorna o primeiro elemento da list
* função enqueue: enfileira um elemento (a questão não ficou clara!)
* função dequeue: consome um item da lista e retorna o mesmo (a questão não ficou clara!)
*/

module.exports = (list) => {
  return {
    primeiro: () => `The first list item is: ${list[0]}.`,
    enqueue: () => {
      list.sort((a, b) => a - b)
      return 'Ordered list.'
    },
    dequeue: item => {
      const checkItem = list.find(el => el === item)
      return !checkItem ? 'The list does havent the item supplied.' : checkItem
    }
  }
}