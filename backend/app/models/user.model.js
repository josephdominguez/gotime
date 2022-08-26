const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an eamil'],
        unique: true
    }, 
    password: { 
        type: String,   
        required: [true, 'Please add a password']     
    }
},
{
    timestamps: true    // automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('User', userSchema);