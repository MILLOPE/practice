<?php include("header.php");?>
<div class="login">
    <p class="title"><?php echo $title ?></p>
    <form method="post">

        <div>用户名：</div>
        <div><input id="userName" type="text" name="userName"/></div>
        <div>密&nbsp;&nbsp;码：</div>
        <div><input id="userPass" type="password" name="userPass" id=/></div>

        <div><input type="submit" value="登录"/>
        	<input type="button" id="cmdlogin" value="无刷新登录"/>
        </div>
    </form>
</div>
<script>
	var userinfo={};
	$("#cmdlogin").click(function(){
		var userinfo = function() {
			this.userName=$("#userName").val();
			this.userPass=$("#userPass").val();
			this.ajax=1;
		}
		var u=new userinfo()
		$.post("/user/login",u,function(result){
			if(result=="登录成功") {
				self.location="/news";
			}
			else {
				$("#userName").val("");
				$("#userPass").val("");
				alert("用户名或密码错误");
			}
		});
	})
</script>
<?php include("footer.php");?>