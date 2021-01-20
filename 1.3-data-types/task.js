function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    // return totalAmount;
    "use strict";
    let perc = percent;
    let cont = contribution;
    let price = amount;
    let bodyCredit = price - cont;
    let P = perc / 1200;
    let now = new Date();
    let endDate = date;
    let term = (((endDate.getFullYear() - now.getFullYear()) * 12 ) + (endDate.getMonth() - now.getMonth()));
    let monthAmount = bodyCredit * (P + P / (Math.pow((1+P),term) - 1));
    let totalAmount = Number((monthAmount * term).toFixed(2));
    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
    userName = name;
    if ((userName === undefined) || (userName === ''))
        userName = 'Аноним';
    let greeting = `Привет, мир! Меня зовут ${userName}.`
    console.log(greeting);
    return greeting;
}