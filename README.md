/*
 * [y] hybris Platform
 *
 * Copyright (c) 2000-2015 hybris AG
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of hybris
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with hybris.
 */

1. Create a new project in the Builder. In the Builder go to Projects->NAME_OF_YOUR_PROJECT->Administration. In the file `scripts/login.js` set **projectid**. Change **Redirect URL** to `http://localhost:8080`. Go to Administration -> Applications. Create an application. Find your **Project ID** and **Client ID**:
    * in the file `scripts/login.js` set **client_id** and **scopes**.
    * in the files `scripts/post_ajax.js` and `scripts/get_ajax.js` set **Project ID**.
2. Run `npm install`
3. Run `node server.js`
