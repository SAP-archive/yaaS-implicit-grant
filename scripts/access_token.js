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
   var QueryString = function() {
   var query_string = {};
   var query = window.location.href;
   var vars = query.split("&");
   for (var i = 0; i < 1; i++) {
      var pair = vars[i].split("=");
         if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
            access_token = query_string[pair[0]];
            document.getElementById("token").innerHTML = access_token;
    }
 }
 return query_string;
}();
}
