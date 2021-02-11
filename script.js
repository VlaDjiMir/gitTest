const promise = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.info('MY PROMISE')
            res()
        }, 2000)
    })
}

promise().then(() => {
    console.info('YOUR PROMISE')
})

console.info('Async')