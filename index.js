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

function drawMatrix(num) {
    num = parseInt(num)
    console.log('Building...')
    const firstChar = 65, // значение первоначального символа по ACII = 65 == 'A'
        avChar = firstChar + num // значение максимального символа, тот что будет по средине 
    let pattern = [], // переменная шаблона, куда будут помещаться строки. В конце превращается в строку
        arifProg = 1 // арифметическая прогрессия. После прибавления каждой новой строки увеличивается на 2
    while (pattern.length < num * 2 - 1) {
        let patternComp = [] // паттерн должен постоянно сбрасываться. паттерн каждой строки
        for (let i = 0; i < num * 2 - 1; i++) {
            let char = 0 // всегда сбрасываем на ноль, что бы не было непонятных значений
            if (i < num - 1) { // когда i меньше заданного пользователем числа строк/символов*2/1 - 1, ACII значение символа идет по нарастанию 
                //char = avChar - num + i               // альтернативно firstChar + i, но оба варианта верны
                char = firstChar + i
            } else { // когда i больше заданного пользователем числа строк - 1, ACII значение символа идет на убывание
                char = avChar - (i - num) - 2
            }

            if (pattern.length > 0 && pattern.length < num * 2 - 2) { // проверяет, что бы менялись строки между первой и последней
                const space = 32 // код пробела

                /*if(char == avChar-1){                   // строит вертикальную полосу из пробелов. как выяснилось позже, это не играет роли
                   char = space
                }
                else */
                if (pattern.length == num - 1 && char > firstChar && char < avChar) { // строит горизонтальную черту в паттерне
                    char = space
                } else if (pattern.length < num - 1 && pattern.length > 0) { // строит пирамиду от строки 1 и до num - 1 
                    if (arifProg <= num * 2 - 3 && char > avChar - Math.ceil(arifProg / 2)) { // формула проверки прогресии и вырезание символов по нарастанию
                        char = space
                    }
                } else if (pattern.length > num - 1 && pattern.length < num * 2 - 1) { // строит пирамиду от строки num - 1 и до последней строки
                    if (arifProg >= num * 2 - 3 && char > firstChar - (avChar + num - (avChar + Math.ceil(arifProg / 2)))) { // без комментариев
                        char = space
                    }
                }
            }

            patternComp.push(String.fromCharCode(char))
        }
        arifProg += 2 // увеличение ариф.прогрессии 
        pattern.push(patternComp.toString().replace(/[,]+/g, ' ') + '\n') // регулярка на уборку всех запятых и их дальнейшую замену пробелами.
    }
    console.log(pattern.toString().replace(/[,]+/g, '')) // регулярка на уборку всех запятых и их дальнейшую замену пробелами. вывод результата
    start()
}

function start() {
    readline.question('Write a number of rows and cols: ', num => {
        console.log('Number is: ' + num)
        controller(num)
    })
}

start()