const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//this is user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email');
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"');
            }
        }
    },
});

//this is a method of hashing password
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
  
    console.log('Hashing password...');
    this.password = await bcrypt.hash(this.password, 12);
    console.log('Hashed Password:', this.password);
    next();
  });

  //this is a method of generating token
      userSchema.methods.generateAuthToken = async function () {
        const token = jwt.sign({"id":this.id, "email":this.email }, process.env.JWT_SECRET, {
          expiresIn: '7 days',
        });
        return token;
      }
