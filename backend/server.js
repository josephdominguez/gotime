const express = require('express');
const colors = require('colors');
const doteven = require('dotenv').config();
const connectDB = require('./app/config/db.js');
const { errorHandler } = require('./app/utils/errorHandler');
const port = process.env.PORT || 8080;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

app.use('/api/users', require('./app/routes/user.routes'));
app.use('/api/time_entries', require('./app/routes/time-entries.routes'));

app.listen(port, () => { console.log(`Server is running on port ${port}`) }); 
