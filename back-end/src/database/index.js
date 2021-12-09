const mongoose = require('mongoose');

const password = 'adminPGabriel'; // a definir juntamente com o banco de dados
const user = 'adminPGabriel';
const dbname = 'TheBarber';

const uri = `mongodb+srv://${user}:${password}@cluster0.pgpdg.mongodb.net/${dbname}?retryWrites=true&w=majority`;

try {
    mongoose.connect(
        uri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        err => console.log("Database connected!", err)
    );
} catch (error) {
    console.log("Connection Error", error);
}


mongoose.Promise = global.Promise;

module.exports = mongoose;