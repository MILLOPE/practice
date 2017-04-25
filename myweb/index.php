<?php
    //1、首先加载程序员的程序
    
    $get_M=$_GET["m"];
    
    $mFile="pro1/coder/".$get_M."Controller.php";
    require($mFile);
    
    //2、加载DBA的程序
    
    $userisvip=true; //临时变量
    
    //3、加载UI做的页面
    /*if($get_M=="user") 
        include("pro1/ui/userlogin.php");
    else 
    {
        if($userissvip)
            include("pro1/ui/newslsit_vip.php");
        else
            include("pro1/ui/newslsit.php");
    }*/
    run();
        
?>