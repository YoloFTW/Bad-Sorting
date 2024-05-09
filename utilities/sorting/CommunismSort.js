const { IsSorted } = require("../IsSorted")

module.exports = {

    /**
     * Communism Sort the array
     * @param {Array} arr array to sort
     * @returns {Array} 
     */
    CommunismSort: (arr) => {

        let sum = arr.reduce((a, b) => a + b, 0);

        let length = arr.length

        let average = sum / length;

        return new Array(length).fill(average);

    }

}