let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = []

for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] > 2 && arr1[i] < 7) {
        arr2.push(arr1[i])
        arr1.splice(i, 1)
    }
}
console.log(arr1);
console.log(arr2);

// [3, 4, 5, 6]
