<?php 
    $server_name = "176.126.165.65";
    $database_user = "user117554_erlan_akimov";
    $database_user_password = "user-pass";
    $database_name = "user117554_optom_tkani_kg";

    $connect = mysqli_connect($server_name, $database_user, $database_user_password, $database_name);
    if (mysqli_connect_errno()) {
        die("Ошибка подключения к базе данных: " . mysqli_connect_error());
    }
    mysqli_set_charset($connect, "utf8");
?>
