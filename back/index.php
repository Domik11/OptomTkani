<?php
    $server_name = "elmcreek.online";
    $database_user = "u1955600_user";
    $database_user_password = "user-pass";
    $database_name = "u1955600_Tkani";

    $connect = mysqli_connect($server_name, $database_user, $database_user_password, $database_name);

    if ($connect->connect_error) {
        die("Ошибка подключения к базе данных: " . $conn->connect_error);
    }
?>