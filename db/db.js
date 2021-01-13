const mongoose = require("mongoose");

const connectToDB = async (next) => {
  if (process.env.NODE_ENV === "development") {
    await mongoose.connect(
      process.env.MONGODB_URL_DEV,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
        console.log(`Database connected on successfully on Localhost`);
      }
    );
  } else {
    const conn = await mongoose.connect(
      process.env.MONGODB_URL,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
        console.log(`Database connected on successfully`);
      }
    );
  }
};

module.exports = connectToDB;
