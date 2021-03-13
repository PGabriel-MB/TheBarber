const mongoose = require('mongoose');

const password = 'adminPGabriel'; // a definir juntamente com o banco de dados
const user = 'adminPGabriel';
const dbname = 'TheBarber';

mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.pgpdg.mongodb.net/${dbname}?retryWrites=true&w=majority`, { useFindAndModify: false });

mongoose.Promise = global.Promise;

module.exports = mongoose;