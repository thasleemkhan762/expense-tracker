const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/database');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

connectDB();
app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );

//routes
const expenseRoutes = require('./routes/trackerRoutes');
app.use('/api/tracker', expenseRoutes);



const PORT = 5000 || process.env.PORT;
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});