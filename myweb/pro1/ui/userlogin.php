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
    	<div class="login" method="get">
    	    <p class="title"><?php echo $title?></p>
    	    <form action="/index.php?m=user">
    	        <div><input type="hidden" name="m" value="user" /></div>
    	        
        	    <div>用户名：</div>
        	    <div><input type="text" name="userName" /></div>
        	    <div>密&nbsp;&nbsp;码：</div>
        	    <div><input type="password" name="userPass" /></div>
        	    
        	    <div><input type="submit" value="登录"/></div>
    	    </form>
    	</div>
    </body>
</html>