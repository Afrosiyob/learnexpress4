const { Router } = require("express");
const Product = require("../models/User");
const router = Router();
const auth = require("../middleware/auth.middleware");
const config = require("config");

router.post("/create_product", auth, async(req, res) => {
    try {
        const baseUrl = config.get("baseUrl");
        const { name, date, author } = req.body;
        const existing = await Product.findOne({ name });
        if (existing) {
            return res.json({ book: existing, message: "This product exist..." });
        }
        const newProduct = new Product({
            name,
            date,
            author,
            owner: req.user.userId,
        });
        await newProduct.save();
        res.status(201).json({ newProduct });
    } catch (error) {
        res.status(500).json({ message: "Something is wrong..." });
    }
});
router.get("/get_product", auth, async(req, res) => {
    try {
        const books = await Product.find({ owner: req.user.userId });
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: "Something is wrong..." });
    }
});
router.get("/get_product/:id", auth, async(req, res) => {
    try {
        const book = await Product.findById(req.params.id);
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: "Something is wrong..." });
    }
});

module.exports = router;