const numeroTurbinas = document.getElementById("numeroTurbinas");
const numeroPersonas = document.getElementById("numeroPersonas");
const litrosPorPersona = document.getElementById("litrosPorPersona");

const litrosTotalesDiv = document.getElementById("litrosTotales");
const flujoVolumetricoDiv = document.getElementById("flujoVolumetrico");
const velocidadDiv = document.getElementById("velocidad");

const potenciaFinalDiv = document.getElementById("potenciaFinal");



function calcular() {
    let nP = numeroPersonas.value;
    let nT = numeroTurbinas.value;
    let lPP = litrosPorPersona.value/1000;

    let litrosTotales = lPP*nP;
    let flujoVolumetrico = litrosTotales/60;
    let velocidad = (flujoVolumetrico*60)/0.004417864;

    litrosTotalesDiv.innerHTML = litrosTotales.toFixed(2);
    flujoVolumetricoDiv.innerHTML = flujoVolumetrico.toFixed(4);
    velocidadDiv.innerHTML = velocidad.toFixed(4);

    potenciaFinalDiv.innerHTML = ((nT*0.5*(velocidad**3)*0.00441*0.4766).toFixed(2)) + " W"

}