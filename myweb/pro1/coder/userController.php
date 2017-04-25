<?php
/**
 * 作者：张三
 * 类功能：用户登录、注册其他个人修改等
 */
$title="用户登录";


//用户运行函数
function run()
{
    echo $_SERVER["REQUEST_URI"];
    include("/pro1/ui/userlogin.php");
}

?>