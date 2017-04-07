var BaseNews = function bb ()
{
    if(this instanceof bb) {
        console.log("父类初始化");
    }
    this.display=function() {
        console.log('父类的方法display')
    }
};

Function.prototype.extends = function (base) {
    base.call(this.prototype);
    this.prototype.father = new base();
};
//////////////////////////////////////////////////////////////

var SportsNews = function () {
    this.version = "1.0";
    this.display = function () {
        console.log("子类的方法display")
    }
};
SportNews.extends(BaseNews);

var sn = new SportNews();
sn.father.display();
sn.display();
