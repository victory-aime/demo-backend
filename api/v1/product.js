const prisma = require("./lib/prisma");

const createProduct = async (req, res) => {
    try {
        const { name, price } = req.body;

        // Utilisez Prisma pour créer un produit dans la base de données
        const product = await prisma.products.create({
            data: {
                name : name,
                price : price,
            },
        });

        res.status(201).json({ message: 'Produit créé avec succès', data: product });
    } catch (error) {
        console.error('Erreur lors de la création du produit', error);
        res.status(500).json({ error: 'Erreur lors de la création du produit' });
    }
};

const getProduct = async (req, res) => {
    try {
        // Récupérer tous les produits
        const products = await prisma.products.findMany({});

        res.status(200).json({ message: 'Produits récupérés avec succès', data: products });
    } catch (error) {
        console.error('Erreur lors de la récupération des produits', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des produits' });
    }
};

module.exports = { createProduct,getProduct };
