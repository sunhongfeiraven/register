'use strict';

module.exports = app => {
  const { mongoose } = app;
  const { Schema } = mongoose;

  const RegisterSchema = new Schema({
    name: { type: String },
    department: { type: String },
    station: { type: String },
    contact: { type: String },
    dob: { type: String },
    email: { type: String },
  });

  return mongoose.model('Register', RegisterSchema);
};
