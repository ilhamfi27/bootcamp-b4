let a = 10
let b = 15
let c = -5

let cek = a > 0
            ? 'negatif'
            : (b > 0 ? 'B positif' : 'B negatif')
if (a > 0) {
    console.log('negatif')
} else {
    if (b > 0) {
        console.log('b positif');
    } else {
        console.log('b negatif')
    }
}
console.log(cek);
