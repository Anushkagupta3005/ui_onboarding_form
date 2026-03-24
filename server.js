const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Form = require('./models/Form');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/onboardingDB')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// API to get form
app.get('/form', async (req, res) => {
    try {
        const form = await Form.findOne({ formId: "onboarding" });
        res.json(form);
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
});

// Start server
app.listen(8081, () => {
    console.log("Server running on port 8081");
});