(function () {

    var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

    Array.prototype.even = function () {
        setTimeout(() =>  {console.log( "Even: " + this.filter(value => (value % 2) == 0)) }, 200);        
    }
    Array.prototype.odd = function () {
        setTimeout(() => {console.log( "Odd: " + this.filter(value => (value % 2) != 0)) }, 300); 
    }
    console.log("Start");
    numbers.even();
    numbers.odd();
    console.log("End");
})();

