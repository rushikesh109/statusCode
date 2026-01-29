module.exports = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    statusCode,
    message: error.message || "Internal Server Error",
    timestamp: new Date().toISOString(),
  });
};
