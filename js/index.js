
jQuery(document).ready(function($) {
    var reCatchap = verificarReCaptcha();
    if (!reCatchap) {

        $('.alert-success').removeClass("show").addClass("hide");
        $('.alert-danger').removeClass("hide").addClass("show");

        return;
    }else{
        $('.alert-success').removeClass("hide").addClass("show");
        $('.alert-danger').removeClass("show").addClass("hide");

        return;
    }
});

function _init(){

}

function verificarReCaptcha()
{
    var response = grecaptcha.getResponse();

    if(response.length == 0){
        return false;
    } else {
        return true;
    }
}