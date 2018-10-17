class Vectors{
    x : number;
    y : number;
    constructor(x : number, y : number){
        this.x = x;
        this.y = y;
    }
test (callback : (list_of_num : number[]) => void) : void{
        callback([this.x, this.y])
    }
};

var a = new Vectors(1, 2)
a.test(function (list_of_number : number[]) : void {
    console.log(list_of_number[0], list_of_number[1])
})