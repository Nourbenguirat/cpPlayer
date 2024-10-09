const CardSchema =require('../model/Card');
const addCard = async (req, res) => {
    try {
        const newCard = new CardSchema(req.body);
        console.log("New card", req.body);
        await newCCard.save();
        res.status(200).json({ msg: 'you added new Card', newCard });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
};
const getCardById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const Card = await CardSchema.findById(id);
        res.status(200).json({ msg: 'Card', Card });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
};
const updateCard = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const updatedCard = await CardSchema.findByIdAndUpdate(id, { $set: { ...req.body } });
        console.log("Updated Card", updatedCard);
        res.status(200).json({ msg: 'Card updated', updatedCard });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
};
const deleteCard = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const deletedCard = await CardSchema.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Card', deletedCard });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
};
const getAllCard = async (req, res) => {
    try {
        const Card = await CardSchema.find();
        res.status(200).json({ msg: 'You got all the Card', Card });
    } catch (err) {
        console.log(err);
        res.send('error is showing');
    }
}


module.exports = { addCard, getCardById, updateCard, deleteCard, getAllCard };

