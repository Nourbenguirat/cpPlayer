const express = require('express');
const router = express.Router(); // Create an instance of the router
const CardSchema = require('../model/Card'); // Adjust path if needed

// Middleware for JSON parsing
router.use(express.json());



router.get("/getAll", async (req, res) => {
    try {
        const cards = await CardSchema.find();
        res.status(200).json({ msg: 'You got all the cards', cards });
    } catch (err) {
        console.log(err);
        res.send('error is showing');
    }
});


router.post('/addNew', async (req, res) => {
    try {
        const Card = new CardSchema(req.body);
        console.log("New Card", req.body);
        await Card.save();
        res.status(200).json({ msg: 'you added new Card', Card });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
});

// Add more routes for updating and deleting cards as needed

module.exports = router; 
