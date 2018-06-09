import AbstractResourceClient from './AbstractResourceClient.js';

class SolicitudResourceClient extends AbstractResourceClient {

    constructor(){
        super();
        this.url += "solicitud"; 
    }



}