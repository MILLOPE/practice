<?php
/**
 * 作者：张三
 * 类功能：用户登录、注册其他个人修改等
 */
class userController extends phpBoss
{
    var $_tpl_vars=array("title"=>"用户登录");
    var $test_users = array("shenyi","zhangs","lisi");
    //用户运行函数
    function run()
    {
        if($_COOKIE["UserInfo_UserName"] && trim($_COOKIE["UserInfo_UserName"])!="") {
            //如果用户已经登录，则不许用户进入登录界面;
            header("location:/news");
            exit();
        }
        
        $db=new dbutil();
        $sql="select * from myuser where user_name='".$_POST["userName"]."'";
        $ret=$db->queryForArray($sql);
       	//var_export($ret);echo "<br>";
       	
       	if($ret && count($ret)==1) {
       		$ret=$ret[0];
       		if($ret["user_pass"]==$_POST["userPass"]) {
       			echo "登录成功";
       		}
       		else {
       			echo "密码错误";
       		}
       	}
       	else {
       		echo "没有该用户";
       	}
        
        
        /*if($_POST &&  $_POST["userName"]){
            if(in_array($_POST["userName"],$this->test_users)) {
                //echo "登录成功";
                setcookie("UserInfo_UserName",$_POST["userName"],time()+3600*1,"/");
                header("location:/news");
                exit();
            }
            else {
                echo "错误的用户名";
            }
        }*/

    	extract($this->getTplVars());
        //echo $_SERVER["REQUEST_URI"];
        include("/pro1/ui/userlogin.php");
    }
    function getTplVars()
    {
    	return $this->_tpl_vars;
    }
}



?>