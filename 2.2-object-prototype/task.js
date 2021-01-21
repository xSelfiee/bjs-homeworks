String.prototype.isPalindrome = function () {
    let phrase = this.toLowerCase().match(/[А-Я]/gi);
    return phrase.join('') === phrase.reverse().join('');
}
function getAverageMark(marks) {
    let average = 0;
    if (marks.length === 0)
    return 0;
    for (let i = 0; i < marks.length; i++){
        average += marks[i];
    }
    return Math.round(average / marks.length);
}

function checkBirthday(birthday) {
    return Math.floor((Date.now() -Number(new Date(birthday))) / (1000 * 60 * 60 * 24 * 365.25)) >= 18;
}