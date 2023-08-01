const express = require('express');
const router = express.Router();
const {
  createFlight,
  getFlight,
  getFlights,
  updateFlight,
  deleteFlight,
} = require('../controllers/flightController'); 

router.post('/', createFlight);
router.get('/:id', getFlight);
router.get('/', getFlights);
router.put('/:id', updateFlight);
router.delete('/:id', deleteFlight);

module.exports = router;
