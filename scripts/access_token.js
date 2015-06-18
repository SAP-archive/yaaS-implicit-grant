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
 
window.onload = function token() {
        var x = window.location.toString();
        var array = [];
        array[0] = 0;
        array[1] = x.split("=");
        var access_token = array[1][1].substring(0, array[1][1].indexOf('&'));
        document.getElementById("token").innerHTML = access_token;
}
