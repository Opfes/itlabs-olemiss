const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const slots = require('./routes/api/slots');

const app = express();

connectDB();

app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/slots', slots);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));