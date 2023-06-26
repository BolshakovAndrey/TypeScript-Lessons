"use strict";
class UserClass3 {
    constructor(skills) {
        this.all_skills = skills;
    }
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills === 'string') {
            this.all_skills.push(skillOrSkills);
        }
        else {
            this.all_skills = [...this.all_skills, ...skillOrSkills];
        }
    }
}
const all_skills = ['HTML', 'CSS'];
const user_const = new UserClass3(all_skills);
user_const.addSkill(['Js', 'JavaScript']);
console.log(user_const);
user_const.addSkill('JavaScript');
console.log(user_const);
function run(distance) {
    if (typeof distance == 'number') {
        return 1;
    }
    else {
        return '__';
    }
}
console.log(run('5')); // вызов функции с аргументом типа string
console.log(run(5)); // вызов функции с аргументом типа number
