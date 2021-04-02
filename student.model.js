const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let StudentSchema = new Schema({studentname: {type: String, required: true, max: 100},	
    studentgender: {type: String, required: true, max: 100},
    course: {type: String, required: true, max: 100}});
module.exports = mongoose.model('Student', StudentSchema);