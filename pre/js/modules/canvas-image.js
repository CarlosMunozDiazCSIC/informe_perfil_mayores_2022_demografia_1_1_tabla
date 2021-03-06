import html2canvas from 'html2canvas';
let innerCanvas;

function setChartCanvas() {
    html2canvas(document.querySelector("#chartBlock"), {width: 842, height: document.querySelector("#chartBlock").clientHeight, imageTimeout: 3000, useCORS: true}).then(canvas => { innerCanvas = canvas; });
}

function setChartCanvasImage(title) {    
    var image = innerCanvas.toDataURL();
    // Create a link
    var aDownloadLink = document.createElement('a');
    // Add the name of the file to the link
    aDownloadLink.download = title+'_informe_2022_perfil_mayores.png';
    // Attach the data to the link
    aDownloadLink.href = image;
    // Get the code to click the download link
    aDownloadLink.click();
}

export { setChartCanvas, setChartCanvasImage };