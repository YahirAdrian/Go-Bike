const nav = document.querySelector('.opciones');
const menu = document.querySelector('#burguer-icon');
const opciones_menu = document.querySelector('.opciones ul');
const desaparecer = menu.querySelector('.desaparecer');
const rotarAbajo = menu.querySelector('.rotar:last-child');
const rotarArriba = menu.querySelector('.rotar:first-child');
const elementos_menu = nav.querySelectorAll('li');
let menu_visible = false;


class Ubicaciones{
  constructor(){
    this.parque_benito_juarez = {lat: 20.51055605488755, lng: -86.94983113538515 };
    this.puerta_maya = {lat: 20.478582965831293, lng: -86.97274728615173}; 
    this.zona_sur = {lat: 20.38521211173672, lng: -86.87362812208484}; 
    this.unidad_deportiva_independencia = {lat: 20.4986271102173, lng:-86.94938425252685};
    this.cozumel = {lat:20.4156145 ,lng: -86.8431949};
  }
}

class AnimacionesMenu{
  cerrar(){
    desaparecer.style.animation = "desaparecerBarra 1s  ease-in-out 0s 1 reverse none";
    rotarAbajo.style.animation = "rotarAbajo 1s ease-in-out 0s 1 reverse none";
    rotarArriba.style.animation = "rotarArriba 1s ease-in-out 0s 1 reverse none";
    opciones_menu.style.animation = "bajarMenu 0.8s linear 0s 1 reverse none";

    setTimeout(()=>{
      rotarArriba.style="transform: rotate(0deg) translate(0px, 0px);";
      rotarAbajo.style="transform: rotate(0deg) translate(0px, 0px);";
      desaparecer.style="transform: translateX(0px);";
      opciones_menu.classList.remove('menu-completo');
    },1000)
    menu_visible = false;
  }
  
  abrir(){
    desaparecer.style.animation = "desaparecerBarra 1s  ease-in-out 0s 1 normal none";
    rotarAbajo.style.animation = "rotarAbajo 1s ease-in-out 0s 1 normal none";
    rotarArriba.style.animation = "rotarArriba 1s ease-in-out 0s 1 normal none";
    opciones_menu.style.animation = "bajarMenu 0.8s linear 0s 1 normal none";
    
    setTimeout(()=>{
      rotarArriba.style="transform: rotate(45deg) translate(40px, -40px);";
      rotarAbajo.style="transform: rotate(315deg) translate(-40px, 0px);";
      desaparecer.style="transform: translateX(110%);";
      opciones_menu.classList.add('menu-completo');
    }, 1000)
    //Mostrar y desplazar el menu
    menu_visible = true;
  }
}

const ubicaciones = new Ubicaciones();
const animacionesMenu = new AnimacionesMenu();


function initMap() {

    var map = new google.maps.Map(document.querySelector('#mapa'),{
      zoom: 11,
      center: ubicaciones.cozumel
    });

    new google.maps.Marker({
      position: ubicaciones.parque_benito_juarez,
      map: map
    });

    new google.maps.Marker({
        position: ubicaciones.puerta_maya,
        map: map
      });

    new google.maps.Marker({
    position: ubicaciones.unidad_deportiva_independencia,
    map: map
    });

    new google.maps.Marker({
    position: ubicaciones.zona_sur,
    map: map
    });
}


// Event Listeners
window.addEventListener('scroll', ()=>{
  if(window.scrollY >= 83){
    nav.style = "border: 1px solid #000;";
  }else{
    nav.style ="";
  }
})

elementos_menu.forEach((elemento)=>{
    elemento.addEventListener('click', ()=> {
      animacionesMenu.cerrar();
    })
});

menu.addEventListener('click', ()=>{

  if(!menu_visible){
    animacionesMenu.abrir();
  }else{
    animacionesMenu.cerrar();

  }
})