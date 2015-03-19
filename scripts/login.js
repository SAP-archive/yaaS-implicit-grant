function myFunction() {

    var address = "https://api.yaas.io/oauth2/v1/";
    var endpoint = "authorize";
    var response_type = "token"; // token or token id_token
    var client_id = "qmwNbTvEZpGgRtSa5PTBF8HgIXym5Atd";
    var scope = "seller";

    window.open(address + endpoint + "?" + "response_type=" + response_type + "&client_id=" + client_id + "&scope=" + scope);
}