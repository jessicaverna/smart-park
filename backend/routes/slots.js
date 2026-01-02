const express = require('express');
const router = express.Router();
const {
  getSlotsByLot,
  getSlotById,
  createSlot,
  updateSlotStatus,
  deleteSlot,
  simulateSlotUpdate
} = require('../controllers/slotController');
const { protect, authorize } = require('../middleware/auth');

// Public/User routes (view slots)
router.get('/lot/:lotId', protect, getSlotsByLot);
router.get('/:id', protect, getSlotById);

// Admin only routes
router.post('/', protect, authorize('ADMIN'), createSlot);
router.put('/:id/status', protect, authorize('ADMIN'), updateSlotStatus);
router.delete('/:id', protect, authorize('ADMIN'), deleteSlot);

// Simulation route (Admin only - for testing real-time updates)
router.post('/simulate/:lotId', protect, authorize('ADMIN'), simulateSlotUpdate);

module.exports = router;
