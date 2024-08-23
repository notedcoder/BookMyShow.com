const mongoose = require('mongoose');
const connectDB = async() => {
  try{
    await mongoose.connect('mongodb+srv://baladityadhaka:NGHIqoXCQYtgRVFc@cluster49.1nojsnd.mongodb.net/bookmtshow');
    console.log('connnected to Database')
  }catch(err){
    console.log('err')
  }
}


module.exports = connectDB;
// export default connectDB;

