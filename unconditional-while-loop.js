let loop = true
let i = 0
while (loop) {
    console.log(i);
    if ((Math.ceil(Math.random() * 10)) === 5) {
        loop = false
    }
    i += 1
}
