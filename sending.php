
<?php

    $to = 's4pabarz@uni-trier.de';
    $betreff = 'Anfrage Ferienwohnung';
    // $from = htmlspecialchars($_POST['email']);

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
             "\r\nNachname: " . $lastname .
             "\r\nE-Mail: " . $email .
             "\r\nStraße: " . $street .
             "\r\nOrt: " . $plz .
             "\r\nVon: " . $startDate .
             "\r\nBis: " . $endDate .
             "\r\nErwachsene: " . $erwachsene .
             "\r\nKinder: " . $children .
             "\r\ncomment: " . $comment;

    echo $content;

    
    // mail($to, $betreff, $content);
   
    // echo $firstname . "\n";
   
?>
    




