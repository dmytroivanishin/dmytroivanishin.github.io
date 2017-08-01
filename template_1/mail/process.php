<?php
$to = "ivdim4ik95@gmail.com";
$thememessage = "Order";

$name = $_POST["name"];
$email = $_POST["email"];
$text = $_POST["message"];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$text = htmlspecialchars($text);

$name = @mysql_escape_string($name);
$email = @mysql_escape_string($email);
$text = @mysql_escape_string($text);

$message = "
<!DOCTYPE html PUBLIC '-//W3C//DTD HTML 4.0 Transitional//EN' 'http://www.w3.org/TR/REC-html40/loose.dtd'>
<html>
<head>
<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>
<meta charset='utf-8'>
</head>
<body style='background: #5f5f5f; margin: 0; padding: 0;' bgcolor='#5f5f5f'>
	<div class='container' style='padding: 20px 0px;'>
		<div class='emailHeader' style='max-width: 600px; height: auto; background: #fff; margin: 0px auto;'>
            <div class='emailLine' style='max-width: 600px; height: 15px; background: #fd6246;'></div>
            <div class='emailContent' style='background: #fff;'>
                <div class='header' style='text-align: center;' align='center'>
                    <h2 style='text-align: center; color: #5f5f5f; display: inline-block; border-bottom-width: 1px; border-bottom-color: #5f5f5f; border-bottom-style: solid; font: 30px sans, serif;' align='center'>Alexey Petrov, your new message!</h2>
                </div>
                <div class='message' style='color: #5f5f5f; padding: 30px 20px; font: 24px sans, serif;'>
                    <p style='text-align: left; color: #5f5f5f; font: 24px sans, serif;' align='left'><span style='font-weight: bold;'>From:</span> " . $name . "</p>
                    <p style='text-align: left; color: #5f5f5f; font: 24px sans, serif;' align='left'><span style='font-weight: bold;'>E-mail:</span> " . $email . "</p>
                    <p style='text-align: left; color: #5f5f5f; font: 24px sans, serif;' align='left'><span style='font-weight: bold;'>Message:</span> " . $text . "</p>
                </div>
            </div>
    </div>
	</div>
	
   
</body>
</html>
";

$headers = "Content-type: text/html; charset=utf-8";

$mailResult = mail($to, $thememessage, $message, $headers);

if($mailResult){
    echo 0;
}
else{
    echo 1;
}
?>