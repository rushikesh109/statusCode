const express = require("express");
const router = express.Router();

// helper to simulate async behavior
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    next(error);
  }
};

router.get(
  "/400",
  asyncHandler(async (req, res) => {
    res.status(400).json({ message: "Bad Request: Invalid input" });
  })
);

router.get(
  "/401",
  asyncHandler(async (req, res) => {
    res.status(401).json({ message: "Unauthorized: Login required" });
  })
);

router.get(
  "/403",
  asyncHandler(async (req, res) => {
    res.status(403).json({ message: "Forbidden: Access denied" });
  })
);

router.get(
  "/404",
  asyncHandler(async (req, res) => {
    res.status(404).json({ message: "Not Found: Resource missing" });
  })
);

router.post(
  "/405",
  asyncHandler(async (req, res) => {
    res.status(405).json({ message: "Method Not Allowed" });
  })
);

router.get(
  "/409",
  asyncHandler(async (req, res) => {
    res.status(409).json({ message: "Conflict: Duplicate resource" });
  })
);

router.get(
  "/429",
  asyncHandler(async (req, res) => {
    res.status(429).json({ message: "Too Many Requests: Slow down" });
  })
);

module.exports = router;
