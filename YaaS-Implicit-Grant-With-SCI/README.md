# Implicit Grant Flow using SAP Cloud Identity - tutorial with sample code

## Overview
The JavaScript code in this tutorial shows the OAuth 2.0 Implicit Grant used to acquire access tokens.
The identity provider is set to SAP Cloud Identity and the overlay (popup) integration is enavled. When you obtain an access token, you will list the information about your token using the `/tokeninfo` endpoint of the OAuth2 service.

## Documentation
For more details about the OAuth2 authorization flows see the [OAuth2 RFC](http://tools.ietf.org/html/rfc6749#section-1.3) framework and the [OAuth2](https://devportal.yaas.io/services/oauth2/latest/#Grants) service documentation in the Dev Portal.

## License
This project is copyrighted by [SAP AG](http://www.sap.com/) and made available under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0.html). For more legal information, please refer to the "LICENSE" and "NOTICE" files included in the project folder.

## Prerequisites
To use this tutorial, you need to have an account in the [Builder](https://builder.yaas.io) and be able to create clients within a project.
Additionally, you must map **dev.local.yaas.io** to **127.0.0.1** in the `hosts` file of your system.
To find the `hosts` file, go to:

 <ul><li>On Unix systems: `/etc/hosts`</li>
 <li>On Windows: ` %SystemRoot%\System32\drivers\etc\hosts` </li></ul>

This tutorial works with Node v6.x.

## Getting started
1. Create a new project in the Builder and add an active product. Find out how in <a href="https://devportal.yaas.io/tools/builder/index.html#CreateProjects">this</a> tutorial.
   Retrieve the project's **Identifier** (project ID) from the Builder. To find the **Identifier** of your project, go to Your_Project -> Administration.
2. Go to Your_Project -> Development -> Clients. Create a new client and set the **Redirect URI** of the client to `http://dev.local.yaas.io:8080`. You don't need to set any required scopes.
   Retrieve the OAuth2 **Client ID** from the Client Authorization section.
3. In the tutorial file `scripts/oauth-utils.js`, set **clientID** and **redirect_uri** parameters to match the values you set in the previous step. Set the **scope** parameter value to
   `hybris.tenant=YOURPROJECTIDENTIFIER`.

## Run it and see it in action
1. Run `npm install`.
2. Run `npm start`.
3. In your browser, navigate to `http://dev.local.yaas.io:8080/` and follow the steps displayed on the page.

*Note*</br>
This tutorial works on tokens issued in the **EU** region.
