let panjang = 11, nilaiTambah = 0;
for (let i = 1; i <= panjang; i++) {
    let str = ''
    for (let j = 1; j <= panjang; j++) {
        if (
            j == Math.ceil(panjang / 2) + nilaiTambah ||
            j == Math.ceil(panjang / 2) - nilaiTambah ||
            (j > Math.ceil(panjang / 2) - nilaiTambah && j < Math.ceil(panjang / 2) + nilaiTambah)
        ) {
            str += '*'
        } else {
            str += '-'
        }
    }
    if (i < Math.ceil(panjang / 2)) {
        nilaiTambah++
    } else {
        nilaiTambah--
    }
    console.log(str)
}
