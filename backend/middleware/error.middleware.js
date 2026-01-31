module.exports = (error, req, res, next) => {
  const statusCode =
    typeof error.statusCode === "number" ? error.statusCode : 500;

  const isProd = process.env.NODE_ENV === "production";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message: isProd
      ? "Something went wrong"
      : error.message || "Internal Server Error",
    timestamp: new Date().toISOString(),
  });
};
