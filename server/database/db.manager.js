import mongoose from 'mongoose';

class DBManager {
  static async connect() {
    try {
      if (mongoose.connection.readyState !== 1) {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Mongoose connection established');
      }
    } catch (error) {
      console.error('Database connection error:', error);
      throw error;
    }
  }

  static async close() {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
      console.log('Mongoose connection closed');
    }
  }
}

export default DBManager;
