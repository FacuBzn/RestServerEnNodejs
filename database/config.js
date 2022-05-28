const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
     
        await mongoose.connect( process.env.MONGODB_ATLAS, {
          /*useNewUrlParser: true,
            userUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false */             
        });
        console.log('Base de Datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error en el momento de iniciar la base de datos');
    }
}


module.exports = {
    dbConnection
}

