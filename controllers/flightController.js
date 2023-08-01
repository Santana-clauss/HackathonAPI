const Flight = require('../models/flightModel');

const createFlight = async (req, res) => {
    const { airline, flightNumber, origin, destination, departureDate, seatsAvailable } = req.body;
    try {
        const { airline,
            flightNumber,
            origin,
            destination,
            departureDate,
            seatsAvailable, } = req.body;
        const newflight = new Flight({ airline,
            flightNumber,
            origin,
            destination,
            departureDate,
            seatsAvailable,});
        const savedFlight = await newflight.save();
        res.status(201).json(savedFlight);
    } catch (err) {
      res.status(400).json({ message: 'Error creating flight', error: err.message });
    }
  };
  
  const getFlights = async (req, res) => {
    try {
      const flights = await Flight.find();
      res.json(flights);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching flights', error: err.message });
    }
  };
  
  const getFlight = async (req, res) => {
    try {
      const flight = await Flight.findById(req.params.id);
      if (!flight) {
        return res.status(404).json({ message: 'Flight not found' });
      }
      res.json(flight);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching flight', error: err.message });
    }
  };
  
  const updateFlight = async (req, res) => {
    const { airline, flightNumber, origin, destination, departureDate, seatsAvailable } = req.body;
    try {
      const updatedFlight = await Flight.findByIdAndUpdate(
        req.params.id,
        { airline, flightNumber, origin, destination, departureDate, seatsAvailable },
        { new: true }
      );
      res.json(updatedFlight);
    } catch (err) {
      res.status(400).json({ message: 'Error updating flight', error: err.message });
    }
  };
  
  const deleteFlight = async (req, res) => {
    try {
      await Flight.findByIdAndDelete(req.params.id);
      res.json({ message: 'Flight deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error deleting flight', error: err.message });
    }
  };
  
  module.exports = {
    createFlight,
    getFlight,
    getFlights,
    updateFlight,
    deleteFlight,
  };
  