/*
 * [y] hybris Platform
 *
 * Copyright (c) 2000-2015 hybris AG
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of hybris
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with hybris.
 */

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
