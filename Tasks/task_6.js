function twoSum(arr, target) {
    let res = [];
    let indexes = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (target === arr[i] + arr[j] && !indexes.includes(i) && !indexes.includes(j)) {
                res.push([arr[i], arr[j]]);
                indexes.push(i);
                indexes.push(j);
            }
        }
    }
    return res;
}
console.log('Result - ',
    twoSum([1,2,3,4,5,6,7,8,9,10], 19)
);