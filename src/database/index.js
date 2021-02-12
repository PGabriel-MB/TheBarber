const mongoose = require('mongoose');

const password = ''; // a definir juntamente com o banco de dados
const user = '';
const dbname = '';

mongoose.connect(``, { useFindAndModify: false });

mongoose.Promise = global.Promise;

module.exports = mongoose;