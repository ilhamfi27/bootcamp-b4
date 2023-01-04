let minValue = 0
for (let i = 0; i < 10; i++) {
    let str = ''
    for (let j = 0; j < 10; j++) {
        str += j >= 9 - minValue ? '*' : ' '
    }
    minValue += 1
    console.log(str)
}
