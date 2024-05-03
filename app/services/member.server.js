import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  age: String,
});

const Member = mongoose.models.Member ||  mongoose.model("Member", userSchema);

export async function getUsers() {
  const users = await Member.find();
  return users;
}

export async function getUser(id) {
  console.log({id})
  const user = await Member.findOne({ _id: Object(id) }).exec();
  return user;
}

export async function createUser(user) {
  const newUser = await Member.create(user);
  return newUser;
}

export async function updateUser(user) {
  const updatedUser = await Member.findOneAndUpdate(
    { _id: user.id },
    user
  ).exec();
  return updatedUser;
}
