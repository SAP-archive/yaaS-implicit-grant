function myFunction() {

    var address = "https://api.yaas.io/hybris/oauth2/v2/";
    var endpoint = "authorize";
    var response_type = "token"; // token or token id_token
    var client_id = "YLGqGPmVpkre8aG3eXHEn6TZCMGez5Ol"; //client id of your application
    var scope = "seller+hybris.tenant%3D<projectid>";

    window.open(address + endpoint + "?" + "response_type=" + response_type + "&client_id=" + client_id + "&scope=" + scope);
}