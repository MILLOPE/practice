<html>
    <head>
        <title><?php echo $title?> | 网站名称 | jtthink</title>
        <meta http-equiv="content-type" content="text/html;charset=utf-8">
        <style>
            .login{width:600px;border:solid 1px gray;text-align:center;margin:80px auto;background: #ececec}
            .login .title{font-weight:bold;color:#666;}
        </style>
    </head>
<body>
    <div style="border-bottom: 1px solid gray;line-height: 21pt;background: #ececec">
        <?php echo WebSiteName;?>
        	<?php if(!$this->_isinner) echo " && 旗下BB网" ?>
        <a href="/news">主站新闻</a> |
        <a href="/bbnews">bb网新闻</a> |
        <a href="/user">用户登录</a> | 
        <?php 
        
        if($_COOKIE["UserInfo_UserName"]) {
        	$get_user=unserialize(myDecrypt(Crypt_MyKey, $_COOKIE["UserInfo_UserName"]));
        	echo $get_user->user_name."已经登录，他的ID是".$get_user->id;
        }
		else {
			echo "游客状态";
		}
        
        ?>
    </div>
