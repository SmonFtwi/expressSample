const express = require("express");
const router = express.Router();

const messages = require('../public/message');


router.get('/index', (req, res) => {
    res.render('index', { messages }); // Pass the messages array to the template
});


router.get('/messagebox', (req, res) => {
    console.log("Rendering index");
    res.render('messagebox'); // Pass empty values to the template
    //res.send('messagebox')
});

router.post('/messagebox', (req, res) => {
    const { text, user } = req.body;
    messages.push({ text, user, added: new Date() });
    res.redirect('/index'); // Redirect to the index page
});

module.exports = router;
