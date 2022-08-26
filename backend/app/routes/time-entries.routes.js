const express = require('express');
const router = express.Router();

const { getTimeEntries, 
        setTimeEntries, 
        updateTimeEntries, 
        deleteTimeEntries } = require('../controllers/time-entries.controller');
const { protect } = require('../utils/authMiddleware');

router.get('/', protect, getTimeEntries);
router.post('/', protect, setTimeEntries);
router.put('/:id', protect, updateTimeEntries);
router.delete('/:id', protect, deleteTimeEntries);

module.exports = router;
