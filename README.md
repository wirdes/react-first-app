## STEP 1
First of all it needs a json-server
### `npm i json-server`
##  STEP 2
✨It must be inside the json file:
```JS
"products": [
    {
      "id": 1,
      "categoryId": 2,
      "productName": "Chai",
      "quantityPerUnit": "48 - 6 oz jars",
      "unitPrice": "24",
      "unitsInStock": 53
    },
"categories": [
    {
      "id": 1,
      "categoryName": "Beverages",
      "seoUrl": "beverages"
    },
```
And start fake json-server
### `json-server --watch ./api/db.json`
## Project RUN

In the project directory, you can run:

### `npm start`

Since the 3000 port uses json-server, we can say yes to the warning and use our project in [http://localhost:3001](http://localhost:3001) to view it in the browser.




