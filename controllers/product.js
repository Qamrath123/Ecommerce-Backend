import ProductModel from "../model/Product.js";

console.log("ProductModel:", ProductModel);

export const createProd = async (req, res) => {
  const { name, description, price, category } = req.body;

  // Check for duplicate product
  const existingProduct = await ProductModel.findOne({ name });
  if (existingProduct) {
    return res
      .status(400)
      .json({ message: "Product with this name already exists" });
  }

  //Validation Check
  if (!name || !description || !price || !category) {
    return res.status(400).json({ message: "All fields are required." });
  }
  if (typeof price !== "number" || price <= 0) {
    return res
    .status(400)
    .json({ message: "Price must be a positive number" });
  }
  try {
    //Creating Product endpoint

    const addedProduct = new ProductModel({ name, description, price, category });
    await addedProduct.save();

    res.status(201).json({ message: 'Product created successfully', addedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }


  
};
