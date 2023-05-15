const jwt = require('jsonwebtoken');

const generateToken = (id) => {
	return jwt.sign({ id }, 'chetan1234', {
		expiresIn: '1h'
	});
};

module.exports = generateToken;
