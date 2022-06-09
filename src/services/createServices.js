import db from '../models';
import bcrypt from 'bcrypt';

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}
export function createService(data) {
    return new Promise(async (resolve, reject) => {
        try {
            const passwordHash = hashPassword(data.password);
            await db.User.create({
                ...data,
                password: passwordHash,
            });
            resolve(data);
        } catch (err) {
            reject('Create Failed', err);
        }
    });
}
export function readService() {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await db.User.findAll();
            resolve(data);
        } catch (err) {
            reject('Read Failed', err);
        }
    });
}
