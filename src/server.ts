import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import { config } from './config/config';
import Logging from './library/Logging';
import PhoneBookRoutes from './routes/PhoneBook';

const router = express();

/* connect to mongo */
mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        Logging.info('connected to MongoDB');
        startServer();
    })
    .catch((error) => {
        Logging.error('Connection Error From MongoDB');
        Logging.error(error);
    });

const startServer = () => {
    router.use((req, res, next) => {
        Logging.info(`Incomming -> Method: [${req.method}] - Url: [${req.url}] - IP:[${req.socket.remoteAddress}] `);

        res.on('finish', () => {
            Logging.info(`Outgoing -> Method: [${req.method}] - Url: [${req.url}] - IP:[${req.socket.remoteAddress}] - Status: [${res.statusCode}] `);
        });
        next();
    });

    router.use(express.urlencoded({ extended: true }));
    router.use(express.json());

    /** Rules of our API */
    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        next();
    });

    /** Routes */
    router.use('/phonebook', PhoneBookRoutes);

    /** Healthcheck */
    router.get('/ping', (req, res, next) => res.status(200).json({ hello: 'world' }));

    /** Error handling */
    router.use((req, res, next) => {
        const error = new Error('Not found');

        Logging.error(error);

        res.status(404).json({
            message: error.message
        });
    });

    http.createServer(router).listen(config.server.port, () => Logging.info(`Server is running on port ${config.server.port}`));
};
