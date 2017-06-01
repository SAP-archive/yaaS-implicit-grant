# Implicit Grant Flow - tutorial with sample code

## Overview
The JavaScript code in this tutorial shows the OAuth 2.0 Implicit Grant used to acquire access tokens in a project.
When you obtain an access token, you will list the products that are a part of the project you created in the Builder.

## Documentation
For more details about the OAuth2 authorization flows see the [OAuth2 RFC](http://tools.ietf.org/html/rfc6749#section-1.3) framework and the [OAuth2](https://devportal.yaas.io/services/oauth2/latest/#Grants) service documentation in the Dev Portal.

## License
This project is copyrighted by [SAP AG](http://www.sap.com/) and made available under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0.html). For more legal information, please refer to the "LICENSE" and "NOTICE" files included in the project folder.

## Prerequisites
To use this tutorial, you need to have an account in the [Builder](https://builder.yaas.io) and be able to create clients within a project. This tutorial works with Node v0.12.x.

## Getting started
1. Create a new project in the Builder and add an active product. Find out how in <a href="https://devportal.yaas.io/tools/builder/index.html#CreateProjects">this</a> tutorial.
   Retrieve the project's **Identifier** (project ID) from the Builder. To find the **Identifier** of your project, go to Your_Project -> Administration.
2. Go to Your_Project -> Clients. Create a new client and set the **Redirect URI** of the client to `http://127.0.0.1:8080`. You don't need to set any required scopes.
   Retrieve the **Client ID** from the Client Authorization section.
3. Modify the following files:
    * `scripts/login.js` to set the **clientID**
    * `scripts/post_ajax.js` to set the **projectID**

## Run it and see it in action
1. Run `npm install`.
2. Run `node server.js`.
3. In your browser, go to http://localhost:8080/ and follow the steps displayed on the page.
4. When you complete all of the steps a list of products associated with your project is displayed.

*Note*</br>
The tutorial uses tokens issued in the **US** region.
