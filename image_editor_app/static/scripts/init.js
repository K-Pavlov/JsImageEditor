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
});