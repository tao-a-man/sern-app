import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';

import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
import { connectDB } from './config/connectDB';

const app = express();

// config for use req.param

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

// add view engine
viewEngine(app);

// add router
initWebRoutes(app);

// connect Database
connectDB();

const port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log('Backend is running on port ' + port);
});
