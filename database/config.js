const mongoose = require('mongoose');



const dbConnection = () => {
    mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
      }).then((resp) => { console.log('DB ON'); })
        .catch((error) => { console.log('Error connecting to Mongo', error); });
}



module.exports = {
    dbConnection
}
