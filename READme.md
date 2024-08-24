# E-Commerce Backend API Documentation

## Summary

This API provides endpoints for managing products in the e-commerce platform. The core functionality includes creating new products with data validation check  and duplicate prevention. The backend is built using Node.js with Express and MongoDB.

## API Endpoint: Create Product

### Endpoint

`POST /api/products/add`

### Description

Creates a new product in the database. This endpoint ensures that the product's data is valid and that no duplicate products are created.Also it checks for all the required fields such as name , description , price , category . 

### Request

#### URL

`http://localhost:3000/api/products`

#### Method

`POST`


#### Request Body

The request body must be a JSON object containing the following fields:

- **name** (string): The name of the product. This field is required and must be unique.
- **description** (string): A description of the product. This field is required.
- **price** (number): The price of the product. This field is required and must be a positive number.
- **category** (string): The category of the product (e.g., jewelry, pottery). This field is required.

##### Example 

```json
{
  "name": "Handmade Necklace",
  "description": "A beautiful handmade necklace.",
  "price": 29.99,
  "category": "jewelry"
}
