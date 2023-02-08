let maxLoop = 10
let minValue = 0
for (let i = 1; i <= maxLoop; i++) {
    let str = ''
    for (let j = 0; j <= maxLoop; j++) {
        str += j >= maxLoop - minValue ? '*' : ' '
    }
    minValue += 1
    console.log(str)
}
