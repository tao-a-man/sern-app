import express from 'express';
import homeController from '../controllers/homeController';

const router = express.Router();

function initWebRoutes(app) {
    // home/
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCrud);
    router.post('/crud-create', homeController.postCreate);

    return app.use('/', router);
}

export default initWebRoutes;
