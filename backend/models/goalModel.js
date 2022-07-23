const mongoose = require('mongoose')
const goalSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Users",
        },
        text: {
            type: String,
            require: [true, 'Please add a text value']
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Goals', goalSchema)