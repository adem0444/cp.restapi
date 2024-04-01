const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

//Use of comments during the code

const app = express();
const PORT = process.env.PORT || 3000;

//Use of comments during the code

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Connected to MongoDB')).catch(err => console.error('Error connecting to MongoDB:', err));


//Use of comments during the code


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.GET('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
} 
catch (err) {
    res.status(500).json({ message: err.message });
}
});


//Use of comments during the code


app.POST('/users', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
});

try {
    const newUser = await user.save();
    res.status(201).json(newUser);
} 
catch (err) {
    res.status(400).json({ message: err.message });
}
});


//Use of comments during the code


app.PUT('/users/:id', async (req, res) => {
    try {
    const user = await User.findById(req.params.id);
    if (user == null) {
        return res.status(404).json({ message: 'User not found' });
    }
    user.name = req.body.name;
    user.email = req.body.email;
    user.age = req.body.age;
    const updatedUser = await user.save();
    res.json(updatedUser);
} catch (err) {
    res.status(400).json({ message: err.message });
}
});


app.DELETE('/users/:id', async (req, res) => {
    try {
    const user = await User.findById(req.params.id);
    if (user == null) {
        return res.status(404).json({ message: 'User not found' });
    }
    await user.remove();
    res.json({ message: 'User deleted' });
} catch (err) {
    res.status(500).json({ message: err.message });
}
});

//Use of comments during the code

module.exports = app;


//Use of comments during the code