import express from "express";
import { sendMessage, getChatHistory } from "../controllers/chatController.js";
import { validateChatMessage } from "../Middlewares/chatValidation.js";
import { verifyToken } from "../middlewares/userMiddleware.js"; // Ensure user is authenticated

const router = express.Router();

// 📌 Send Chat Message (with validation & authentication)
router.post("/send", verifyToken, validateChatMessage, sendMessage);

// 📌 Get Chat History (authentication required)
router.get("/history/:projectId", verifyToken, getChatHistory);

module.export = router;
