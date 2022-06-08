import db from '../models';
function home() {
    return {
        async getHomePage(req, res) {
            const data = await db.User.findAll();
            res.render('home', { data: JSON.stringify(data) });
        },
    };
}

const homeController = home();

export default homeController;
