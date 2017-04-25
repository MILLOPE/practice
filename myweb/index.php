<?php
    //1、首先加载程序员的程序
    $get_M=$_GET["m"];
    if($get_M=="user")
        require("pro1/coder/user.php");
    else if($get_M=="news")
        require("pro1/coder/news.php");
    
    //2、加载DBA的程序
    
    //3、加载UI做的页面
    if($get_M=="user") 
        include("pro1/ui/userlogin.php");
    else if($get_M=="news")
        include("pro1/ui/newslist.php");
    
    
?>