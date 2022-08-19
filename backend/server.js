const express = require('express');
const doteven = require('dotenv').config();
const { errorHandler } = require('./app/middleware/errorHandler');

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

app.use('/api/time_entries', require('./app/routes/time_entries.routes'));

app.listen(port, () => { console.log(`Server is running on port ${port}`) });