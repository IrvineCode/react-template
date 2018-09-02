setTimeout(() => {
    console.log(1);

    setTimeout(() => {
        console.log(2)
    }, 1000)

}, 2000)

setTimeout(() => {
    console.log(4)
}, 1000)

console.log(3)