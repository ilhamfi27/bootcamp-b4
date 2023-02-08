for (let baris = 0; baris < 10; baris++) {
    let str = ''
    for (let kolom = 0; kolom < 10; kolom++) {
        str += kolom <= baris ? '*' : '+'
    }
    console.log(str)
}
