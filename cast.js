"use strict";
let aa = 5;
let bb = a.toString();
let eE = new String(aa); // S! tring !!!
let ee = new String(aa).valueOf(); //  s! tring
let cc = 'sdf';
let dd = parseInt(cc);
const user6 = {
    name: 'David',
    email: 'david@gmail.com',
    login: 'David'
};
// используем "мапинг"
function userToAdmin(user) {
    return {
        name: user.name,
        role: '1'
    };
}
