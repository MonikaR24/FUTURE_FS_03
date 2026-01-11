const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// =======================
// CREATE a product (POST)
// =======================
router.post("/", async (req, res) => {
    try {
        const { name, price, description, category, stock } = req.body;
        const product = new Product({ name, price, description, category, stock });
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// =======================
// GET all products
// =======================
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// =======================
// GET a product by ID
// =======================
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// =======================
// UPDATE a product (PUT)
// =======================
router.put("/:id", async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// =======================
// DELETE a product
// =======================
router.delete("/:id", async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;
