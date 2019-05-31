<?php
//Takes a JSON encoded string and converts it into a PHP variable
$postdata = json_decode(file_get_contents("php://input"));
//Formats JSON in a human readable format
$request = json_encode($postdata, JSON_PRETTY_PRINT);
$file = fopen('/Users/kylelangford/www/email-template-app/prototype/dist/data/emails.json','w+');

// Add Check to See if file is writable
fwrite($file, $request);
fclose($file);
?>








