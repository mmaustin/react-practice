import mongoose from "mongoose";

const PlantationSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Provide a plantation name'],
        minlength: 3,
        maxlength: 20,
        trim: true      
    },
    owner: {
        type: String,
        required: [true, 'Who owned this place and these people'],
        minlength: 6,
        maxlength: 35,
        trim: true
    },
    location: {
        type: String,
        required: [true, 'Where was this place'],
    },
    slaves: {
        type: Number,
        required: [true, 'Approximately ow many slaves lived here']
    }
})

export default mongoose.model('Plantation', PlantationSchema);