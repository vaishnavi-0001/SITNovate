import { body, validationResult } from "express-validator";

// 📌 Chat Message Validation Middleware
export const validateChatMessage = [
  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message cannot be empty")
    .isLength({ min: 1, max: 500 })
    .withMessage("Message should be between 1 to 500 characters"),

  body("projectId")
    .trim()
    .notEmpty()
    .withMessage("Project ID is required")
    .isMongoId()
    .withMessage("Invalid Project ID format"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  }
];
