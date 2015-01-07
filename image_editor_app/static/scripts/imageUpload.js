/// <reference path="../libs/jquery-1.10.2.js" />
function uploadFile() {
    var preview = document.getElementById('uploaded-image') //selects the query named img
    var file = document.getElementById('image-upload').files[0]; //sames as here
    var reader = new FileReader();

    var $uplImage = $('#uploaded-image');

    $uplImage.on('load', function () {
        //if(this.height())
        var $content = $('#content');
        var $self = $(this);
        $content.height($self.height() + 200);
    });

    reader.onloadend = function () {
        preview.style.maxWidth = "100%";
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
}
