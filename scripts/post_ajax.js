/*
 * [y] SAP Hybris
 */

$(document).ready(function(){
    $("#one_post").click(function(){
        jQuery.ajax( {
            url: 'https://api.yaas.io/hybris/product/v2/<projectid>/products', //replace <projectid> with the Identifier
            type: 'GET',
            contentType:"application/json",
            beforeSend : function( xhr ) {
                var id = "Bearer " + $('#token').html();
                xhr.setRequestHeader( "Authorization", id);
                xhr.setRequestHeader("Content-Type", "application/json");
            },
            success: function(response) {
                $('#get_response').html("Success!\n" + JSON.stringify(response,null,2));

            }
        } );
    });
});
