function logMessage_v1(value: any) {
  console.log(value);
}

logMessage_v1("hello");
logMessage_v1(10);

function logMessage_v2(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}

logMessage_v2("hello");
logMessage_v2(10);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// 공통된 속성만 접근 가능
// 유니온
function askSomeone(someone: Developer | Person) {
  // someone.name;
}
askSomeone({ name: "디벨로퍼", skill: "웹 개발" });
askSomeone({ name: "김또깡", age: 30 });

// 인터섹션
function askSomeone_v2(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}
askSomeone_v2({ name: "디벨로퍼", skill: "웹 개발", age: 35 });

// let seho: string | number | boolean;
// let capt: string & number & boolean; // 인터섹션 타입
