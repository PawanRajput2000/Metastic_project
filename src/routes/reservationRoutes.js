const express = require('express');
const router = express.Router();
const { receiveReservation } = require('../controllers/reservationController');
const basicAuth = require('../middleware/basicAuth');

router.post('/', basicAuth, receiveReservation);

module.exports = router;
