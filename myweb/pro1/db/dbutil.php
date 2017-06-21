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
		//$result->setFetchMode(PDO::FETCH_NUM);//只显示序号;
		//return $result->fetchAll();
		
		$result_set=array();
		do{
			$result_set[]=$result->fetchAll();
		}
		while($result->nextRowset());
		
		if(count($result_set)==1)
		{
			return $result_set[0];
		}
		else if(count($result_set)>1){
			return $result_set;
		}
		else
		{
			return array(0);
		}
	}
	function queryForParam($sql,$setParam) {
		$pre_result=$this->db->prepare($sql);
		//var_export($pre_result);
		
		foreach ($setParam as $key=>&$value)
		{
			//$pre_result->bindParam(":".$key,$setParam[$key]);
			$pre_result->bindParam(":".$key,$value);
		}
		
		//$pre_result->bindParam(":username",$username);	
		$pre_result->execute();
		
		$pre_result->setFetchMode(PDO::FETCH_ASSOC);
		return $pre_result->fetchAll();
	}
}



?>