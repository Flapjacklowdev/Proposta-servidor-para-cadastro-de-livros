const mongoose = require('mongoose');

const options = {
    dbName: 'livraria',
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

mongoose.connect("mongodb://127.0.0.1:27017")
.then(()=> {console.log ("conectado ao MongoDB!");})
.catch((err) => console.log(err));
mongoose.Promise = global.Promise;

module.exports = mongoose;