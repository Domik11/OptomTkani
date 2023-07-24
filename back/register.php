<?php 
require_once('database.php');
if ($connect) {
    $username = $_POST['username'];
    $phone = $_POST['phone_number'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $buyer = 'buyer';
    $currentdate = date('Y-m-d H:i:s');

    // Проверяем, что номер телефона не занят
    $check_phone_query = "SELECT COUNT(*) FROM users WHERE user_phone = ?";
    $stmt_check_phone = mysqli_prepare($connect, $check_phone_query);
    mysqli_stmt_bind_param($stmt_check_phone, "s", $phone);
    mysqli_stmt_execute($stmt_check_phone);
    mysqli_stmt_bind_result($stmt_check_phone, $phone_count);
    mysqli_stmt_fetch($stmt_check_phone);
    mysqli_stmt_close($stmt_check_phone);
    if ($phone_count > 0) {
        // Тогда номер уже есть в системе
        echo "номер уже используется";
        exit;
    }
    
    // Создаем нового пользователя
    $create_new_user = "INSERT INTO users (user_name, user_password, user_phone, reg_date, user_role)
    VALUES (?, ?, ?, ?, ?)";
    
    $stmt = mysqli_prepare($connect, $create_new_user);
    mysqli_stmt_bind_param($stmt, "sssss", $username, $password, $phone, $currentdate, $buyer);
    mysqli_stmt_execute($stmt);


    if (mysqli_stmt_affected_rows($stmt) > 0) {
        // Успешно выполнен запрос, теперь получаем данные нового пользователя
        $get_new_user_data = "SELECT * FROM users WHERE id = LAST_INSERT_ID()";

        $result = mysqli_query($connect, $get_new_user_data);
        $user = mysqli_fetch_assoc($result);

        $expirationTime = time() + (2 * 24 * 60 * 60);
        $secretKey = "7s&gH#9@p2z$5tW!";

        $header = [
            "alg" => "HS256",
            "typ" => "JWT"
        ];
        // Полезная нагрузка
        $payload = [
            "sub" => $user['id'],
            "phone" => $user['user_phone'],
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

        // Выводим данные нового пользователя в теле ответа
        header('Content-Type: application/json');
        $data = array(
            'feedback' => "succes",
            'user_data' => $user,
            'token' => $jwt,
        );
        echo json_encode($data);
    } else {
        // Возникла ошибка при выполнении запроса
        echo "error" . mysqli_stmt_error($stmt);
    }

    mysqli_stmt_close($stmt);
    mysqli_close($connect);
}


function base64UrlEncode($data)
{
    $base64 = base64_encode($data);
    $base64Url = strtr($base64, '+/', '-_');
    return rtrim($base64Url, '=');
}
?>
