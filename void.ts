function logId2(id: string | number): void {
    console.log(id);
}
// const c = logId2(1);


type voidFunction = () => void;

const f1: voidFunction = () =>  {};

const f2: voidFunction = () =>  {
    return true;
}

const b = f2()

const skills_2 = ['Dev', 'DevOps'];

const user5 = {
    s: ['s']
}

skills_2.forEach((skill) => user5.s.push(skill));