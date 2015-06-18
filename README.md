1. Create a new project in the Builder. In the Builder go to Projects->NAME_OF_YOUR_PROJECT->Administration. In the file `scripts/login.js` set **projectid**. Change **Redirect URL** to `http://localhost:8080`. Go to Administration -> Applications. Create an application. Find your **Project ID** and **Client ID**:
    * in the file `scripts/login.js` set **client_id** and **scopes**.
    * in the files `scripts/post_ajax.js` and `scripts/get_ajax.js` set **Project ID**.
2. Run `npm install`
3. Run `node server.js`
