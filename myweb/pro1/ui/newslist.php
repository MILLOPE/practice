<?php include("header.php");?>
<dl>
    <dt>普通用户看到的新闻列表</dt>
    <?php foreach($newslist as $news):?>
    	<dd><a href="#"><?php echo $news["news_title"]?></a></dd>
    <?php endforeach;?>
</dl>

<dl>
	<dt>用户列表</dt>
	<?php foreach($userlist as $user):?>
    	<dd><a href="#"><?php echo $user["user_name"]?></a></dd>
	<?php endforeach;?>
</dl>
<?php include("footer.php");?>
