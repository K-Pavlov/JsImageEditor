function imageToNegative(image) {
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

    var data = imagePixels.data;
    for (var i = 0; i < imagePixels.data.length - 4; i += 4) {
        data[i] = 255 - data[i]
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    }

    canvasContext.putImageData(imagePixels, 0, 0);
    return canvas.toDataURL();
}