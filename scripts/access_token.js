window.onload = function token() {
        var x = window.location.toString();
        var array = [];
        array[0] = 0;
        array[1] = x.split("=");
        var access_token = array[1][1].substring(0, array[1][1].indexOf('&'));
        document.getElementById("token").innerHTML = access_token;
}
