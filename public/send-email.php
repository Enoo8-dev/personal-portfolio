<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Carica la configurazione
$config = require 'config.php';

// --- CONFIGURAZIONE SMTP ARUBA ---
$smtp_host = $config['smtp_host'];
$smtp_port = $config['smtp_port']; 
$smtp_user = $config['smtp_user'];
$smtp_pass = $config['smtp_pass'];
$to_email  = $config['to_email'];
$captcha_site = $config['captcha_site'];
// ---------------------------------

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Sanitizzazione Input
    $name = strip_tags(trim($_POST["name"] ?? ''));
    $email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"] ?? ''));

    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(["message" => "Compila tutti i campi."]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Impostazioni Server
        $mail->isSMTP();
        $mail->Host       = $smtp_host;
        $mail->SMTPAuth   = true;
        $mail->Username   = $smtp_user;
        $mail->Password   = $smtp_pass;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = $smtp_port;
        $mail->CharSet    = 'UTF-8';

        // Mittenti e Destinatari
        $mail->setFrom($smtp_user, 'Portfolio Contact Form');
        $mail->addAddress($to_email);     
        $mail->addReplyTo($email, $name);

        // Contenuto
        $mail->isHTML(true);
        $mail->Subject = "Nuovo messaggio dal portfolio da: $name";
        $mail->Body    = "
            <div style='font-family: Arial, sans-serif; line-height: 1.6;'>
                <h3>Hai ricevuto un nuovo messaggio!</h3>
                <p><strong>Nome:</strong> $name</p>
                <p><strong>Email:</strong> <a href='mailto:$email'>$email</a></p>
                <hr>
                <p><strong>Messaggio:</strong></p>
                <p>" . nl2br($message) . "</p>
            </div>
        ";
        $mail->AltBody = "Nome: $name\nEmail: $email\n\nMessaggio:\n$message";

        $mail->send();
        http_response_code(200);
        echo json_encode(["message" => "Email inviata con successo!"]);

    } catch (Exception $e) {
        // Log dell'errore (opzionale) e risposta JSON
        http_response_code(500);
        echo json_encode(["message" => "Errore nell'invio: " . $mail->ErrorInfo]);
    }

} else {
    http_response_code(403);
    echo json_encode(["message" => "Metodo non consentito."]);
}
?>
