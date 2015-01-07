/// <reference path="../libs/jquery-1.10.2.js" />
function imageToGrayScale(image) {
    var canvas = document.createElement('canvas'),
        canvasContext = canvas.getContext('2d'),
        imageWidth = image.width,
        imageHeight = image.height,
        imagePixels,
        luminocity;

    canvas.width = imageWidth;
    canvas.height = imageHeight;

    canvasContext.drawImage(image, 0, 0);
    imagePixels = canvasContext.getImageData(0, 0, imageWidth, imageHeight);
    console.log(imagePixels);
    var data = imagePixels.data;
    console.log(data[1][0]);
    for (var i = 0; i < imagePixels.data.length; i += 4) {
        luminocity = imagePixels.data[i] * 0.21 + imagePixels.data[i + 1] * 0.72 + imagePixels.data[i + 2] * 0.07;
        imagePixels.data[i] = luminocity;
        imagePixels.data[i + 1] = luminocity;
        imagePixels.data[i + 2] = luminocity;
    }

    canvasContext.putImageData(imagePixels, 0, 0);
    return canvas.toDataURL();
}