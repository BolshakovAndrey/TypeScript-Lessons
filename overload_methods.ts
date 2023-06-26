class UserClass3 {
    all_skills: string[];

    constructor(skills: string[]) {
        this.all_skills = skills;
    }

    // перегрузка методов
    addSkill(skill: string): void;
    addSkill(skills: string[]): void;
    addSkill(skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills === 'string') {
            this.all_skills.push(skillOrSkills);
        } else {
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


// перегрузка функций

function run(distance: string): string;
function run(distance: number): number;
function run(distance: number | string): number | string {
    if (typeof distance == 'number') {
            return 1;
    } else {
        return '__';
    }
}
console.log(run('5')); // вызов функции с аргументом типа string
console.log(run(5));   // вызов функции с аргументом типа number