<?php
$server_name = "elmcreek.online";
$database_user = "u1955600_user";
$database_user_password = "user-pass";
$database_name = "u1955600_Tkani";

$connect = mysqli_connect($server_name, $database_user, $database_user_password, $database_name);

if ($connect->connect_error) {
    die("Ошибка подключения к базе данных: " . $connect->connect_error);
}
mysqli_set_charset($connect, "utf8");

// Функция для декодирования строки base64url
function base64UrlDecode($data) {
    return base64_decode(strtr($data, '-_', '+/'));
}

$token = $_POST['token'];

// Функция для проверки токена
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

    // Защищаем запрос, используя параметризованный запрос
    $sql = "SELECT * FROM Users WHERE user_id = ?";
    $stmt = mysqli_prepare($connect, $sql);
    mysqli_stmt_bind_param($stmt, "s", $user_id);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if ($result->num_rows > 0) {
        // Преобразуем результат в ассоциативный массив
        $row = $result->fetch_assoc();

        // Здесь вы можете выбрать нужные поля для возврата
        $sql_data = array(
            "user_name" => $row["user_name"],
            "user_phone" => $row["user_phone"],
            "user_address" => $row["user_address"],
            "user_reg_date" => $row["reg_date"],
            "user_role" => $row["user_role"],
            "user_avatar" => $row["avatar_link"],
            "shop_id" => $row["shop_id"],
        );

        // Возвращаем JSON строку с данными нового пользователя
        header('Content-Type: application/json');
        echo json_encode($sql_data);
    } else {
        // Если нет результатов, возвращаем пустой массив
        echo json_encode(array('oblom'));
    }

    mysqli_stmt_close($stmt);
} else {
    // Если токен недействителен, возвращаем ошибку
    echo "Invalid token";
}

mysqli_close($connect);
?>
