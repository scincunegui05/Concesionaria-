let concesionaria = require ("./funcionalidades")



let accion = process.argv[2]
let parametroUno = process.argv[3]  


switch (accion ) {

    case "listar":
     concesionaria.listadoAutos()
    break;

    case "buscar":  
      
        console.log (concesionaria.buscarAuto(parametroUno))
        break;
    
     case "vender":
         
         console.log(concesionaria.venderAuto(parametroUno))
    break;

    case "Ver Disponibles":
        console.log(concesionaria.autosParaLaVenta())
    break;

    case "Ver Vendidos":
        console.log (concesionaria.listaDeVentas())
    break;

    case "Ver Ventas":
        console.log(concesionaria.totalDeVentas())
    break

    case "Ver Posibles":
        let persona = {
            nombre: "Sami",
            capacidadDePagoEnCuotas: parseInt(process.argv[3]),
            capacidadDePagoTotal: parseInt(process.argv[4])
        }

        let mostrar = concesionaria.autosQuePuedeComprar(persona)
       
        console.log (mostrar)
    break
}