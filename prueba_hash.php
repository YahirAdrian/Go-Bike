<?php
    $pass="password123";

    $pass_hashed = hash("sha256", $pass, false);

    echo $pass_hashed;

    echo password_verify('password123', $pass_hashed)
?>