import db from '../models';
import bcrypt from 'bcrypt';

const checkEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({ where: { email: email }, raw: true });
            if (user) {
                resolve(user);
            } else {
                resolve(user);
            }
        } catch (e) {
            reject(e);
        }
    });
};

export const handleLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const userExist = await checkEmail(email);
            const userChecked = {};
            if (userExist) {
                bcrypt.compare(password, userExist.password, (err, res) => {
                    if (err) {
                        userChecked.errCode = 5;
                        userChecked.errMessage = 'Compare password failed';
                    }
                    if (res) {
                        userChecked.errCode = 0;
                        userChecked.errMessage = 'Login Success';
                        delete userExist.password;
                        userChecked.user = userExist;
                        resolve(userChecked);
                    } else {
                        userChecked.errCode = 3;
                        userChecked.errMessage = 'Password not match';
                        resolve(userChecked);
                    }
                });
            } else {
                userChecked.errCode = 2;
                userChecked.errMessage = 'Email not found';
                resolve(userChecked);
            }
        } catch (e) {
            reject({ errCode: 4, errMessage: 'Error system!!' });
        }
    });
};
export const handleGetUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id == 'ALL') {
                const user = await db.User.findAll({ attributes: { exclude: ['password'] } });
                resolve(user);
            } else {
                const user = await db.User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
                resolve(user);
            }
        } catch (e) {
            reject(e);
        }
    });
};
