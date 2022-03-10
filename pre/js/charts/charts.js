//import { getInTooltip, getOutTooltip, positionTooltip } from './modules/tooltip';
import { setChartHeight } from '../modules/height';
import { setChartCanvas, setChartCanvasImage, setCustomCanvas, setChartCustomCanvasImage } from '../modules/canvas-image';
import { setRRSSLinks } from '../modules/rrss';
import { setFixedIframeUrl } from './chart_helpers';

export function initChart(iframe) {
    /////
    /////
    // Resto
    /////
    /////

    //Iframe
    setFixedIframeUrl('tabla_poblacion_municipios');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('tabla_poblacion_municipios');

    //Captura de pantalla de la visualización
    setChartCanvas();
    setCustomCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('tabla_poblacion_municipios');
        setChartCustomCanvasImage('tabla_poblacion_municipios');
    });

    //Altura del frame
    setChartHeight(iframe);
}