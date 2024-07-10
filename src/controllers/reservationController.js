const config = require('../config/db');

exports.receiveReservation = (req, res) => {
  const { HotelCode } = req.body;

  if (HotelCode !== process.env.TEST_HOTEL_CODE) {
    return res.status(400).send('Invalid Hotel Code');
  }

  console.log(req.body);
  res.status(200).send('Success');
};
