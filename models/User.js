import mongoose from "mongoose";
import validator from "validator";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 20,
        trim: true,
      },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        validate: {
          validator: validator.isEmail,
          message: 'Please provide a valid email',
        },
        unique: true,
      },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6,
        select: false,
      },
    location: {
        type: String,
        trim: true,
        maxlength: 20,
        default: 'my city',
      },
});

export default mongoose.model('User', UserSchema);