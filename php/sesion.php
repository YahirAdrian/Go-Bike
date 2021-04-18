<?php
session_start();
require('database_connection.php');
    if(isset($_POST["submit"])){
        //Recuperar los datos
        $usuario = $_POST["usuario"];
        $password = $_POST["password"];
        $renember = $_POST["renember"];

        $query = "SELECT id, usuario, pass FROM usuarios WHERE usuario = '$usuario'";
        $query_success = $connection->query($query);

        if($query_success){
            $result = $query_success->fetch_array();
            if(password_verify($password, $result[2]) && $usuario == $result[1]){
                $_SESSION['userkey'] = $result[0]; 
                if(isset($renember)){
                    setcookie('rkey', $result[0], time()+60*60*24*30, "/", "localhost");
                }

                header('location: ../go.php');
            }
        }


    }else{
        header('location: ../login.html');
    }
?>