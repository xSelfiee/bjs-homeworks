class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
    }
    set state(value) {
        if (value < 0)
        this._state = 0;
        else if (value > 100)
        this._state = 100;
        else
        this._state = value;
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }    
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }    
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }   
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }   
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }   
}

//const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

// console.log(picknick.author); //"Аркадий и Борис Стругацкие"
// picknick.state = 10;
// console.log(picknick.state); //10
// picknick.fix();
// console.log(picknick.state); //15


// const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

// console.log(sherlock.releaseDate); //2019
// console.log(sherlock.state); //100
// sherlock.fix();
// console.log(sherlock.state); //100

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30)
        return this.books.push(book);
        //console.log(book);
    }
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value)
            return this.books[i];
        }
        return null;
    }
    giveBookByName(bookName) {
        let removed;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName)
            removed = this.books[i];
            this.books.splice(i , 1);
            return removed;
        }
        return null;
    }
}
const library = new Library("Библиотека имени Ленина");
//library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
//console.log(library.findBookBy("name", "Пикник на обочине"));

//library.addBook(new PrintEditionItem('Типовой школьный журнал', 2019, 102));
//console.log(library.findBookBy("name", "Типовой школьный журнал"));
//const firstBook = library.findBookBy("releaseDate", 2019);
//console.log(firstBook.name);
//console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
//library.giveBookByName("Машина времени");
const firstBook = library.giveBookByName('Машина времени');
console.log(firstBook);
//expect(firstBook.name).toEqual('Машина времени');
//expect(library.books.length).toEqual(0);
//console.log("Количество книг до выдачи: " + library.name); //Количество книг до выдачи: 4

class StudentLog {
    constructor(name) {
        this.name = name;
        this.academicSubject = {};
    }
    getName() {
        return this.name;
    }
    addGrade(grade, subject) {
        if (this.academicSubject.hasOwnProperty(subject) === false)
        this.academicSubject[subject] = [];    
        if ([1, 2, 3, 4, 5].indexOf(grade) != -1)   //if ((grade === 1) || (grade === 2) || (grade === 3) || (grade === 4) || (grade === 5))                  
        this.academicSubject[subject].push(grade);
        if (this.academicSubject[subject].length === 0){
            delete this.academicSubject[subject];
            return 0;
        }
        return this.academicSubject[subject].length;
    }
    getAverageBySubject(subject) {
        let count = 0;
        for (let i = 0; i < this.academicSubject[subject].length; i++) {
            count += this.academicSubject[subject][i];
        }
        if (count === 0)
        return 0;
        return count / this.academicSubject[subject].length;
    }
    getTotalAverage() {
        let count = 0;
        for (let key in this.academicSubject) {
            count += this.getAverageBySubject(key);
        }
        return count / Object.getOwnPropertyNames(this.academicSubject).length;
    }
}
const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
console.log(log.getAverageBySubject('algebra'));
log.addGrade(5, 'geometry');
log.addGrade(5, 'geometry');
log.addGrade(5, 'geometry');
console.log(log.addGrade(0, 'chemistry'));
console.log(log.academicSubject);
console.log(log.getTotalAverage());