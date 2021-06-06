const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    date : {
        type : Date,
        required : true
    },
    time : {
        type : Number,
        required : true
    },
    duration : {
        type : Number,
        required : true
    }
}, {
    timestamps: true
});

const Event = mongoose.model("Event",EventSchema);

module.exports = Event;