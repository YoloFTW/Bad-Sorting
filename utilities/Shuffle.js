module.exports = {

    /**
     * Shuffles an array based of the Fisher-Yates shuffle algorithm
     * @param {Array} arr array to check
     * @returns {Array} shuffled array
     */
    Shuffle: (array) => {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

}