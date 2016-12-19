# Tutorial with sample code for the Implicit Grant Flow

## Overview
The sample JavaScript code in this tutorial presents the OAuth 2.0 Implicit Grant flow for acquiring access tokens in a project. With the obtained access token, you will list products in your project from the Builder.

## Documentation
For details about the OAuth2 authorization flows go to the [OAuth2 RFC](http://tools.ietf.org/html/rfc6749#section-1.3) framework and the [OAuth2](https://devportal.yaas.io/services/oauth2/latest/#Grants) service documentation in the Dev Portal.

## License
This project is copyrighted by [SAP AG](http://www.sap.com/) and made available under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0.html). Please also confer to the text files "LICENSE" and "NOTICE" included with the project sources.

## Prerequisites
In order to use the sample tutorial you need to have an account in the Builder and be able to create clients within a project. The tutorial works with Node v0.12.x.

## Getting started
1. Create a new project in the Builder and add an active product. Find out how in <a href="https://devportal.yaas.io/tools/builder/index.html#CreateProjects">this</a> tutorial. Retrieve the project **Identifier** (projectid) in the Builder: Projects > NAME_OF_YOUR_PROJECT > Administration.
2. Go to Your_Project > Clients. Create a client and set the **Redirect URL** to `http://127.0.0.1:8080`. You don't need to set any required scopes. Retrieve the  **Client ID** from the Client Authorization section.
3. In the tutorial file:
    * `scripts/login.js` set **clientid**
    * `scripts/post_ajax.js` set **projectid**.

## Run it and see in action
1. Run `npm install`.
2. Run `node server.js`.
3. Navigate to http://localhost:8080/ in your browser and follow the steps in the displayed page.
4. The successful flow lists products in your project from the Builder.

*Note*
The tutorial uses a token issued in the **US** region.
