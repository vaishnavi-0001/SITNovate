// const express = require("express");
// const { sendMessage, getChatHistory } = require("../Controllers/chatControllers");
// const { chatValidation} = require("../Middlewares/chatValidation");
// const { verifyToken } = require("../Middlewares/userValidation");

// const router = express.Router();

// // 📌 Send Chat Message (with validation & authentication)
// router.post("/send", verifyToken, chatValidation, sendMessage);

// // 📌 Get Chat History (authentication required)
// router.get("/history/:projectId", verifyToken, getChatHistory);

// module.exports = router; // ✅ Correct export for CommonJS
