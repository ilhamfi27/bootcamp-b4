/**
 * fungsi untuk menentukan sebuah angka
 * yang diinputkan adalah ganjil atau genap
 */
function ganjilAtauGenap(angka) {
    if (angka % 2 === 0) {
        return 'genap'
    }
    return 'ganjil'
}

/**
 * fungsi untuk mengambil angka random dengan range 1 - 100
 * hint Math.ceil(Math.random())
 */

function getRandom() {
    return Math.ceil(Math.random() * 100)
}
console.log(ganjilAtauGenap(getRandom()));
