<?php
    require '../PHPMailer/src/PHPMailer.php';
    require '../PHPMailer/src/SMTP.php';
    require '../PHPMailer/src/Exception.php';

function json_error($str){
    $json = array(
        'status' => 'ERROR',
        'error' => $str,
    );
    return json_encode($json);
}

function log_write($msg){
    $logfile = "../../logs/mail.log";
    $date = new DateTime();
    $date = $date->format("y:m:d h:i:s");
    file_put_contents($logfile,$msg);
}

    if (!$_POST) exit('No direct script access allowed');

    header('Content-Type: application/json');

   if (empty($_POST['name']) or empty($_POST['email']) or empty($_POST['phone'] or empty($_POST['phcode']))) {
	echo json_error('В запросе отсутствуют обязательные данные');
        exit();
   } 

    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->CharSet = 'UTF-8';
    
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPDebug = 0;
    
    $mail->Host = 'ssl://smtp.yandex.ru';
    $mail->Port = 465;
    $mail->Username = 'send@hofu.ru';
    $mail->Password = 'gpsqpsaetdaqbgsu';
    
    $mail->setFrom('send@hofu.ru', 'hofu.ru');		
    
    $mail->addAddress('send@hofu.ru');

    $mail->Subject = "Opt.mdi-toys.ru form message";

    $body = "Fullname: ".$_POST['name']."<br>";
    $body .= "E-mail: ".$_POST['email']."<br>";
    $body .= "Phone: ".$_POST['phcode'].$_POST['phone']."<br>";
    $body .= "Message: ".$_POST['message']."<br>";
    $body .= "Message time: ".$_POST['datetime']."<br><br><br>";
//    $body .= "utm_campaign: ".$_POST['utm_campaign']."<br>";
//    $body .= "gbid: ".$_POST['gbid']."<br>";
    $mail->msgHTML($body);
        
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    if ($mail->send()) {
	$json = array(
            'status' => 'OK',
            'error' => 'Данные успешно отправлены',
    	);
        echo json_encode($json);
    } 
    else {
	$error_data = $mail->ErrorInfo;
	log_write($error_data);
    }
?>
