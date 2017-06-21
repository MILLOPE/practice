<?php
/**
 * 作者：李四
 * 类功能：处理新闻数据的获取
 */
class newsController extends phpBoss
{
	var $_tpl_vars=array("title"=>"新闻列表");
    //运行新闻的程序
    function run()
    {
        global $userisvip;
        
        $db=new dbutil();

        //$newslist=$db->queryForArray("select * from news order by id desc limit 0,10;");
		//$userlist=$db->queryForArray("select * from myuser order by id desc;");

        //var_export($newslist);
		
		$result=$db->queryForArray("select * from news order by id desc limit 0,10;select * from myuser order by id desc;");
		
		$this->_tpl_vars["newslist"]=$result[0];
		$this->_tpl_vars["userlist"]=$result[1];
		
    	extract($this->getTplVars());
		
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