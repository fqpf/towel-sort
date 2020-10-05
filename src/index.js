
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    let newArr = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            newArr.push(...matrix[i])

        } else {
            matrix[i].sort((a, b) => b - a);
            newArr.push(...matrix[i])
        }
    }
    return newArr;
};
