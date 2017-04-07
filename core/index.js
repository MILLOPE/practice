var baseNews = function () {
    this.name='xiawei';
};

function first () {
    baseNews.call(this);
    this.age=18;
    console.log(this);
}

function second () {
    first.call(this);
}

//var me = new first();
var me2 = new second();


console.log(me2.name);
console.log(me2.age);


