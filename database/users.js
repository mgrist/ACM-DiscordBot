const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    acm_id: {
        type: String,
        unqiue: [true, "a user with this ACM ID already exists"],
        required: true,
    },
    first_name: {
        type: String,
        required: false,
        default: "John"
    },
    last_name: {
        type: String,
        required: false,
        default: "Doe"
    },
    email: {
        type: String,
        required: false
    },
    expiration: {
        type: Date,
        required: false,
        default: () => {
            const date = new Date();
            date.setFullYear(date.getFullYear() + 1);
            return date;
        }
    },
    membership_type: {
        type: String,
        required: false,
        default: "Chapter Member"
    },
    active_member: {
        type: Boolean,
        required: false,
        default: false
    },
    discord_id: {
        type: String,
        unqiue: [true, "a user with this discord ID already exists"],
        required: true
    }
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;