<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $jsonInput = file_get_contents('php://input');
    $formData = json_decode($jsonInput, true);

    if (!$formData) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "No data received."]);
        exit;
    }

    // Your actual secret Web3Forms token goes here safely
    $formData['access_key'] = '7ad9491f-74c2-4199-8f2b-acc66677deaa';

    $ch = curl_init('https://api.web3forms.com/submit');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($formData));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json'
    ]);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);


    http_response_code($httpCode);
    echo $response;
} else {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed."]);
}
?>