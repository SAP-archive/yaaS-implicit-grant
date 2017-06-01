/*
 * [y] SAP Hybris
 */

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080);
console.log("Server is listening on the port 8080...");
