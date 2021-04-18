<?php
    session_start();
    if(!isset($_SESSION["userkey"])){
        if(isset($_COOKIE["rkey"])){
            $_SESSION["userkey"] = $_COOKIE["rkey"];
        }else{
            header('location: login.html');
        }
    }

    require('php/database_connection.php');

    $sql_query = "SELECT id, nombres, apellidos, correo, usuario FROM usuarios WHERE id = '" . $_SESSION["userkey"] . "'"; 
    $query_resullt = $connection->query($sql_query);
    if($query_resullt){
        $result = $query_resullt->fetch_array();
        $id = $result[0];
        $nombres = $result[1];
        $apellidos = $result[2];
        $correo = $result[3];
        $usuario = $result[4];
    }
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title><?php echo $nombres?> - Go Bike</title>
        <link rel="stylesheet" href="css/home.css"/>
        <link rel="stylesheet" href="css/cabecera.css"/>

        <link rel="shortcut icon" href="src/logo.jpeg" type="image/x-icon">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans&display=swap" rel="stylesheet">
    </head>

    <body>
        <header>
            <div class="brand">
                <img src="src/logo.jpeg" alt="Go Bike logo"/>
                <span id="logo">Go Bike</span>
            </div>

            <nav>
                <div id="saldo" class="icon">
                    <img src="src/icons/monedas.png" alt="saldo"/>
                    <span class="info-icon">Saldo: $0</span>
                </div>
                
                <div id="suscripciones" class="icon">
                    <img src="src/icons/suscripciones.png" alt="suscripciones"/>
                    <span class="info-icon">Suscripciones</span>
                </div>

                <div id="usuario" class="icon">
                    <img src="src/icons/usuario.png" alt="icono usuario"/>
                    <span class="info-icon">Nombre de usuario</span>
                </div>
            </nav>
        </header>
        
        <section>
            <aside>
                <div id="banner-cuenta">
                    <span id="una-letra">U</span>
                    <img src="src/images/afternoon.jpg" alt="fondo"/>
                </div>
            </aside>

            <div class="planes-activos">

            </div>
            <article id="tarifas">
                <div class="galeria-servicios">
                    <div id="caja-servicios">

                        <div class="servicio" id="servicio1">
                            <span class="nombre-servicio">1 - 45 <br> minutos</span>
                            <p class="descripcion-servicio">Puedes hacer uso de una bicicleta durante 1 minuto hasta 45 minutos </p>
                            <span class="precio">$10.<span class="centavos">00</span> <span class="moneda">MXN</span></span>
                        </div>
    
                        <div class="servicio" id="servicio2">
                            <span class="nombre-servicio">46 - 60 <br> minutos</span>
                            <p class="descripcion-servicio">Puedes hacer uso de una bicicleta durante 46 minutos  hasta 1 hora.</p>
                            <span class="precio">$13.<span class="centavos">00</span> <span class="moneda">MXN</span></span>
                        </div>
    
                        <div class="servicio" id="servicio3">
                            <span class="nombre-servicio">61 minutos <br> En adelante  <br>(Hora adicional)</span>
                            <p class="descripcion-servicio">Puedes hacer uso de una bicicleta por más de una hora. Después de 1 hora se cobrara una tarifa adicional de $45.00 MXN por cada hora extra.</p>
                            <span class="precio">$45.<span class="centavos">00</span> <span class="moneda">MXN</span></span>
                        </div>
    
                        <div class="servicio" id="servicio4">
                            <span class="nombre-servicio">Más de 24 horas</span>
                            <p class="descripcion-servicio">Puedes hacer uso de una bicicleta durante este tiempo. Después de usar por más de 24 horas se cobrará esta tarifa.</p>
                            <span class="precio">$6,220.<span class="centavos">00</span> <span class="moneda">MXN</span></span>
                        </div>
                    </div>
            </article>

            <article id="planes">

            </article>
        </section>


        <footer>

        </footer>
    </body>
</html>