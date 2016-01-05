/*
 * [y] SAP Hybris
 */

window.onload = function() {
	var location = window.location.toString();
	var accessTokenRegExp = /access_token=([^'"&]+)/;
	var match = accessTokenRegExp.exec(location);
	var access_token = match[1];
	document.getElementById("token").innerHTML = access_token
	return access_token;
}
