/*
* 'classe': ListaEncadeada
*
* pseudo-classe, pois no caso, se trata de uma factory
*
* função atribuir: atribui os elementos.
*/

module.exports = (list) => {
  return {
    atribuir: itemsList => {
      list = itemsList
      return list
    }
  }
}
