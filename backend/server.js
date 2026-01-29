const express = require("express");
const cors = require("cors");
const statusRoutes = require("./routes/status.routes");
const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/status", statusRoutes);

// 404 handler (unknown routes)
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.statusCode = 404;
  next(error);
});

// global error handler
app.use(errorHandler);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
