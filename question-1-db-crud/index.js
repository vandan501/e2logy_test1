require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const app = express();
app.use(express.json());


// Connection to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    });

// API Endpoints i have created here

// Create User
app.post('/createuser', async (req, res) => {
    console.log('helllllllllllllllllllllllllllllll--------------------', req.body);
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    try {
        const user = new User({ name, email });
        const savedUser = await user.save();
        res.status(201).json({
            message: 'User Created successfully',
            user: savedUser
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to save user', details: err.message });
    }
});

// GET all users
app.get('/users', async (req, res) => {
    try {
        users = await User.find();
        res.status(200).json({ "users": users })
    } catch {
        res.status(500).json({ error: 'Failed to fetch users', details: err.message });
    }
})


// DELETE a user
app.delete('delete/user/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete user', details: err.message });
    }
});


// UPDATE a user
app.put('/update/user/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Name are required' });
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name},
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update user', details: err.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port :${PORT}`));
