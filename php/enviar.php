<?php
if(isset($_POST['ENVIAR'])){
    if(!empty($_POST['name']) && !empty($_POST['mail']) && !empty($_POST['BornDate']) && !empty($_POST['message']) 
    && !empty($_POST['gender']) && !empty($_POST['academico']) &&  !empty($_POST['range'])){
        $name = $_POST['name'];
        $mail = $_POST['mail'];
        $BornDate = $_POST['BornDate'];
        $message = $_POST['message'];
        $age = $_POST['age'];
        $gender = $_POST['gender'];
        $AcademicGrade = $_POST['academico'];
        $range = $_POST['range'];

        $header = 'From: ' . $mail . " \r\n";
        $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
        $header .= "Mime-Version: 1.0 \r\n";
        $header .= "Content-Type: text/plain";

        $para = 'proyectoUTN2021.ISW502@gmail.com';
        $asunto = 'Contacto desde página Biblioteca del Rock y Metal';
        
        $message = "Este mensaje fue enviado por: " . $name . " \r\n";
        $message .= "Su e-mail es: " . $mail . " \r\n";
        $message .= "Su género es " . $gender . " \r\n";
        $message .= "Nació el: " . $BornDate . "y tiene ".$age." años.\r\n";
        $message .= "Su formación academica incluye " . $AcademicGrade . ". \r\n";
        $message .= "Su rango de ingresos economicos es: " . $range . " \r\n";
        $message .= "Mensaje: " . $_POST['message'] . " \r\n";
        $message .= "Enviado el: " . date('d/m/Y', time());

        $mail = mail($para, $asunto, utf8_decode($message), $header);
        if($mail){
            echo "<h4>Mensaje enviado</h4>"
        }
    }
} else echo "<h4>Ha ocurrido un error, por favor verifique la integridad de los datos</h4>"
?>