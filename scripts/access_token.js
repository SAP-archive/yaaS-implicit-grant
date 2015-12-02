/*
 * [y] SAP Hybris
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
        var location = window.location.toString();
        var accessTokenRegExp = /access_token=([^'"&]+)/;
        var match = accessTokenRegExp.exec(location);
        var access_token = match[1];
        document.getElementById("token").innerHTML = access_token
        return access_token;
}
