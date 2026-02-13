const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('mongodb+srv://bruna:12345@cluster0.mpgnjr9.mongodb.net/');
}

module.exports = startDB;