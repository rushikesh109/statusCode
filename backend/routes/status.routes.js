const express = require("express");
const router = express.Router();

router.get("/400", (req, res) => {
  res.status(400).json({ message: "Bad Request: Invalid input" });
});

router.get("/401", (req, res) => {
  res.status(401).json({ message: "Unauthorized: Login required" });
});

router.get("/403", (req, res) => {
  res.status(403).json({ message: "Forbidden: Access denied" });
});

router.get("/404", (req, res) => {
  res.status(404).json({ message: "Not Found: Resource missing" });
});

router.post("/405", (req, res) => {
  res.status(405).json({ message: "Method Not Allowed" });
});

router.get("/409", (req, res) => {
  res.status(409).json({ message: "Conflict: Duplicate resource" });
});

router.get("/429", (req, res) => {
  res.status(429).json({ message: "Too Many Requests: Slow down" });
});

module.exports = router;
