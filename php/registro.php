<?php
    require('database_connection.php');
    
    if(isset($_POST['submit']) && isset($terminos) && isset($politicas)){
        $nombres = $_POST['nombre'];
        $apellidos = $_POST['apellido'];
        $correo = $_POST['correo'];
        $username = $_POST['usuario'];
        $passsword = $_POST['password'];
        $terminos = $_POST['terminos'];
        $politicas  = $_POST['politicas'];
        $passsword_hashed = password_hash($passsword, PASSWORD_DEFAULT);
        $query = "INSERT INTO usuarios (id, nombres, apellidos, correo, usuario, pass) VALUES (NULL, '$nombres', '$apellidos', '$correo', '$username', '$passsword_hashed');";
        
        if($connection->query($query)){
            header('location: ../login.html');
            echo "Funciono";
        }
    }else{
        header('location: ../registro.html');
    }
?>