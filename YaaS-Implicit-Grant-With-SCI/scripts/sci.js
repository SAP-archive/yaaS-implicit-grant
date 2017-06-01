'use strict';

const form = document.getElementById("sciLoginForm");
form.action = options.oauthURL + options.authorizeEndpoint;

document.getElementById("scope").value =  options.scope;
document.getElementById("client_id").value = options.clientID
document.getElementById("nonce").value = randomVal;
document.getElementById("redirect_uri").value = options.redirect_uri
document.getElementById("state").value = randomVal;

window.onload = function () {	
	var form = document.getElementById("sciLoginForm");
	form.submit();
};

