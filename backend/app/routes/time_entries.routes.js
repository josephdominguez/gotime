const express = require('express');
const router = express.Router();

const { getTimeEntries, 
        setTimeEntries, 
        updateTimeEntries, 
        deleteTimeEntries } = require('../controllers/time_entries.controller');

router.get('/', getTimeEntries);
router.post('/', setTimeEntries);
router.put('/:id', updateTimeEntries);
router.delete('/:id', deleteTimeEntries);

module.exports = router;
