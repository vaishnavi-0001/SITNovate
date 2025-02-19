const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email'
    }
  },
  password: {
    type: String,
    required: true,
    minLength: 8
  }
})

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
  
    console.log('Hashing password...');
    this.password = await bcrypt.hash(this.password, 12);
    console.log('Hashed Password:', this.password);
    next();
  });

// Compare entered password with stored hash
userSchema.methods.comparePassword = async function(enteredPassword) {
  try {
    console.log('Entered Password:', enteredPassword)
    console.log('Stored Hash:', this.password)
    return await bcrypt.compare(enteredPassword, this.password)
  } catch (err) {
    console.error('Error comparing passwords:', err)
    throw new Error('Error comparing passwords')
  }
}

// Generate JWT token
userSchema.methods.generateAuthToken = function () {
    console.log('JWT_SECRET_KEY:', process.env.JWT_SECRET_KEY); // Debug log
  
    if (!process.env.JWT_SECRET_KEY) {
      throw new Error('JWT_SECRET_KEY is not defined in the environment variables.');
    }
  
    return jwt.sign(
      { email: this.email, id: this._id },
      process.env.JWT_SECRET_KEY, // Ensure this matches the .env variable name
      { expiresIn: '1d' }
    );
  };

module.exports = mongoose.model('User', userSchema)