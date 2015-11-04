# Tutorial with sample code for the Implicit Grant Flow

## Overview
The sample code in this tutorial presents the flow for acquiring access tokens in a project.

## Documentation
For detailed documentation of OAuth2 authorization flows go to the [OAuth2 RFC](http://tools.ietf.org/html/rfc6749#section-1.3) framework and the [First Steps with APIs](https://devportal.yaas.io/gettingstarted/) section of the Getting Started in the Dev Portal.

## License
This project is copyrighted by [SAP AG](http://www.sap.com/) and made available under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0.html). Please also confer to the text files "LICENSE" and "NOTICE" included with the project sources.

## Prerequisites
In order to use the sample tutorial you need to have an account in the Builder and be able to create applications within a project/site.

## Getting started
1. Create a new project in the Builder. In the Builder go to: Projects > NAME_OF_YOUR_PROJECT > Administration. In the file `scripts/login.js` set **projectid** (Identifier). Change **Redirect URL** to `http://localhost:8080`. Go to Administration -> Applications. Create an application, retrieve the  **Client ID** and:
    * in the file `scripts/login.js` set **client_id** and **scopes**.
    * in the file `scripts/post_ajax.js` set **Project ID**.
2. Run `npm install`
3. Run `node server.js`
