
<?php

    $to = 's4pabarz@uni-trier.de';
    $betreff = 'Anfrage Ferienwohnung';
    // $from = htmlspecialchars($_POST['email']);

    $headers =  'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'From: Your name <info@address.com>' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    
    $firstname = htmlspecialchars($_POST['firstName']);
    $lastname = htmlspecialchars($_POST['lastName']);
    $email = htmlspecialchars($_POST['email']);
    $street = htmlspecialchars($_POST['street']);
    $plz = htmlspecialchars($_POST['plz']);
    $telefon = htmlspecialchars($_POST['telefon']);
    $startDate = htmlspecialchars($_POST['trip-start']);
    $endDate = htmlspecialchars($_POST['trip-end']);
    
    $erwachsene = htmlspecialchars($_POST['erwachsene']);
    $children = htmlspecialchars($_POST['children']);
    $comment = htmlspecialchars($_POST['comment']);
    
    $content = "Vorname: " . $firstname . 
             "<br>Nachname: " . $lastname .
             "<br>E-Mail: " . $email .
             "<br>Straße: " . $street .
             "<br>Ort: " . $plz .
             "<br>Von: " . $startDate .
             "<br>Bis: " . $endDate .
             "<br>Erwachsene: " . $erwachsene .
             "<br>Kinder: " . $children .
             "<br>comment: " . $comment;

    echo $content;

    
    mail($to, $betreff, $content);
   
    // echo $firstname . "\n";
   
?>
    




