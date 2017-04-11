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
    var prefix="【程序员在囧途】";
    var title = "新闻标题";
    this.display = function () {
        console.log("子类的方法display")
    };
    this.getTitle=()=>{
        return prefix+title;
    };
    this.setTitle=(newTitle)=>{
        //ajax
        title=newTitle;
    }

};
//SportsNews.extends(BaseNews);

var sn = new SportsNews();

var proxy = new Proxy(sn,{
    get(target, name)
    {
        if (name in target) {
            return target[name];
        }
        else {
            return "none";
        }
    },
    set(target, name, value)
    {
        if(name=="version") {
            console.log("不要胡搞")
        }
        return true;
    }
});
console.log(proxy.version);
console.log(proxy.age);
proxy.version=2;
