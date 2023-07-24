<?php 
    require_once('database.php');
    require_once('functions.php');

    if ($connect) {
        $jsonData = file_get_contents('php://input');
        $formData = json_decode($jsonData, true);

        $shop_name = mysqli_real_escape_string($connect, $formData['shopname']);
        $shop_desc = mysqli_real_escape_string($connect, $formData['description']);
        $user_name = mysqli_real_escape_string($connect, $formData['sellername']);
        $user_phone = mysqli_real_escape_string($connect, $formData['shopNumber']);
        $shop_address = mysqli_real_escape_string($connect, $formData['shopAddress']);
        
        
        $token = mysqli_real_escape_string($connect, $formData['token']);
        $secretKey = "7s&gH#9@p2z$5tW!";
        list($encodedHeader, $encodedPayload, $encodedSignature) = explode('.', $token);
        $header = [
            "alg" => "HS256",
            "typ" => "JWT"
        ];
        $payload = json_decode(base64UrlDecode($encodedPayload), true);
        $signature = base64UrlDecode($encodedSignature);
        $expectedSignature = hash_hmac('sha256', $encodedHeader . '.' . $encodedPayload, $secretKey, true);
        $tokenIsValid = hash_equals($signature, $expectedSignature);
        if (!$tokenIsValid) {
            echo 'Ошибка проверки токена, выйдите из аккаунта и авторизуйтесь снова';
            exit();
        }

        $user_id = $payload['sub'];  

        $phone_check_sql_query = "SELECT id FROM users WHERE user_phone = ?";
        $stmt = mysqli_prepare($connect, $phone_check_sql_query);
        
        if ($stmt) {
            mysqli_stmt_bind_param($stmt, 's', $user_phone);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_bind_result($stmt, $phone_user_id);
        
            if (mysqli_stmt_fetch($stmt)) {
                if ($phone_user_id != $user_id) {
                    exit("номер уже используется");
                }
            }
            mysqli_stmt_close($stmt);
        } else {
            echo "Ошибка в подготовленном запросе: " . mysqli_error($connect);
        }
        $new_role = 'seller';
        $updateShopQuery = "UPDATE users
                            SET shop_name = ?,
                                shop_desc = ?,
                                user_name = ?,
                                user_phone = ?,
                                user_role = ?,
                                shop_address = ?
                            WHERE id = ?";
        $stmt = mysqli_prepare($connect, $updateShopQuery);

        if ($stmt) {
            mysqli_stmt_bind_param($stmt, 'ssssssi', $shop_name, $shop_desc, $user_name, $user_phone, $new_role,$shop_address, $user_id);
            $result = mysqli_stmt_execute($stmt);
            if ($result) {
                $get_new_user_data = "SELECT * FROM users WHERE id = $user_id";
                $result = mysqli_query($connect, $get_new_user_data);
                $user = mysqli_fetch_assoc($result);
    
                $jwt = jwt_token_generator($user_id, $user_phone);

                $data = array(
                    'feedback' => 'all good',
                    'user_data' => $user,
                    'token' => $jwt,
                );
                echo json_encode($data);

            } else {
                echo "что-то пошло не так" . mysqli_error($connect);
                mysqli_stmt_close($stmt);
            }
        } else {
            echo "Ошибка в подготовленном запросе: " . mysqli_error($connect);
        }   
    };

                /**
     * Функция для URL-безопасного кодирования строки в формате Base64
     * @param string $data Строка для кодирования
     * @return string Закодированная строка
     */
    function base64UrlEncode($data)
    {
        $base64 = base64_encode($data);
        $base64Url = strtr($base64, '+/', '-_');
        return rtrim($base64Url, '=');
    }

    function base64UrlDecode($data)
{
    $base64 = strtr($data, '-_', '+/');
    $decodedData = base64_decode($base64);
    return $decodedData;
}
?>