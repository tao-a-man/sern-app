import db from '../models';
import creareServices from '../services/createServices';
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
            creareServices(req.body)
                .then((respon) => {
                    console.log(respon);
                })
                .catch((err) => {
                    console.log('erro', erro);
                });
            return res.send('create');
        },
    };
}

const homeController = home();

export default homeController;
