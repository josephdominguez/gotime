const asyncHandler = require('express-async-handler');

const TimeEntries = require('../models/time_entries.model');

// @desc    Get time entries
// @route   GET /api/time_entries
// @access  Private
const getTimeEntries = asyncHandler(async (req, res) => {
    const timeEntries = await TimeEntries.find();

    res.status(200).json({timeEntries});
});

// @desc    Set time entries
// @route   POST /api/time_entries
// @access  Private
const setTimeEntries = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    }

    const timeEntry = await TimeEntries.create({
        text: req.body.text
    });

    res.status(200).json(timeEntry);
});

// @desc    Update time entries
// @route   PUT /api/time_entries
// @access  Private
const updateTimeEntries = asyncHandler(async (req, res) => {
    const timeEntry = await TimeEntries.findById(req.params.id);

    if (!timeEntry) {
        res.status(400);
        throw new Error('Time Entry not found');
    }

    const updatedTimeEntry = await TimeEntries.findByIdAndUpdate(req.params.id, 
         req.body, { new: true });

    res.status(200).json(updatedTimeEntry);
});

// @desc    Delete time entries
// @route   DELETE /api/time_entries
// @access  Private
const deleteTimeEntries = asyncHandler(async (req, res) => {
    const timeEntry = await TimeEntries.findById(req.params.id);

    if (!timeEntry) {
        res.status(400);
        throw new Error('Time Entry not found');
    }
    
    await timeEntry.remove();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getTimeEntries,
    setTimeEntries,
    updateTimeEntries,
    deleteTimeEntries
}
