// const Joi = require('joi');

// const chatValidation = (req, res, next) => {
//   const schema = Joi.object({
//     message: Joi.string().min(1).max(500).required().messages({
//       "string.empty": "Message cannot be empty",
//       "string.min": "Message should be at least 1 character long",
//       "string.max": "Message should not exceed 500 characters",
//     }),
    
//     projectId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({
//       "string.empty": "Project ID is required",
//       "string.pattern.base": "Invalid Project ID format",
//     }),
//   });

//   const { error } = schema.validate(req.body);
//   if (error) {
//     return res.status(400).json({ message: 'Bad request', error: error.details[0].message });
//   }
//   next();
// };

// module.exports = { chatValidation };
