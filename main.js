
function sumAll(arr) {
    let sum = 0;
    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);

    for (var i = min; i <= max; i++) {
        sum += i;
    }

return sum;
}

console.log(sumAll([10, 5]));
