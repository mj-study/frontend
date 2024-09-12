interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
const haein: User = {
  age: 35,
  name: "해인",
};

// 함수에 인터페이스 활용
function getUser(user: User): void {
  // tslint:disable-next-line:no-console
  console.log(user);
}

const capt = {
  age: 40,
  name: "캡틴",
};
getUser(capt);

// 함수의 스펙에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
// tslint:disable-next-line:only-arrow-functions
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

const arr: StringArray = ["a", "b", "c"];
// arr[0] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}
let obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}
Object.keys(obj).forEach(key => {
  // tslint:disable-next-line:no-console
  console.log(key)}
)

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

const greg: Developer = {
  name: "Greg",
  age: 25,
  language: "JavaScript"
}
