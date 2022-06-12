import {
    handleLogin,
    handleGetUser,
    handleCreateUser,
    handleUpdateUser,
    handleDeleteUser,
} from '../services/userServices';
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
        postCreateUser(req, res) {
            const data = req.body;
            handleCreateUser(data)
                .then(() => {
                    res.status(200).json({ errCode: 0, errMessage: 'User created successfully' });
                })
                .catch((err) => {
                    res.status(200).json({ errCode: 1, errMessage: err });
                });
        },
        postUpdateUser(req, res) {
            const data = req.body;
            handleUpdateUser(data)
                .then(() => {
                    res.status(200).json({ errCode: 0, errMessage: 'User update successfully' });
                })
                .catch((err) => {
                    res.status(200).json({ errCode: 1, errMessage: err });
                });
        },
        postDeleteUser(req, res) {
            const id = req.body.id;
            handleDeleteUser(id)
                .then(() => {
                    res.status(200).json({ errCode: 0, errMessage: 'User delete successfully' });
                })
                .catch((err) => {
                    res.status(200).json({ errCode: 1, errMessage: err });
                });
        },
    };
})();

export default userController;
