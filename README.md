# Tutorial with sample code for the Implicit Grant Flow

## Overview
The sample code in this tutorial presents the Implicit Grant flow for acquiring access tokens in a project. With the obtained access token you will add a category in your project in the Builder.

## Documentation
For detailed documentation of OAuth2 authorization flows go to the [OAuth2 RFC](http://tools.ietf.org/html/rfc6749#section-1.3) framework and the [First Steps with APIs](https://devportal.yaas.io/gettingstarted/) section of the Getting Started in the Dev Portal.

## License
This project is copyrighted by [SAP AG](http://www.sap.com/) and made available under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0.html). Please also confer to the text files "LICENSE" and "NOTICE" included with the project sources.

## Prerequisites
In order to use the sample tutorial you need to have an account in the Builder and be able to create applications within a project/site.

## Getting started
1. Create a new project in the Builder and subscribe to the Core Package and Commerce as a Service from the Yaas Market. Retrieve the project **Identifier** (projectid) from: Projects/Sites > NAME_OF_YOUR_PROJECT > Administration.
2. Go to Administration > Applications. Create an application with the Core package add Commerce as a Service as required packages. Add "hybris.category_create" from Commerce as a Service ss a required scope. In the next step set the **Redirect URL** to `http://127.0.0.1:8080`. Retrieve the  **Client ID** from the Client Authorization section.
3. In the tutorial file:
    * `scripts/login.js` set **clientid**
    * `scripts/post_ajax.js` set **projectid**.
    * 
## Run and see it in action
1. Run `npm install`.
2. Run `node server.js`.
3. Navigate to http://localhost:8080/ in your browser and follow the steps in the displayed page.
4. The successful flow generates an inactive catetory in your project and returns its ID and link.
