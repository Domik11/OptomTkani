<?php 
    require_once('database');

    function checkToken() {
        $token = $_POST['token'];
        $secretKey = "7s&gH#9@p2z$5tW!";
        list($encodedHeader, $encodedPayload, $encodedSignature) = explode('.', $token);
        
        $header = [
            "alg" => "HS256",
            "typ" => "JWT"
        ];
        $payload = json_decode(base64UrlDecode($encodedPayload), true);
        
        $signature = base64UrlDecode($encodedSignature);
        
        $expectedSignature = hash_hmac('sha256', $encodedHeader . '.' . $encodedPayload, $secretKey, true);
        
        if ($signature === $expectedSignature) {
            $user_id = $payload['sub'];
        };

        return $user_id;
    }

    print $user_id;
?>