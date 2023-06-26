const skills: string[] = ["dev", "devops", "test"];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}

const res = skills
    .filter((s: string) => s !== "dev")
    .map((s: string) => s + "+!")
    .reduce((acc, s) => acc + s)

console.log(res)

// Tuples
const skills_tuples: [number, string] = [1, "devops"];
const id = skills_tuples[0];
const skillname = skills_tuples[1];

skills_tuples.push('sdfasdf');
console.log(skills_tuples); // Выводит элемент с индексом 1 из массива skills_tuples

// const sdf = skills_tuples[2]

const arr: [number, string, ...boolean[]] = [1, "devops", true, true, true];

// READONLY
const skills_tuples_simple: [number, string] = [1, "devops"];
const a = skills_tuples_simple[0] = 2;
console.log(a)

// const skills_tuples_readonly: readonly [string, string] = ['1', "devops"];
// Альтернативный способ записи
const skills_tuples_readonly: ReadonlyArray<string> = ['1', "devops"];

// const b = skills_tuples_readonly[0] = '2'; // readonly
// skills_tuples_readonly[0] = '' //readonly




