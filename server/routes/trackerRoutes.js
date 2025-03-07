const router = require('express').Router();
const { createExpense, getAllExpenses } = require('../controllers/trackerControllers');


router.post('/create-expense', createExpense);
router.get('/get-all-expenses', getAllExpenses);

module.exports = router;