const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function controller(num) {
    num = parseInt(num)
    if (num > 1 && typeof num == 'number' && isNaN(num) == false) {
        drawMatrix(num)
    }
    else{
        console.log(`Invalid value ${num}. It must be a NUMBER > 1`)
        start()
    }
}

function drawMatrix(num){
    for(i = -1; i < num; i++){
        let arr = []
        for(j = 0; j <= num-i; j++){
            arr.push('$')
        }
        for(j = 0; j <= 2*i+1; j++){
            arr.push(' ')
        }
        for(j = 0; j <= num-i; j++){
            arr.push('*')
        }
        console.log(arr.toString().replace(/[,]+/g, ' '))
    }
    for(i = num; i > -2; i--){
        let arr = []
        for(j = 0; j <= num-i; j++){
            arr.push('$')
        }
        for(j = 0; j <= 2*i+1; j++){
            arr.push(' ')
        }
        for(j = 0; j <= num-i; j++){
            arr.push('*')
        }
        console.log(arr.toString().replace(/[,]+/g, ' '))
    }
    start()
}

function start() {
    
    readline.question('Write a number of rows and cols: ', num => {
        console.log('Number is: ' + num)
        controller(num)
    })
}

start()