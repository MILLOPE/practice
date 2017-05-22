<?php include("header.php");?>
<div class="login" method="get">
    <p class="title"><?php echo $title ?></p>
    <form action="/index.php?m=user">
        <div><input type="hidden" name="m" value="user"/></div>

        <div>用户名：</div>
        <div><input type="text" name="userName"/></div>
        <div>密&nbsp;&nbsp;码：</div>
        <div><input type="password" name="userPass"/></div>

        <div><input type="submit" value="登录"/></div>
    </form>
</div>
<?php include("footer.php");?>