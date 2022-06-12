import { handleLogin, handleGetUser } from '../services/userServices';
const userController = (function home() {
    return {
        postLogin(req, res) {
            const username = req.body.username;
            const password = req.body.password;
            if (!username || !password) {
                res.status(200).json({ errCode: 1, errMessage: 'Invalid username or password' });
            } else {
                handleLogin(username, password)
                    .then((userChecked) => {
                        res.status(200).json({
                            errCode: userChecked.errCode,
                            errMessage: userChecked.errMessage,
                            user: userChecked.user,
                        });
                    })
                    .catch((err) => {
                        res.status(500).json({ errCode: err.errCode, errMessage: err.errMessage });
                    });
            }
        },
        getUser(req, res) {
            const id = req.query.id;
            if (!id) {
                return res.status(200).json({
                    errCode: 1,
                    errMessage: 'Invalid id for user',
                    user: {},
                });
            }
            handleGetUser(id)
                .then((user) => {
                    return res.status(200).json({
                        errCode: 0,
                        errMessage: 'Get User Success',
                        user: user,
                    });
                })
                .catch((err) => {
                    console.log('err', err);
                    return res.status(200).json({
                        errCode: 1,
                        errMessage: err.errMessage,
                        user: {},
                    });
                });
        },
    };
})();

export default userController;
