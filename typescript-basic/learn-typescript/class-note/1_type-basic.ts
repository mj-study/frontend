// JS
const str = "hello";

// TS
const str2: string = "hello";
const num: number = 10;

// 배열
const arr: Array<number> = [1, 2, 3];
const heroes: Array<string> = ["캡틴", "헐크"];
const items: number[] = [1, 2, 3];

// 튜플 : 특정 순서에 타입 지정 (모든 인덱스에 타입 지정)
const address: [string, number] = ["강남", 10];

// 객체
const obj: object = {};
// const person: object = {
//   name: "cap",
//   age: 50,
// };
const person: { age: number; name: string } = { age: 100, name: "Capt" };

// 진위값
const show: boolean = true;
