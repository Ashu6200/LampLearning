const errorHandler = (err, _req, res, _next) => {
    return res.status(err.statusCode || 500).json(err);
}

module.exports = { errorHandler };
