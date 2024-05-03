import mongoose from "mongoose";

let db;
async function connect() {
  if (db) return db;
  mongoose.connection.on('connected', () => console.log({mongoDB: 'Connected'}))
  mongoose.connection.on('error', () => console.log({mongoDB: 'Error'}))

  if (process.env.NODE_ENV === "production") {
    db = await mongoose.connect("mongodb+srv://wkhan99887755:secret123@cluster0.8bgy2bg.mongodb.net/Project-Dev")
  } else {
    if (!global.__db) {
      global.__db = await mongoose.connect("mongodb+srv://wkhan99887755:secret123@cluster0.8bgy2bg.mongodb.net/Project-Dev")
    }
    db = global.__db;
  }
  return db;
}

export { connect };
