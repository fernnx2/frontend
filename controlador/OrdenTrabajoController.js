import OrdenTrabajoResourceClient from '../resources/OrdenTrabajoResourceClient.js'

class OrdenTrabajoController {

    constructor(){}

    findEstadoSolicitud(idSolicitud){

        console.log("se inicio el proceso!");
        this.orc = new OrdenTrabajoResourceClient();
        this.orc.estadoSolicitud(idSolicitud).then(function(response){
            if(response.ok){
                console.log(response.json());
            }
            else{
                console.log("Error en la peticion");
            }
        });
    }
}
let o = new OrdenTrabajoController();
export default o.findEstadoSolicitud(2);