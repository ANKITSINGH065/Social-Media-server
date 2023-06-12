export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal server error";
  err.statusCOde = err.status || 500;

  if (err.code === 11000) {
    (err.message = `Dublicate ${Object.keys(err.keyValue)} Entered`),
      (err.statusCOde = 400);
  }
  if (err.name === "CastError") {
    (err.message = `Invalid ${err.path}`), (err.statusCOde = 400);
  }
  res.status(err.statusCOde).json({ success: false, message: err.message });
};

export const asyncError = (passedFunc) => (req, res, next) => {
  Promise.resolve(passedFunc(req, res, next)).catch(next);
};
