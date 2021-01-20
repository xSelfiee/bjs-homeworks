function getResult(a,b,c){
    "use strict";
    let argA = a;
    let argB = b;
    let argC = c;
    let D = (Math.pow(argB, 2) - (4 * argA * argC));
    let arr = [];
    if (D < 0)
        return arr;
    if (D === 0)
        arr.push((-argB + Math.sqrt(D)) / (2 * argA));
    else if (D > 0){
        arr.push((-argB + Math.sqrt(D)) / (2 * argA));
        arr.push((-argB - Math.sqrt(D)) / (2 * argA));
    }
    return arr;
}

function getAverageMark(marks){
    let arr = Array.from(marks);
    let averageMark = 0;
    arrLength = arr.length;
    let sum = 0;
    if (arrLength === 0)
        return averageMark
    if (arrLength < 6){
        for (let i = 0; i < arrLength; i++) {
            sum += Number(arr[i]);
        }
        averageMark = sum / arrLength;
    }
    else if (arrLength > 5){
        for (let i = 0; i < 5; i++) {
            sum += Number(arr[i]);
        }
        averageMark = sum / 5;
    }
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let now = new Date();
    let age = now.getFullYear() - dateOfBirthday.getFullYear();
    let result = (age > 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    return result;
}