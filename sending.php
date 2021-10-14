<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php

    $to = 's4pabarz@uni-trier.de';
    $betreff = 'Anfrage Ferienwohnung';
    $from = htmlspecialchars($_POST['email']);

    
    $firstname = htmlspecialchars($_POST['firstName']);
    $lastname = htmlspecialchars($_POST['lastName']);
    $street = htmlspecialchars($_POST['street']);
    $plz = htmlspecialchars($_POST['plz']);
    $telefon = htmlspecialchars($_POST['telefon']);
    $erwachsene = htmlspecialchars($_POST['erwachsene']);
    $children = htmlspecialchars($_POST['children']);
    $comment = htmlspecialchars($_POST['comment']);
    
    $content = "Vorname: " . $firstname . 
             "<br>Nachname: " . $lastname .
             "<br>Straße: " . $street .
             "<br>Ort: " . $plz .
             "<br>Erwachsene: " . $erwachsene .
             "<br>Kinder: " . $children .
             "<br>comment: " . $comment;

    echo $content;

    
    // mail($to, $betreff, $content, $from);
   
    // echo $firstname . "\n";
   
?>
    
</body>
</html>



