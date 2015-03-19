$(document).ready(function(){
    $("#two_get").click(function(){
        jQuery.ajax( {
            url: 'https://api.yaas.io/product/v3/tutorialinjs/products',
            type: 'GET',
            dataType: "html",
            beforeSend : function( xhr ) {
                var id = "Bearer " + $('#token').html();
                xhr.setRequestHeader( "Authorization", id);
            },
            success: function( body  ) {
                $('#get_response').html(body);
            }
        } );
    });
});