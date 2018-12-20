<?php
if( isset($_POST['fn']) && isset($_POST['ln'])  && isset($_POST['Email']) && isset($_POST['Message']) ){
    $fn = $_POST['fn']; // HINT: use preg_replace() to filter the data
    $ln = $_POST['ln'];
	$Email = $_POST['Email'];
	$Message = nl2br($_POST['Message']);
	$to = "tcbdev@yahoo.com";	
	$from = $Email;
	$subject = 'Contact Form Message';
	$message = '<b>Name:</b> '.$fn.' <br><b>Email:</b> '.$Email.' <p>'.$Message.'</p>';
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if( mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
}
?>