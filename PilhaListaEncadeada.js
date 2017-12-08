/*
* 'classe': PilhaListaEncadeada
*
* pseudo-classe, pois no caso, se trata de uma factory
*
* função bigger: retorna o último elemento da list.
* função topo: retorna o último elemento da list.
* função push: insere um elemento na list.
* função pop: remove um elemento da list, retornando-o.
*/

module.exports = (list) => {
  return {
    bigger: () => {
      const listOrdened = list.sort((a, b) => b - a)
      const firstItem = listOrdened[0]
      return `The last item in list is: ${firstItem}.`
    },
    topo: () => {
      const lastPosition = list.length - 1
      const lastItem = list[lastPosition]
      return `The last item of list is: ${lastItem}`
    },
    push: item => {
      list.push(item)
      return 'The item has been inserted at the end of the list.'
    },
    pop: () => {
      list.pop()
      return 'The last list item has been removed.'
    }
  }
}
