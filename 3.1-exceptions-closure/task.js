function parseCount(num) {
    const newNum = Number.parseInt(num);
    if (isNaN(newNum)) {
        throw new Error("Невалидное значение");
    }
    return newNum;
}
function validateCount(num) {
    try {
        return parseCount(num);
    }
    catch(err) {
        return err;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b) <= c || (a + c) <= b || (b + c) <= a)
        throw new Error("Треугольник с такими сторонами не существует");
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        const p = this.getPerimeter() / 2;
        return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
    }
}
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } 
    catch {
        return {getPerimeter() {return "Ошибка! Треугольник не существует"}, getArea() {return "Ошибка! Треугольник не существует"}};
    }            
}