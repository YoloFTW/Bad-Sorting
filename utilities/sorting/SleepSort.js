
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {

    /**
     * Sleep Sorts the array
     * @param {Array} arr array to sort
     * @returns {Array} 
     */
    SleepSort: async (arr) => {
        let sortedArray = [];

        await Promise.all(arr.map(async (num) => {

            await sleep(num * 1000);
            
            sortedArray.push(num);
        }))
        
        return sortedArray;
    }

}