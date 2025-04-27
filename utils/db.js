
import mongoose from 'mongoose';

// connecting to database
const connectDB = async () => {
  const connectionUrl =
    'mongodb+srv://deepbhai:deepbhai@cluster0.mxp3j0e.mongodb.net/';
  try {
    await mongoose.connect(connectionUrl, {
      dbName: 'work_manager',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected successfully`);
  } catch (err) {
    console.log('Getting Error from DB connection' + err.message);
  }
  mongoose.set('strictQuery', false);
};

export default connectDB;
