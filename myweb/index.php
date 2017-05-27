<?php
    require("config.php");
    //0、加载项目经理做的代码
    require(Pro_RootPath."../leader.php");
    require(Pro_RootPath."phpBoss.php");
    require(Pro_RootPath."../db/dbutil.php");

    //1、首先加载程序员的程序
    $get_M=$_GET["m"];
    
    $mFile=Pro_RootPath.$get_M."Controller.php";
    require($mFile);
    
    //2、加载DBA的程序
    $userisvip=false; //临时变量
    
    //3、加载UI做的页面
    
    //必须实例化相应的类
    $className=$get_M."Controller";//类名
    $get_class=new $className();
    
    $get_class->run();
        
?>