const mongoose = require('mongoose');

module.exports.connect = () => {
  mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Mongodb connection is successful');
  }).catch(error => {
    console.log('Error! connecting to mongodb instance', error.toString());
  });
}

module.exports.connection = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  // try {
  //   console.log('Mongodb connection is successful');
  // } catch (error) {
  //   console.log('Error! connecting to mongodb instance', error.toString());
  // }
}