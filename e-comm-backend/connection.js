require('dotenv').config();

const mongoose = require('mongoose');
const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@e-comm-database.i2n6ux7.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(connectionStr, { useNewUrlParser: true }).then(() => console.log('connected to mongoDB')).catch(err => console.log(err)); 

mongoose.connection.on('error', err => {
    console.log(err);
})
    