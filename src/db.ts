const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://oussama:oussama123@db1.98v5s.mongodb.net/DB1?retryWrites=true&w=majority', 
{ useNewUrlParser :true, useUnifiedTopology : true})
        .then(()=> console.log('Mongo is UP'))
        .catch((err:Error)=> console.log(`Mongo is Down, raison : ${err.message}`))
