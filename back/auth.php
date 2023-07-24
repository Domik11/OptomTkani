<?php
    require_once('functions.php');
    require_once('database.php');

    if ($connect) {
        
        $jsonData = file_get_contents('php://input');
        $formData = json_decode($jsonData, true);

        $password = mysqli_real_escape_string($connect, $formData['password']);
        $phone = mysqli_real_escape_string($connect, $formData['phone_number']);

        $query = "SELECT * FROM users WHERE user_phone = '$phone'";
        $result = mysqli_query($connect, $query);

        if (mysqli_num_rows($result) > 0) {
            $user = mysqli_fetch_assoc($result);
            $storedPasswordHash = $user['user_password'];

            if (password_verify($password, $storedPasswordHash)) {

                $jwt = jwt_token_generator($user['id'], $phone);

                $data = array(
                    'feedback' => "succes",
                    'token' => $jwt,
                    'user_data' => $user,
                );
                echo json_encode($data);
            } else {
                echo "Пароль неверный";
            }
        } else {
            echo "user_404";
        }
        mysqli_close($connect);
    }

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
?>
