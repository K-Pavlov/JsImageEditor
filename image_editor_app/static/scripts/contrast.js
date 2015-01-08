/// <reference path="../libs/jquery-1.10.2.js" />
function addContrastToImage(image) {
    var canvas = document.createElement('canvas'),
        canvasContext = canvas.getContext('2d'),
        imageWidth = image.width,
        imageHeight = image.height,
        imagePixels,
        luminocity,
        data;

    canvas.width = imageWidth;
    canvas.height = imageHeight;

    canvasContext.drawImage(image, 0, 0);
    imagePixels = canvasContext.getImageData(0, 0, imageWidth, imageHeight);
    data = imagePixels.data;

    for (var i = 0; i < imagePixels.data.length; i += 4) {
        var contrast = 10;
        var average = (data[i] + data[i + 1] + data[i + 2]) / 3;

        if (average < 127) {
            data[i] -= (data[i] / average) * contrast;
            data[i + 1] -= (data[i + 1] / average) * contrast;
            data[i + 2] -= (data[i + 2] / average) * contrast;
        } else {
            data[i] += (data[i] / average) * contrast;
            data[i + 1] += (data[i + 1] / average) * contrast;
            data[i + 2] += (data[i + 2] / average) * contrast;
        }
    }

    canvasContext.putImageData(imagePixels, 0, 0);
    return canvas.toDataURL();
}