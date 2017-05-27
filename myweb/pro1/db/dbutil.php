<?php
class dbutil
{
	public $db=false;
	function __construct()
	{
		$db_conn="mysql:host=localhost;dbname=myweb;";
		$this->db=new PDO($db_conn,"root","123123");
	}
	function queryForArray($sql)
	{
		$result=$this->db->query($sql);
		//不设置，同时显示列名序号;
		$result->setFetchMode(PDO::FETCH_ASSOC);//只出现列名;
		$result->setFetchMode(PDO::FETCH_NUM);//只显示序号;
		return $result->fetchAll();
	}
}



?>