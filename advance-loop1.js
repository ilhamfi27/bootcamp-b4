for (let i = 0; i < 10; i++) {
    let str = ''
    for (let j = 0; j < 11; j++) {
        str += j <= i ? '*' : '+'
    }
    console.log(str)
}
