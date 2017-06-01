'use strict';
/*
 * [y] SAP Hybris
 */


const randomVal = Math.random().toString(36).slice(2) + Math.random().toString(24).slice(2);
const options = {
	oauthURL: "https://api.eu.yaas.io/hybris/oauth2/v1/",	
	authorizeEndpoint: "authorize",
	tokenInfoEndpoint: "tokeninfo",
	response_type: "id_token token",	
	clientID: "SET WITH YOUR CLIENT ID", 
	scope: "hybris.tenat=" + "SET YOUR PROJECT IDENTIFIER HERE",
	redirect_uri: "http://dev.local.yaas.io:8080"
}

window.onload = function () {		
	parseAccessToken();
	parseIDToken();
}

function parseAccessToken() {
	const token = parseLocation(/access_token=([^'"&]+)/);
	if (token) {
		localStorage.setItem("accessToken", token);
		document.getElementById("accessToken").innerHTML = token;
	} 
}

function parseIDToken() {
	const idToken = parseLocation(/id_token=([^'"&]+)/);
	if (idToken) {
		localStorage.setItem("idToken", idToken);
		document.getElementById("idToken").innerHTML = idToken;
	}
}

function parseLocation(regexp) {
	var location = window.location.toString();
	var match = regexp.exec(location);
	if (!value || value.length < 1) {
		console.error("Could not parse value using given regexp", regexp)
		return "Could not parse value"
	}
	var value = match[1];
	return value;
}

function getTokenInfo() {
	$.get(options.oauthURL + options.tokenInfoEndpoint + "?access_token=" + localStorage.getItem("accessToken"))
		.done(function (data) {
			document.getElementById("tokenInfo").innerHTML = JSON.stringify(data, undefined, 4);
		})
		.fail(function (jqXHR, textStatus, errorThrown) {
			$("#tokenInfo").html(jqXHR.responseJSON.error_description);
		})
}

