function getSolutions( a, b, c ) {
    const D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) 
    return { D: D, roots: [] };
    if (D === 0) {
        let x1 = -b / 2*a;
        return { D: D, roots: [ x1 ] }
    }
    else if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return { D: D, roots: [ x1, x2 ] }
    } 
}
function showSolutionsMessage( a, b, c ) {
    const result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    }
    if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    }
    else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }


}
showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

console.log( getAverageScore({
    algebra: [ 2, 4 ,5, 2, 3, 4 ],
    geometry: [ 2, 4, 5 ],
    russian: [ 3, 3, 4, 5 ],
    physics: [ 5, 5 ],
    music: [ 2, 2, 6 ],
    english: [ 4, 4, 3 ],
    poetry: [ 5, 3, 4 ],
    chemistry: [ 2 ],
    french: [ 4, 4 ]
}));
function getAverageScore(data) {
    let average = 0;
    for (let grade in data) {
        data[grade] = getAverageMark(data[grade]);
        average += data[grade];
    }
    if (Object.keys(data).length === 0)
        data.average = average;
    else 
        data.average = average / Object.keys(data).length;
    return data;    
}
function getAverageMark(marks) {
    let sum = 0;
    if (marks.length === 0)
        return 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];         
    }
    return sum / marks.length;
}

function getPersonData(secretData) {
    for (let name in secretData) {
        secretData[name] = getDecodedValue(secretData[name]);
    }
    return { firstName: secretData.aaa, lastName: secretData.bbb };
}
function getDecodedValue(secret) {
    if (secret === 0) {
        return "Родриго";
    }
    else if (secret === 1) {
        return  "Эмильо";
    }
}
console.log( getPersonData({
    aaa: 0,
    bbb: 0
}));
console.log( getPersonData({
    aaa: 1,
    bbb: 0
}));
console.log( getPersonData({
    aaa: 0,
    bbb: 1
}));
console.log( getPersonData({
    aaa: 1,
    bbb: 1
}));