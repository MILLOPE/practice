<?php

	function myCrypt ($key,$str)
	{
		$iv=mcrypt_create_iv(mcrypt_get_iv_size(MCRYPT_DES, MCRYPT_MODE_ECB),MCRYPT_RAND);
		
		return mcrypt_encrypt(MCRYPT_DES, $key, $str, MCRYPT_MODE_ECB,$iv);
		
	}
	
	function myDecrypt ($key,$en_str)
	{
		$iv=mcrypt_create_iv(mcrypt_get_iv_size(MCRYPT_DES, MCRYPT_MODE_ECB),MCRYPT_RAND);
		
		return mcrypt_decrypt(MCRYPT_DES, $key, $en_str, MCRYPT_MODE_ECB,$iv);
	}
	
?>