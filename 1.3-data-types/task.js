"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    if (isNaN(+percent)) {
        return `Параметр <Процентная ставка> содержит неправильное значение <${percent}>`;
    }
    const parsedPercent = parseFloat(percent) / 1200;
    if (isNaN(+contribution)) {
        return `Параметр <Начальный взнос> содержит неправильное значение <${contribution}>`;
    }
    if (isNaN(+amount)) {
        return `Параметр <Общая стоимость> содержит неправильное значение <${amount}>`;
    }
    let now = new Date();
    let term = (((date.getFullYear() - now.getFullYear()) * 12 ) + (date.getMonth() - now.getMonth()));
    let monthAmount = (amount - contribution) * (parsedPercent + parsedPercent / (Math.pow((1+parsedPercent),term) - 1));
    let totalAmount = Number((monthAmount * term).toFixed(2));
    return totalAmount;
}

function getGreeting(name) {
    return (`Привет, мир! Меня зовут ${name || "Аноним"}.`);
}