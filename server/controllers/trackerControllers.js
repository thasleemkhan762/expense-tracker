const mongoose = require('mongoose');
// const Tracker = mongoose.model('Tracker');
const Tracker = require('../model/trackerModel');

//create expense
exports.createExpense = async (req, res) => {
    try {
        console.log(req.body);
        const { category, amount, date, description } = req.body;
        console.log(req.body);

        // if(!category || !amount ) {
        //     return res.status(400).json({ message: 'All fields are required' });
        // }

        const expense = await Tracker.create({
            category,
            amount,
            date,
            description,
            userId: req.body.id,
        });

        res.status(201).json({ expense });
    } catch (error) {
        console.error("Error on adding expense",error);
        res.status(500).json({ message: 'Server Error'});
    }
};

// get all expenses
exports.getAllExpenses = async (req, res) => {
    try {
        const expenses = await Tracker.find({}).sort({ date: -1 });
        res.status(200).json({ expenses });
    } catch (error) {
        console.error(error,"Error on getting all expenses");
        res.status(500).json({ message: 'Server Error' });
    }
};