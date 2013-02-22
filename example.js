$(document).ready(function() {

    $(".palette").palette();

    $("input.disablePalette").click(function() {
        if($(this).val() == "Disable") {
            $(".palette").data("disabled",true);
            $(this).attr("value","Activate");
        }
        else {
            $(".palette").data("disabled",false);
            $(this).attr("value","Disable");
        }
    });
});