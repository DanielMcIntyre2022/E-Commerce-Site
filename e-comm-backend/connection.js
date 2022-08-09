require('dotenv').config();

const mongoose = require('mongoose');
const connectionStr = "";

mongoose.connect(connectionStr, {useNewUserParser: true});