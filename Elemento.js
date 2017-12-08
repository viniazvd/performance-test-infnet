/*
* 'classe': Elemento
*
* pseudo-classe, pois no caso, se trata de uma factory
*
* função inserirApos: inseri um elemento no final da list.
*/

module.exports = (list) => {
  return {
    inserirApos: item => {
      list.push(item)
      return 'The item has been inserted at the end of the list.'
    }
  }
}
