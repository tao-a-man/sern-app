'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                email: 'admin@gmail.com',
                password: '1234',
                firstName: 'Đức Thịnh',
                lastName: 'Nguyễn Lương',
                address: 'Đồng Tháp',
                gender: 1,
                roleId: 'R1',
                phoneNumber: '0924668805',
                positionId: 'P4',
                image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1654830000&x-signature=uyWRs%2BWwv3lV3aIkHfrrvyGXOgI%3D',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    },
};
