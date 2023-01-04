/**
 * fizzbuzz
 * loop sebanyak 100x
 * kalau dia kelipatan 3 => fizz
 * kalau dia kelipatan 5 => buzz
 * kalau dia kelipatan 3 && 5 => fizzbuzz
 */
for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else {
        console.log(i);
    }
}
