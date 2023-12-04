// Product Collection examples
// Product includes all the information about a particular product.

[{
    "productID": 1,
    "product_name": "chips",
    "product_category": "grocery",
    "product_brand": "lays",
    "price": 1.99,
    "inventoryID": 1,
    "rating": 1
},
{
    "productID": 2,
    "product_name": "heels",
    "product_category": "footwear",
    "product_brand": "catwalk",
    "price": 8.99,
    "inventoryID": 2,
    "rating": 2
},
{
    "productID": 3,
    "product_name": "juice",
    "product_category": "grocery",
    "product_brand": "crystal",
    "price": 2.49,
    "inventoryID": 3,
    "rating": 3
}]



// Inventory Collection examples
// Inventory includes the stock quantity and reorder information about products.

[{
    "inventoryID": 1,
    "productID": 1,
    "inStockQuantity": 3,
    "reorder_level": 15
},
{
    "inventoryID": 2,
    "productID": 2,
    "inStockQuantity": 4,
    "reorder_level": 25
},
{
    "inventoryID": 3,
    "productID": 3,
    "inStockQuantity": 5,
    "reorder_level": 40
}]



//salestransaction Collection examples
// Sales Transaction includes information about transactions on each product.

[{
    "transactionID": 1,
    "productID": 1,
    "transactionDate": "Oct 21, 2023",
    "sales_quantity": 1,
    "sales_revenue": 20
},
{
    "transactionID": 2,
    "productID": 2,
    "transactionDate": "May 13, 2022",
    "sales_quantity": 2,
    "sales_revenue": 5
},
{
    "transactionID": 3,
    "productID": 3,
    "transactionDate": "Nov 23, 2022",
    "sales_quantity": 3,
    "sales_revenue": 10
}]



// Demandforecast Collection examples
// Demandforecast includes information regarding future reorder levels.

[{
    "forecastID": 1,
    "productID": 1,
    "forecasted_demand": 20,
    "forecast_date": "Aug 15, 2021",
    "confidence_level": 95
},
{
    "forecastID": 2,
    "productID": 2,
    "forecasted_demand": 5,
    "forecast_date": "Nov 9, 2023",
    "confidence_level": 50
},
{
    "forecastID": 3,
    "productID": 3,
    "forecasted_demand": 10,
    "forecast_date": "Apr 22, 2022",
    "confidence_level": 90
}]



// Customer Collection examples
// Customer includes customer information and purchase records.

[{
    "customerID": 1,
    "cus_name": "Ori Love",
    "cus_email": "et.ultrices@icloud.ca",
    "purchase_date": "Feb 20, 2021",
    "productID": 1
},
{
    "customerID": 2,
    "cus_name": "McKenzie Santiago",
    "cus_email": "sed.est@hotmail.edu",
    "purchase_date": "Apr 10, 2023",
    "productID": 2
},
{
    "customerID": 3,
    "cus_name": "Kareem Bowers",
    "cus_email": "mauris.elit@google.org",
    "purchase_date": "Sep 8, 2022",
    "productID": 3
}]