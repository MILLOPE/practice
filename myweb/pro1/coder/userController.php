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
        extract($this->getTplVars());
        //echo $_SERVER["REQUEST_URI"];
        
        include(Pro_RootPath."../ui/userlogin.php");
    }
	
	function reg()
	{
		if($_POST) 
		{
			$userName=$_POST["userName"];
			$userPass=$_POST["userPass"];
			if(!preg_match("/^[a-zA-z]\w{2,19}$/i", $userName))
				echo "用户名不符合规则";
			if(!preg_match("/^\w{3,20}$/i", $userPass))
				echo "密码不符合规则";
				
			$sql='insert into myuser(user_name,user_pass,user_regdate) '
			.' values(:user_name,:user_pass,now())';
			$paramSet=array('user_name'=>$userName,'user_pass'=>$userPass);
			
			$db=new dbutil();
			$db->queryForParam($sql,$paramSet);
			$getUserID=$db->db->lastInsertId();
			if($getUserID && trim($getUserID)!="")
				echo "用户注册成功，他的ID是:".$getUserID;
			else
				echo "用户注册失败";
		}
		
		$title = "用户注册";
		include(Pro_RootPath."../ui/userreg.php");
	}
	
	function login()
	{
		if($_COOKIE["UserInfo_UserName"] && trim($_COOKIE["UserInfo_UserName"])!="") {
            //如果用户已经登录，则不许用户进入登录界面;
            header("location:/news");
            exit();
        }
        
        $db=new dbutil();
        //$sql="select * from myuser where user_name='".$_POST["userName"]."'";
        //$ret=$db->queryForArray($sql);
        
        $sql="select * from myuser where user_name=:username";
        $setParam=array("username"=>$_POST["userName"]);
        $ret=$db->queryForParam($sql,$setParam);
        
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
        
        $title = "用户登录";
        include(Pro_RootPath."../ui/userlogin.php");
	}

    function getTplVars()
    {
    	return $this->_tpl_vars;
    }
}



?>