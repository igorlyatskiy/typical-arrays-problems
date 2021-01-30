exports.min = function min(array) {
    let min = Infinity;
    if (typeof array == "undefined") return 0;
    if (array.length > 0) {
        let length = array.length;
        for (let i = 0; i < length; i++) {
            value = array.shift();
            if (value < min) {
                min = value;
            }
        }
        return min;
    } else return 0;
};

exports.max = function max(array) {
    let max = -Infinity;
    if (typeof array == "undefined") return 0;
    if (array.length > 0) {
        let length = array.length;
        for (let i = 0; i < length; i++) {
            value = array.shift();
            if (value > max) {
                max = value;
            }
        }
        return max;
    } else return 0;
};

exports.avg = function avg(array) {
    let sum = 0;
    if (typeof array == "undefined") return 0;
    if (array.length > 0) {
        let length = array.length;
        for (let i = 0; i < length; i++) {
            value = array.shift();
            sum += value;
        }

        return sum / length;
    } else return 0;
};
