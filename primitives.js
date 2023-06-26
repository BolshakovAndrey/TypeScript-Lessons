"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstName} ${userEntity.surName}`;
}
const user = {
    firstName: 'Anton',
    surName: 'Bolshakov',
    city: 'Moscow',
    age: 47,
    skills: {
        devOps: true,
        dev: true,
    }
};
console.log(getFullName(user));
