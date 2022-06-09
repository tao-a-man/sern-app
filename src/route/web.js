import express from 'express';
import homeController from '../controllers/homeController';

const router = express.Router();

function initWebRoutes(app) {
    // home/
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCrud);
    // Create
    router.post('/crud-create', homeController.postCreate);
    // Read
    router.get('/crud-read', homeController.getRead);
    // Edit
    router.get('/crud-edit', homeController.getEdit);
    router.post('/crud-edit', homeController.postEdit);
    // Delete
    router.get('/crud-delete', homeController.getDelete);

    return app.use('/', router);
}

export default initWebRoutes;
