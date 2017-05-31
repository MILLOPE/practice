<?php include("header.php");?>
<div class="login">
    <p class="title"><?php echo $title ?></p>
    <form method="post">

        <div>用户名：</div>
        <div><input type="text" name="userName"/></div>
        <div>密&nbsp;&nbsp;码：</div>
        <div><input type="password" name="userPass"/></div>

        <div><input type="submit" value="注册"/></div>
    </form>
</div>
<?php include("footer.php");?>