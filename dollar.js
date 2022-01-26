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
    for(let i = 0; i < num*2-1; i++){
        let arr = []
        for(let j = 0; j < num*2-1; j++){
            if(j == num -1 || j < num-2-i || j > num+i){
                arr.push(' ')
            }
            else if(i > num-1){
                if(j < num-(num*2 - i) || j > num+(num*2 - 2 - i)){
                    arr.push(' ')
                }
                else{
                    arr.push('$')
                }
            }
            else{
                arr.push('$')
            }
        }
        if(i == num-1){
            console.log(' ')
        }
        else{
            console.log(arr.toString().replace(/[,]+/g, ' '))
        }
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