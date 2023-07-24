<?php 
    function jwt_token_generator($user_id, $user_phone) {
        $expirationTime = time() + (2 * 24 * 60 * 60);
        $secretKey = "7s&gH#9@p2z$5tW!";
        $header = [
            "alg" => "HS256",
            "typ" => "JWT"
        ];
        $payload = [
            "sub" => $user_id,
            "phone" => $user_phone,
            "exp" => $expirationTime
        ];
        // Кодирование токена
        $encodedHeader = base64UrlEncode(json_encode($header));
        $encodedPayload = base64UrlEncode(json_encode($payload));

        // Формирование сигнатуры токена
        $signature = hash_hmac("sha256", $encodedHeader . "." . $encodedPayload, $secretKey, true);
        $encodedSignature = base64UrlEncode($signature);

        // Формирование и вывод JWT-токена
        $jwt = $encodedHeader . "." . $encodedPayload . "." . $encodedSignature;

        return $jwt;
    }

    function jwt_checker_token() {
        
    }

?> 