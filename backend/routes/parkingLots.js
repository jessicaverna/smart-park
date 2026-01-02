const express = require('express');
const router = express.Router();
const {
  getAllParkingLots,
  getParkingLotById,
  createParkingLot,
  updateParkingLot,
  deleteParkingLot
} = require('../controllers/parkingLotController');
const { protect, authorize } = require('../middleware/auth');

// Public routes (accessible by all authenticated users)
router.get('/', protect, getAllParkingLots);
router.get('/:id', protect, getParkingLotById);

// Admin only routes
router.post('/', protect, authorize('ADMIN'), createParkingLot);
router.put('/:id', protect, authorize('ADMIN'), updateParkingLot);
router.delete('/:id', protect, authorize('ADMIN'), deleteParkingLot);

module.exports = router;
