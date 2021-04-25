const mongoose = require('mongoose');


//Schema
const Schema = mongoose.Schema;
const ProjectPostSchema = new Schema({
    id: Number,
    type: String,
    title: String,
    skills: String,
    ability: String,
    image: String,
    body: String,
    tag: String,
    label: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//Model
const ProjectPost = mongoose.model('ProjectPost', ProjectPostSchema);

module.exports = ProjectPost;