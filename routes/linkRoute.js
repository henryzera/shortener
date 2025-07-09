const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController');

router.get('/:title', linkController.redirect);

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', linkController.addLink);

module.exports = router;