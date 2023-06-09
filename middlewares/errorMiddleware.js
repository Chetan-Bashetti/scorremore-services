const notFound = (req, res, next) => {
	const error = new Error(`Not found${req.originalUrl}`);
	res.status(400);
	next(error);
};
// Below paramaters are coming from above not found code because of next()
const errorHandler = (err, req, res, next) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(statusCode);
	res.json({
		message: err.message,
		stack: err.stack
	});
};

module.exports = { notFound, errorHandler };
