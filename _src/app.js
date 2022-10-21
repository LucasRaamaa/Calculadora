x = "0";
xi = 1;
coma = 0;
ni = 0;
op = "no";

window.onload = function (){
    //acciones tras cargar la pagina
    pantalla=document.getElementById("textoPantalla"); //elemento pantalla de salida
    document.onkeydown = teclado; // funcion teclado disponible
};


function numero (xx) {
    if (x=="0" || xi == 1){                 // inicializa un numero
        pantalla.innerHTML = xx;            // mostrar en pantalla
        x = xx;                             // guardar el numero
        if ( xx ==".") {                    // si escribimos una coma al principio
            pantalla.innerHTML="0.";        // escribimos 0.
            x=xx;                           // guarda el numero
            coma=1;                         // cambiar estado de la coma
        }
    }
    else {                                  // continuar escribiendo un numero
        if (xx == "." && coma == 0){            // si escribimos una coma descimal  
            pantalla.innerHTML += xx;
            x += xx;
            coma = 1;                         // cambiar el estado de la coma
        }
        // si intentamos escribir una segunda coma decimal no realiza ninguna accion
    else if (xx == "." && coma == 1){}
        // resto de casos : escribir un numero del 0 al 9
    else{
        pantalla.innerHTML += xx;             // añadimos y mostramos en pantalla
        x += xx;                              // añadimos y guardamos
    }
}
    xi = 0                                    // el numero esta iniciado y podemos ampliarlo
};

function operar(s) {
    igualar();                              // si hay opreaciones pendientes se realizan primero
    ni = x;
    op = s;
    xi = 1;
}

function igualar() {
    if (op == "no") {                       // no hay ninguna operacion pendiente
        pantalla.innerHTML = x;
    }
    else {
        sl = ni + op + x;
        sol = eval(sl);
        pantalla.innerHTML = sol; 
        x = sol;
        op = "no";
        xi = 1;
    }
}

function raizc() {
    x = Math.sqrt (x)                       // resolver raiz cuadrada
    pantalla.innerHTML = x;
    op = "no";
    xi = 1;
}

function porcent() {
    x = x/100;
    pantalla.innerHTML = x;
    igualar();
    xi = 1;
}

function opuest() {
    nx = Number(x);
    nx = nx;
    x = String (nx);
    pantalla.innerHTML = x;
}

function inve() {
    nx = Number(x);
    nx = (1/nx);
    x = String(nx);
    pantalla.innerHTML = x;
    xi = 1;
}

function retro() {
    cifras = x.length;
    br = x.substr (cifras-1, cifras)
    x = x.substr (0, cifras-1)
    if (x=="") {x="0";}
    if (br==".") {coma=0;}
    pantalla.innerHTML = x;
}

function borradoParcial() {
    pantalla.innerHTML = 0;
    x = 0;
    coma = 0;
}

function borradoTotal() {
    pantalla.innerHTML = 0;
    x = "0";
    coma = 0
    ni = 0
    op = "no"
}

// funcion de teclados keypads
function teclado (elEvento) {
    evento = elEvento || window.event;
    k = evento.keyCode;
    if (k > 47 && k < 58){
        p = k - 48;
        p = String(p);
        numero (p);
    }
    if (k > 95 && k < 106){
        p = k - 96;
        p = String(p);
        numero (p);    
    }
    if (k == 110 || k == 190) {numero(".")}
    if (k==106) {operar('*')}
    if (k==107) {operar('+')}
    if (k==109) {operar('-')}
    if (k==111) {operar('/')}
    if (k==32 || k==13) {igualar()}
    if (k==46) {borradoTotal()}
    if (k==8) {retro()}
    if (k==36) {borradoParcial()}
}