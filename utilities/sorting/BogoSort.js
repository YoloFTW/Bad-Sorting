const { IsSorted } = require("../IsSorted")
const { Shuffle } = require("../Shuffle")

module.exports = {

    /**
     * Bogo Sorts the array
     * @param {Array} arr array to sort
     * @returns {Array} 
     */
    BogoSort: (arr) => {

        while(IsSorted(arr) == false){
            arr = Shuffle(arr);
        }

        return arr

    }

}