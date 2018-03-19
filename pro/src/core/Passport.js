export default class Passport
{
    constructor()
    {
        this.islogin=false;//是否登录
    }
    ulogin(uname,upass,callback)
    {
        if(uname==="shenyi" && upass==="123")
        {
            this.islogin=true;
            setTimeout(callback,1000);
        }
        else
        {
            alert("登陆失败")
        }
    }

}
