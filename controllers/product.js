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
    return res.status(400).json({ message: "Price must be a positive number" });
  }
  try {
    //Creating Product endpoint

    const addedProduct = new ProductModel({
      name,
      description,
      price,
      category,
    });
    await addedProduct.save();

    res
      .status(201)
      .json({ message: "Product created successfully", addedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

//Retrieve product

export const getAllProducts = async (req,res) => {
  try {
    const products = await ProductModel.find();
    res.status(201).json({ message: "Fetched Products successfully ", products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update product 

export const updateProduct = async(req,res) =>{


  try{
    const {id} = req.params;
    const { name , description , price , category} = req.body;

    // Validate input
    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (typeof price !== 'number' || price <= 0) {
      return res.status(400).json({ message: 'Price must be a positive number' });
    }

//Finding the ID and updating the product
    const updateProduct = await ProductModel.findByIdAndUpdate(id ,  { name, description, price, category },
     { new:true}
    );
    if (!updateProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated successfully', product: updateProduct });

  }catch(error){
    console.error(error);
    res.status(500).json({ message: "Server error" });


  }
}


//Delete Product


export const deleteProduct = async(req,res) =>{



  try{
    const { id } = req.params;
    const deletedProduct = await ProductModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });

  }catch(error){
    console.error(error);
    res.status(500).json({ message: "Server error" });



  }
}
