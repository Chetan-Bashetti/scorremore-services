const express = require('express');
const cors = require('cors');
const dotEnv = require('dotenv');

const paymentRoutes = require('../routes/paymentRoute');
const userRoutes = require('../routes/userRoutes');
const examRoutes = require('../routes/examRoutes');

const connectDB = require('../config/database');

const { notFound, errorHandler } = require('../middlewares/errorMiddleware');

dotEnv.config({ path: '../config/config.env' });
const server = express();

server.use(cors());
connectDB();

server.use(express.json());

server.use('/user', userRoutes);
server.use('/exam', examRoutes);
server.use('/api', paymentRoutes);

server.use(notFound);
server.use(errorHandler);

server.listen('8080', () => {
	console.log(`server is listinig on port ${process.env.PORT} `);
});

module.exports = server;
