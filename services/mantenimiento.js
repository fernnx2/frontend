
import e from '../controlador/EstadoDetalleMantenimientoController.js';

var mantenimiento = angular.module('mantenimiento',[]);
mantenimiento.controller('data', function($scope){
    $scope.datos = [{"fechaInicio":"23132","responsable":"tsdf","tipo":"ds","fechaFin":"sds"},{"fechaInicio":"23132","responsable":"tsdf","tipo":"ds","fechaFin":"sds"}];
    $scope.rest;
    let mantenimietosTerminados = e.findMantenimientosNoTerminados();
    mantenimietosTerminados.then(function(response){
        $scope.$apply(function(){
            $scope.rest = response;
            console.log(response);
        });
    });
    
});