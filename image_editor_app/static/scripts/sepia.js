function imageToSepia(image) {
    var canvas = document.createElement('canvas'),
        canvasContext = canvas.getContext('2d'),
        imageWidth = image.width,
        imageHeight = image.height,
        imagePixels,
        inputRed,
        inputBlue,
        inputGreen;

    canvas.width = imageWidth;
    canvas.height = imageHeight;

    canvasContext.drawImage(image, 0, 0);
    imagePixels = canvasContext.getImageData(0, 0, imageWidth, imageHeight);

    var data = imagePixels.data;
    for (var i = 0; i < imagePixels.data.length - 4; i += 4) {
        inputRed = data[i];
        inputGreen = data[i + 1];
        inputBlue = data[i + 2];

        data[i] = (inputRed * .393) + (inputGreen * .769) + (inputBlue * .189);
        data[i + 1] = (inputRed * .349) + (inputGreen * .686) + (inputBlue * .168);
        data[i + 2] = (inputRed * .272) + (inputGreen * .534) + (inputBlue * .131);
    }

    canvasContext.putImageData(imagePixels, 0, 0);
    return canvas.toDataURL();
}