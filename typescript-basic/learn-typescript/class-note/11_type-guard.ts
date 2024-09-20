interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: "Tony", age: 33, skill: "Iron Making" };
}

const tony = introduce();

if ((tony as Developer).skill) {
  const skill = (tony as Developer).skill;
  // tslint:disable-next-line:no-console
  console.log(skill);
} else if ((tony as Person).age) {
  const age = (tony as Person).age;
  console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
