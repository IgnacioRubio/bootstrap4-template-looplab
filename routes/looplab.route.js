// -- DEPENDENCIES --

const path = require('path');

const express = require('express');
const router = express.Router();

// -- LOGIC --

// rout
router.get('*', (req, res, err) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router;