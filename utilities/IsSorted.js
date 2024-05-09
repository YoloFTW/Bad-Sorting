module.exports = {

    /**
     * checks if array is sorted
     * @param {Array} arr array to check
     * @returns {Boolean} 
     */
    IsSorted: (arr) => {

        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                return false;
            }
        }
        return true;

    }

}