const Product = require("../models/Product");

// GET all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// POST add product
exports.createProduct = async (req, res) => {
  try {
    console.log("REQUEST BODY:", req.body); // 👈 VERY IMPORTANT

    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      stock: req.body.stock,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error("MONGOOSE ERROR:", error.message);
    res.status(400).json({ message: error.message });
  }
};
