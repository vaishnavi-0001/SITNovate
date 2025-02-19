const { signup, login } = require('../Controllers/userController');
const { signupValidation, loginValidation } = require('../Middlewares/userValidation');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;