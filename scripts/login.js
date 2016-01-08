/*
 * [y] SAP Hybris
 */

function login() {

    var address = "https://api.yaas.io/hybris/oauth2/v1/";
    var endpoint = "authorize";
    var response_type = "token";
    var client_id = "<clientid>"; // replace <clientid> with Client ID of your application

    window.open(address + endpoint + "?" + "response_type=" + response_type + "&client_id=" + client_id);

}
