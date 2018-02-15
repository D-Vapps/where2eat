const ArrayUtils = {
  shuffle: function(array) {
    let randomizedDeck = [];

    while ( array.length !== 0) {
      let rIndex = Math.floor(array.length * Math.random());
      randomizedDeck.push(array[rIndex]);
      array.splice(rIndex, 1)
    }

    return randomizedDeck;
  }
};

export default ArrayUtils;