const mongoose = require('mongoose');

async function main() {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://maria:BoZzpUcDh0bh0lEd@cluster0.0pteopg.mongodb.net/?retryWrites=true&w=majority"
        )

        console.log("Conectado ao banco!")
    } catch (error) {
        console.log(error)
    }
}

module.exports = main;