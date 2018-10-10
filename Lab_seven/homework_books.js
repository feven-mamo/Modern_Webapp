const MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

class Student {
    constructor(name, stu_id,email) {
        this.name = name;
        this.stu_id = stu_id;
        this.email=email;
    }
}
class Book {
    constructor(isbn, author, tags) {
        this.isbn = isbn;
        this.author = author;
        this.tags = tags;
        this.borrowed = null;
    }
    changeBorrowed(borrow) {
        this.borrowed = borrow;
    }
}
class BorrowedBook {
    constructor(student, borrowedDate, dueDate) {
        this.student = student;
        this.borrowedDate = borrowedDate;
        this.dueDate = dueDate;
    }
}
var addedBook;
MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    console.log('Connected to DB');
    var dbo = db.db('BookDB');

    var author = "Dietel";
    var student = new Student('Feven Mamo', '986456','fmamo@mum.edu');
    var borrowDate = new Date(2018, 6, 1);
    var dueDate = new Date(2018, 7, 2);
    var borrowedbk = new BorrowedBook(student, borrowDate, dueDate);
    var tags ="how to program";
    var book = new Book('112233', author, tags);
    book.changeBorrowed(borrowedbk);
    var obj = { book: book };

    dbo.collection('books').insertOne(obj, (err, result) => {
        if (err) throw err;       
        console.log('book added successfully');
    });
    db.close();
});