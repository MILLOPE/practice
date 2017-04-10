
var God = {
    version: "1.0",
    extends(name,obj) {
        this.init();
        if("data" in obj && "methods" in obj && typeof obj.data == "function" && typeof obj.methods=="object") {
            var getData = obj.data();
            if(typeof getData == "object") {
                Object.assign(obj.methods,getData,this);
                this[name]=obj;
            }
            for(var prop in this.news.methods) {
                this.watch(prop,this.news.methods,()=>{this.display(name)});
            }
        }
    },
    init() {
        Object.defineProperties(this,{
            init:{enumerable:false},
            extends:{enumerable:false}
         });
        var keys = Object.keys(this);
        this.$global = {};
        keys.forEach((key)=> {
            this.$global[key]=this[key];
        });
        //Object.freeze(this.$global);
        this.watch("version",this.$global);
    },
    watch(keyName,obj,func) {
        var _key = "_" + keyName;
        if(!(_key in obj)) {
            obj[_key] = obj[keyName];
        }
        Object.defineProperty(obj,keyName,{
            set:value=>{
                console.log('version属性被修改了');
                obj[_key] = value;
                //this.render();
                func();
            },
            get() {
                return obj[_key];
            }
        })
    },
    render(){
        document.getElementById('test').innerHTML = "现在是版本"+ this.$global.version;
    },
    display(objName){
        var getTpl=this[objName].template;
        for(var prop in this[objName].methods) {
            getTpl=getTpl.replace("{{"+prop+"}}",this[objName].methods[prop])
        }
        document.getElementById('test').innerHTML = getTpl;
    }
};
var news = {
    template:"<a href='/news/{{id}}'>{{title}}</a>",
    data() {
        return {
            id:101,
            title:"今天天气很不错"
        }
    },
    methods: {
        show() {
            console.log(this.$global.version);
            this.$global.version="3.0";
            console.log(this.$global.version);
            console.log(this.title)
        },
        changeProp() {
            this.title="周星驰电影美人鱼"
        }
    }
};
God.extends("news",news);
//God.news.methods.show();