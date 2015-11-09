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

function myFunction() {

    var address = "https://api.yaas.io/hybris/oauth2/b1/";
    var endpoint = "authorize";
    var response_type = "token"; 
    var client_id = "<clientid>"; // replace <clientid> with Client ID of your application
    var scope = "hybris.category_create";

    window.open(address + endpoint + "?" + "response_type=" + response_type + "&client_id=" + client_id + "&scope=" + scope);
}
