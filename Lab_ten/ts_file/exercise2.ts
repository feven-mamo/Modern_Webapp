class BaseObject{
    width: number;
    height: number;
}

class Rectangle extends BaseObject{
    constructor(width: number = 0, height: number = 0){
        super();
        this.width = width;
        this.height = height;
    }

    calSize(){
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(5, 2);
console.log(rectangle.calSize());