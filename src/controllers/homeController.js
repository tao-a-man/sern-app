import db from '../models';
import { createService, readService, showEditService, editService } from '../services/createServices';
const homeController = (function home() {
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
                    res.render('crudRead.ejs', { data: respon });
                })
                .catch((err) => {
                    console.log('erro', err);
                });
        },
        getEdit(req, res) {
            showEditService(req.query.id)
                .then((respon) => {
                    res.render('crudEdit.ejs', { data: respon });
                })
                .catch((err) => {
                    console.log('erro', err);
                });
        },
        postEdit(req, res) {
            editService(req.body)
                .then((respon) => {
                    res.redirect('/crud-read');
                })
                .catch((err) => {
                    console.log('erro edit', err);
                });
        },
        getDelete(req, res) {},
    };
})();

export default homeController;
