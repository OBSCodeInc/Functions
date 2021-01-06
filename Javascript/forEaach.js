/**
 * Traditional JavaScript forEach loop with an added delay between iterations.
 * @param {Array} array array to iterate over
 * @param {Function} callbackfn The function to execute on each value
 * @argument {any} callbackfn.value
 * @argument {Number} callbackfn.index
 * @param {Number} delay The time to wait between each iteration in ms
 * @returns {Promise<This>}
 */
async function forEaach(array, callbackfn, delay) {
    var arr = [...array];

    setInterval(async () => {
        if (!arr.length || !arr.length === 0) return clearInterval();

        await callbackfn(arr[0], array.indexOf(arr[0]));

        arr.shift();

        if (!arr.length || !arr.length === 0) return clearInterval();

    }, delay)

}

exports = forEaach;

