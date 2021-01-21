"use strict";
function getResult(a,b,c){
    let D = (Math.pow(b, 2) - (4 * a * c));
    let arr = [];
    if (D === 0)
        arr.push((-b + Math.sqrt(D)) / (2 * a));
    else if (D > 0){
        arr.push((-b + Math.sqrt(D)) / (2 * a));
        arr.push((-b - Math.sqrt(D)) / (2 * a));
    }
    return arr;
}

function getAverageMark(marks){
    let sum = 0;
    const maxMark = 5;
    if (marks.length === 0)
        return 0;
    marks.splice(maxMark);
    for (let i = 0; i < marks.length; i++) {
        sum += Number(marks[i]);
    }
    return sum / marks.length;
}

function askDrink(name,dateOfBirthday){
    return ((new Date().getFullYear() - dateOfBirthday.getFullYear()) > 18)
        ? `Не желаете ли олд-фэшн, ${name}?`
        : `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
}