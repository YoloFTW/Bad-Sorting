const { IsSorted } = require("../IsSorted")

module.exports = {

    /**
     * Miracle Sorts the array
     * @param {Array} arr array to sort
     * @returns {Array} 
     */
    MiracleSort: (arr) => {

        while(IsSorted(arr) == false){
            continue;
        }

        return arr

    }

}