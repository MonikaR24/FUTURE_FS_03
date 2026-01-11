const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product"); // adjust path if different

dotenv.config();

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/monika")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const products = [
    { name: "Samsung Galaxy S23", price: 74999, description: "Flagship Samsung phone", category: "Mobiles", stock: 15 },
    { name: "iPhone 15", price: 129999, description: "Apple flagship", category: "Mobiles", stock: 20 },
    { name: "Dell XPS 13", price: 99999, description: "Powerful ultrabook", category: "Laptops", stock: 10 },
    { name: "MacBook Air M2", price: 119999, description: "Lightweight Apple laptop", category: "Laptops", stock: 12 },
    { name: "Sony WH-1000XM5", price: 24999, description: "Noise cancelling headphones", category: "Accessories", stock: 25 }
];

const seedDB = async () => {
    await Product.deleteMany(); // optional: remove existing products
    await Product.insertMany(products);
    console.log("Data Seeded Successfully");
    mongoose.disconnect();
};

seedDB();
