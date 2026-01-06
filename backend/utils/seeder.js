const products = require('../data/products.json');
const Product = require('../models/productModel');
const User = require('../models/userModel'); // Make sure this exists
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');


dotenv.config({ path: 'backend/config/config.env' });
connectDatabase();

const seedProductsAndAdmin = async () => {
  try {
    // Delete existing products and users
    await Product.deleteMany();
    console.log('Products deleted!');
    
    await User.deleteMany({}); // optional: delete existing users
    console.log('Users deleted!');

    // Insert sample products
    await Product.insertMany(products);
    console.log('All products added!');

    // Create a sample admin user
    
    

  } catch (error) {
    console.log(error.message);
  }

  process.exit();
};

seedProductsAndAdmin();
