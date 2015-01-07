/// <reference path="../libs/jquery-1.10.2.js" />
$(document).ready(function () {
    var $imageUpload = $('#image-upload');
    $imageUpload.change(function () {
        uploadFile();
        //var $uplImageDuv = $('#image-div');
        //$('#uploaded-image').ready(function () {
        //    setTimeout(function () {
        //        $('#content').height($uplImageDuv.height());
        //    }, 0);
        //});
    });

    var $grayScaleBtn = $('#gray-scale-btn');
    $grayScaleBtn.click(function () {
        var $imgUploaded = $('#uploaded-image');

        $imgUploaded.ready(function () {
            $imgUploaded.attr('src', imageToGrayScale($imgUploaded[0]));
        })
    });

    var $negativeBtn = $('#negative-btn');
    $negativeBtn.click(function () {
        var $imgUploaded = $('#uploaded-image');

        $imgUploaded.ready(function () {
            $imgUploaded.attr('src', imageToNegative($imgUploaded[0]));
        })
    });

    var $downloadButton = $('#donwload-button');
    $downloadButton.click(function () {
        var img = $('#uploaded-image'),
            image_data = atob(img[0].src.split(',')[1]),
            arraybuffer = new ArrayBuffer(image_data.length),
            view = new Uint8Array(arraybuffer);

        for (var i = 0; i < image_data.length; i++) {
            view[i] = image_data.charCodeAt(i) & 0xff;
        }

        try {
            var blob = new Blob([arraybuffer], { type: 'application/octet-stream' });
        } catch (e) {
            var bb = new (window.WebKitBlobBuilder || window.MozBlobBuilder);
            bb.append(arraybuffer);
            var blob = bb.getBlob('application/octet-stream'); // <-- Here's the Blob
        }

        saveAs(blob, img.attr('file-name'));
    });

    var $fileInput = $('#image-upload');

    $fileInput.change(function () {
        $this = $(this);
        $('#file').text($this.val());
    });

    $('#file').click(function () {
        $fileInput.click();
    }).show();
});