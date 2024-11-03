const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    event_date: {
        type: Date,
        required: true
    },
    start: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v);
            },
            message: props => `${props.value} is not a valid time format (HH:MM)!`
        }
    },
    end: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v);
            },
            message: props => `${props.value} is not a valid time format (HH:MM)!`
        }
    },
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    event_link: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
}, {
    timestamps: true,
});
eventSchema.index({ event_date: 1 })

module.exports = model('Event', eventSchema);
