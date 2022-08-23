// // Se definen las variables que van a almacenar los datos del formulario de inicio de sesión y la "llave de cierre"
// let nameLogin = prompt("Ingresá tu nombre y apellido")
// let mailLogin = prompt("Ingresá tu correo electrónico")
// let dniLogin = Number(prompt("Ingresá tu DNI (solamente ingrese números y evite los puntos)"))
// let ageLogin = parseInt(prompt("Ingresá tu edad"))
// let intentos = false;

// // Funcion para el proceso que se ejecuta cuando el inicio de sesión es exitoso.
// function successfulLogin() {
//     alert("Felicitaciones " + nameLogin + ", ¡ingresaste correctamente!")
//     intentos = true;
// }

// // si todos los datos son ingresados correctamente y la edad ingresada es mayor de 17, se ejecuta la función de inicio de sesión exitoso
// if ((nameLogin && mailLogin && dniLogin && parseInt(ageLogin) > 17)) {
//     successfulLogin()
// }

// // mientras que nameLogin o mailLogin o dniLogin sean desigual a nulo o ageLogin menor o igual que 17 o intentos desigual a true
// // va a obtener un alert de error y se le va a volver a solicitar los datos en bucle.
// while (nameLogin == "" || mailLogin == "" || dniLogin == "" || ageLogin <= 17 || intentos == false) {
//     alert("Uno de los datos ingresados no es correcto o eres menor de edad. Vuelva a intentarlo");

//     nameLogin = prompt("Ingresá tu nombre y apellido")
//     mailLogin = prompt("Ingresá tu correo electrónico")
//     dniLogin = Number(prompt("Ingresá tu DNI (solamente ingrese números y evite los puntos)"))
//     ageLogin = parseInt(prompt("Ingresá tu edad"))

// }


// Incorporación de array y constructores de objetos

// Se define el constructor que será utilizado para los ensambles para que los mismos tengan la misma estructura
class Ensamble {
    constructor(procesador, gbRam, velocidadRam, hdd, ssd, grafica, fuenteCertificada, precio) {
        this.procesador = procesador;
        this.gbRam = gbRam;
        this.velocidadRam = velocidadRam;
        this.hdd = hdd;
        this.hdd = ssd;
        this.grafica = grafica;
        this.fuenteCertificada = fuenteCertificada;
        this.precio = Number(precio);
    }
}

// Se registran nuevos ensambles usando el constructor de objetos "Ensamble" definido arriba
const ensamble1 = new Ensamble("Ryzen 5 5600G", 16, "3200mhz", "1TB", "256GB", false, true, 90000)
const ensamble2 = new Ensamble("Athlon 3000G", 8, "3000mhz", "500GB", false, false, false, 60000)
const ensamble3 = new Ensamble("Intel Core i5-10400F", 16, "2666mhz", "1TB", "500GB", "RTX 2060", true, 120000)




// Se crea la constante que va a registrar a los clientes.
const clientesRegistrados = [
    { nombre: "Juan Ignacio", mail: "nachogarcia.1017@gmail.com", edad: 18, dni: 45992025 },
    { nombre: "Pedro Altamirano", mail: "pedro33@hotmail.com", edad: 25, dni: 39027651 },
    { nombre: "Maria Cuasimodo", mail: "mariacuasi44@yahoo.com.ar", edad: 34, dni: 27038741 },
    { nombre: "Federico Pederal", mail: "federicopederal.10@gmail.com", edad: 49, dni: 18932111 }
]


// // Se registra un nuevo cliente en el array clientesRegistrados pusheando los datos que el usuario ingresó en los prompt.
// clientesRegistrados.push({ nombre: nameLogin, mail: mailLogin, edad: ageLogin, dni: dniLogin })

// Se usa un bucle for...of para repasar toda la lista de clientes e imprimirlos mediante la consola
for (const repasarClientes of clientesRegistrados) {
    console.log(repasarClientes)
}



// Se usa el método .find para encontrar a un cliente registrado en la variable clientesRegistrados.
let busquedaClientesRegistrados = clientesRegistrados.find(busqueda => busqueda.dni === 27038741)
console.log(busquedaClientesRegistrados)

// Se usa el método .filter para filtrar a los clientes registrados en la variable clientesRegistrados que tengan booleano true en variasCompras
let filtroEdad = clientesRegistrados.filter(filtrar => filtrar.edad >= 30);
console.log(filtroEdad)



// Se crea la constante productosEnStock con el array que va a contener al mismo.
const productosEnStock = []

// Se carga el stock inicial para empezar a llevar un control
productosEnStock.push("Procesadores", "Rams DDR4", "SSD", "HDD", "Fuentes certificadas", "Graficas")

// Aumentan las ventas en gráficas y se acaba el stock, por lo tanto, se elimina "Graficas" del stock mediante uso de .pop
productosEnStock.pop()
console.log(productosEnStock)
