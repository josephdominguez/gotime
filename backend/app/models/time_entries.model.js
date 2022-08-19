const mongoose = require('mongoose');

const timeEntriesSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, 'Please add a text value'],
        },
    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model('TimeEntry', timeEntriesSchema)
