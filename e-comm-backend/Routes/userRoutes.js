const router = require('express').Router();
const User = require('../Models/user');

// Sign up user routes //

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    
    try {
        const user = await User.create({ name, email, password });
        res.json(user);
    } catch (e) {
        if (e.code === 11000) return res.status(400).send('Email already exists');
        res.status(400).send(e.message)
    }
})

module.exports = router;