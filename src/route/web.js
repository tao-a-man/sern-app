import express from 'express';
import homeController from '../controllers/homeController';

const router = express.Router();

function initWebRoutes(app) {
    // home/
    router.get('/', homeController.getHomePage);

    return app.use('/home', router);
}

export default initWebRoutes;
