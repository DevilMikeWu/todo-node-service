import mongoose from 'mongoose';

const Schema = mongoose.Schema;


export const TodoSchema = new Schema({
    title:{
        type: String,
        required: 'Enter a todo title'
    },
    desc:{
        type: String,
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
})