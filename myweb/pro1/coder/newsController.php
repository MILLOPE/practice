<?php
/**
 * 作者：李四
 * 类功能：处理新闻数据的获取
 */
class newsController
{
	var $_tpl_vars=array("title"=>"新闻列表");
    //运行新闻的程序
    function run()
    {
    	extract($this->getTplVars());
        global $userisvip;
        if($userisvip)
            include("/pro1/ui/newslist_vip.php");
        else
            include("/pro1/ui/newslist.php");
    }
    function getTplVars()
    {
    	return $this->_tpl_vars;
    }
}




?>