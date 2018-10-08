const express = require('express');
var morgan = require('morgan');
//const cors = require("cors");
var validator = require('express-validator');
var bodyParser = require('body-parser');
var app = express();
app.use(express.urlencoded({ extended: true }));

const port = 8888;

class Grade {
    constructor(id, name, course, grade) {
        this.id = id;
        this.name = name;
        this.course = course;
        this.grade = grade;
    }
}
var gradesDB = []; 
var id = 6;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(validator());


var router = express.Router();   

router.use(function (req, res, next) {
  
    console.log('Something is happening.');
    return next(); 
});

router.get('/', function (req, res) {
    res.json({ message: 'welcome to the api!' });
    console.log(`Added One Record On the Database [${grade.name}]`);
});

router.route('/grades')
    .post((req, resp) => {
        var errors = [];
        console.log('posting data received');
        req.assert('name', 'name field is required').notEmpty();
        req.assert('course', 'course field is required').notEmpty();
        req.assert('grade', 'grade field is required').notEmpty();
        var errors = req.validationErrors();
        if (errors) resp.json({ message: errors });
        else {
            var name = req.body.name;
            var course = req.body.course;
            var grade = req.body.grade;
            var gradeInstance = new Grade(id, name, course, grade);
            id++;
            gradesDB.push(gradeInstance);
            resp.json({ message: 'grade created successfully!' });
        }

    })
    .get((req, resp) => {
        console.log('size: ' + gradesDB.length);
        if (gradesDB.length == 0)
            resp.send(new Error());
        resp.json(gradesDB);
    })
router.route('/grades/:grade_id')
    .get((req, resp) => {
        var id = req.params.grade_id;
        var name = req.body.name;
        var course = req.body.course;
        var gradeNew = req.body.grade;
        var grade;
        for (let g of gradesDB) {
            if (g.id == id) grade = g;
        }
        if (!grade) resp.send(new Error('No grade with such id'));
        resp.json(grade);
    })
    .put((req, resp) => {
        var id = req.params.grade_id;
        var grade;
        for (let g of gradesDB) {
            if (g.id == id) grade = g;
        }
        if (!grade) resp.send(new Error('No grade with such id'));
        grade.name = name;
        grade.course = course;
        grade.grade = gradeNew;
        resp.json({ message: 'grade updated successfully!' });
    })
    .delete((req, resp) => {
        var id = req.params.grade_id;
        var grade;
        for (let g of gradesDB) {
            if (g.id == id) grade = g;
        }
        if (!grade) resp.send(new Error('No grade with such id'));
        gradesDB.pop(grade);
        resp.json({ message: 'deleting done successfully' });
    });

app.use('/api', router);

app.listen(port, function () {
    console.log('Server Running on: ' + port);
    console.log('Loading Data...');
    var grade1 = new Grade('1', 'Feven', 'MWA', 'A');
    var grade2 = new Grade('2', 'Mahder', 'EA', 'A');
    var grade3 = new Grade('3', 'Tigist', 'ML', 'A');
    var grade4 = new Grade('4', 'Million', 'WAA', 'A');
    var grade5 = new Grade('5', 'Selam', 'MPP', 'A');
    gradesDB.push(grade1);
    gradesDB.push(grade2);
    gradesDB.push(grade3);
    gradesDB.push(grade4);
    gradesDB.push(grade5);
});
