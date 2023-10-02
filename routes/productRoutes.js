const express = require('express');
const router = express.Router();
const { createProduct, getProduct } = require('../api/v1/product');

// Route pour créer un produit (POST)
router.post('/', createProduct);

// Route pour récupérer tous les produits (GET)
router.get('/', getProduct);

module.exports = router;
