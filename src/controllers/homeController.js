import db from '../models';
import { createService, readService } from '../services/createServices';
function home() {
    return {
        async getHomePage(req, res) {
            const data = await db.User.findAll();
            return res.render('home', { data: JSON.stringify(data) });
        },
        getCrud(req, res) {
            return res.render('crud');
        },
        postCreate(req, res) {
            createService(req.body)
                .then((respon) => {
                    return res.send('create');
                })
                .catch((err) => {
                    console.log('erro', erro);
                });
        },
        getRead(req, res) {
            readService()
                .then((respon) => {
                    return res.render('crudRead.ejs', { data: respon });
                })
                .catch((err) => {
                    console.log('erro', err);
                });
        },
    };
}

const homeController = home();

export default homeController;
