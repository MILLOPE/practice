<?php
/**
 * 作者：项目经理
 * 类功能：所有程序员的基类
 */
abstract class phpBoss
{
    var $_tpl_vars=array("title"=>"没有找到该页面");
    //运行新闻的程序
    abstract function run();
    /*{
        extract($this->getTplVars());
        include("/pro1/ui/404.php");
    }*/
    function getTplVars()
    {
        return $this->_tpl_vars;
    }
}