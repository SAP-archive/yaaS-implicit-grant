/*
 * [y] SAP Hybris
 */

$(document).ready(function(){
    $("#one_post").click(function(){
        var obj = document.getElementById("post");
        var theName = obj.value;
        var x = JSON.parse(theName);
        console.log(theName);
        jQuery.ajax( {
            url: 'https://api.yaas.io/hybris/category/b1/<projectid>/categories', //replace <projectid> with the Identifier
            type: 'POST',
            data: JSON.stringify(x),
            contentType:"application/json",
            beforeSend : function( xhr ) {
                var id = "Bearer " + $('#token').html();
                xhr.setRequestHeader( "Authorization", id);
                xhr.setRequestHeader("Content-Type", "application/json");
            },
            success: function(response) {
                //alert("Success!" + response.id + response.link);
                $('#get_response').html("Success!" + "\nid: " + response.id + "\nlink: " + response.link);

            }
        } );
    });
});
