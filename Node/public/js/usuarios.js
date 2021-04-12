// ----- LogIn --------------------
function login(){
    let user = document.getElementById("#inputUser").value();
    let pass = document.getElementById("#inputPass").value();
 
    $.getJSON("jsons/login.json", function(json) { 
     let arrayUsers = json;
 
 
    for (let i = 0; i<arrayUsers.length; i++){
     if(arrayUsers[i].nombre===user && arrayUsers[i].pass===pass){
         sessionStorage.setItem('usuario', JSON.stringify(arrayUsers[i]));
         console.log("Usuario logeado");
      }
      }
 
     if(!isLogged()){
         let arrayRegistrados=JSON.parse(sessionStorage.getItem('registrados'));
         for (let i = 0; i<arrayRegistrados.length; i++){
             if(arrayRegistrados[i].nombre===user && arrayRegistrados[i].pass===pass){
                 sessionStorage.setItem('usuario', JSON.stringify(arrayRegistrados[i]));
                 console.log("Usuario logeado");
              }
              }
     }
 
     });
 }
 
 function isLogged(){
     if (sessionStorage.getItem('usuario')==undefined){
         return false;
     }else {
         return true;
     }
 }

 // Register

 function registrarse() {
    let name = $("#inputUser").val();
    let pass = $("#inputPass").val();

    if(sessionStorage.getItem('registrados')==undefined){
        sessionStorage.setItem('registrados', JSON.stringify(new Array()));
    }

    let arrayRegistrados=JSON.parse(sessionStorage.getItem('registrados'));

    let user = new Object();
    user.nombre = name;
    user.pass = pass;

    arrayRegistrados.push(user);

    sessionStorage.setItem('registrados', JSON.stringify(arrayRegistrados));
 
}