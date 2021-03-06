const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vacancySchema = mongoose.Schema({
    writer: {
        type:Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type:String,
        maxlength:50,
    },
    address: {
        type: String,
    },
    contact: {
        type: Number,
    },
    category: String,
    vacancies : {
        type: Number,
        default: 1 
    },
    job :{
        type: String
    },
    website :{
        type: String
    },
    pcode :{
        type: String
    },
    filepath :{
        type: String
    }
}, { timestamps: true })


const Vacancy = mongoose.model('Vacancy', vacancySchema);

module.exports = { Vacancy }