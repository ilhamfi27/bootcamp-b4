async function main() {
  let promises = []

  for (let i = 0; i < 100; i++) {
    let p = Promise.resolve(`angkanya: ${i}`)
    promises.push(p)
  }

  let allPromise = await Promise.all(promises);
  let anyPromise = await Promise.any(promises);
  let allSettledPromise = await Promise.allSettled(promises);
  let raceSettledPromise = await Promise.race(promises);
  console.log(allPromise);
  console.log(anyPromise);
  console.log(allSettledPromise);
  console.log(raceSettledPromise);
}
main()