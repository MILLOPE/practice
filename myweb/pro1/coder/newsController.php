<?php
/**
 * 作者：李四
 * 类功能：处理新闻数据的获取
 */

//运行新闻的程序
function run()
{
    global $userisvip;
    if($userisvip)
        include("/pro1/ui/newslist_vip.php");
    else
        include("/pro1/ui/newslist.php");
}




?>