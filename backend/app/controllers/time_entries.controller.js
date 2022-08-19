const asyncHandler = require('express-async-handler');

// @desc    Get time entries
// @route   GET /api/time_entries
// @access  Private
const getTimeEntries = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Time Entries'});
});

// @desc    Set time entries
// @route   POST /api/time_entries
// @access  Private
const setTimeEntries = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    }

    res.status(200).json({message: `Created Time Entries`});
});

// @desc    Update time entries
// @route   PUT /api/time_entries
// @access  Private
const updateTimeEntries = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Set Time Entries ${req.params.id}`});
});

// @desc    Delete time entries
// @route   DELETE /api/time_entries
// @access  Private
const deleteTimeEntries = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Deleted Time Entries ${req.params.id}`});
});

module.exports = {
    getTimeEntries,
    setTimeEntries,
    updateTimeEntries,
    deleteTimeEntries
}