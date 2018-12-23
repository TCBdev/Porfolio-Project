<?php
if( isset($_POST['submit']) // && isset($_POST['ln'])  && isset($_POST['Email']) && isset($_POST['Message']) ){
    $name = $_POST['firstName'] && $_POST['lastName']; // HINT: use preg_replace() to filter the data
    // $ln = $_POST['lastName'];
	$mailFrom = $_POST['Email'];
	$Message = $_POST['Message'];
	
	$mailTo = "tcbdev@yahoo.com";
	$headers = "From: ".$mailFrom;
	$txt = .$name." has sent an email from your website\n\n".$Message;

	mail($mailTo, $txt, $headers);
	header('Location: index.html?mailsend')
}
?>