/*
 * [y] SAP Hybris
 */

window.onload = function() {
	var location = window.location.toString();
	var accessTokenRegExp = /access_token=([^'"&]+)/;
	var match = accessTokenRegExp.exec(location);	
	var access_token = "";
	if (!match || match.length < 1) {
		console.error("Could not parse access_token using given regexp", accessTokenRegExp)
		access_token = "Could not parse access token from URL fragment"
	} else {
		access_token = match[1];
	}				
	return access_token;
}
