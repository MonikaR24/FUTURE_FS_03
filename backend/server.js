const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

/* =======================
   MIDDLEWARE
======================= */

// Enable CORS
app.use(cors());

// Parse JSON body
app.use(express.json());

// Custom logger middleware (optional but good)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

/* =======================
   ROUTES
======================= */

app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

/* =======================
   SERVER
======================= */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
