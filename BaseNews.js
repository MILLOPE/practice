/**
 * Created by xiawei on 2017/4/10.
 */
const a="default";
export default a;
export const BaseNews = function bb()
{
    if(this instanceof bb) {
        //console.log('父类初始化')
    }
    this.display = () => {
        console.log("父类的方法display");
    }
};

export const version = "1.0";
