/**
 * 1. buat variable yang isinya nama temen2 + 1 kalimat penyemangat
 * let arrayMe = "ilham fadhilah besok adalah hari baru"
 * 2. buat 2 array dari kalimat tersebut
 *      - arr1 => isinya kata2 yang panjangnya <= 5
 *      - arr2 => isinya kata2 yang panjangnya > 5
 * 
 * hint: mengambil panjang string pake .length
 */
let arrayMe = "ilham fadhilah besok adalah hari baru"
let me1 = [], me2 = []
arrayMe = arrayMe.split(' ') // [ilham, fadhilah, ...]
console.log(arrayMe);
for (let i = 0; i < arrayMe.length; i++) {
    if (arrayMe[i].length <= 5) {
        me1.push(arrayMe[i])
    } else {
        me2.push(arrayMe[i])
    }
}
console.log(me1);
console.log(me2);
