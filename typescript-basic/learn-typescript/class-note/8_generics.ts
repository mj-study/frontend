// function logText(text: string) {
//   console.log(text);
//   return text;
// }
// logText("Hello");

// function logText<T>(text: T):T {
//   // tslint:disable-next-line:no-console
//   console.log(text);
//   return text;
// }
// logText<string>("Hello World");
// logText<boolean>(true);
// logText<number>(3);

// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// const a = logText("a");
// logText(10);

// 제네릭 이용
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const word = logText<string>("abc");
word.split(""); // 제네릭으로 데이터타입 추론이 가능하여 string 함수 사용 가능
logText<number>(10);
const bool = logText<boolean>(true);

// 인터페이스에 제네릭 선언
interface Dropdown_v1 {
  value: string;
  selected: boolean;
}
const obj: Dropdown_v1 = { value: "abc", selected: false };

interface Dropdown_v2<T> {
  value: T;
  selected: boolean;
}
const obj2: Dropdown_v2<number> = { value: 10, selected: false };

// 제네릭 타입 제한
function logTextLength<T>(text: T[]): T[] {
  logTextLength(text.length);
  text.forEach((item) => {
    // tslint:disable-next-line:no-console
    console.log(item);
  });
  return text;
}

logTextLength<string>(["hi", "abc"]);

// 제네릭 타입 제한2 - 정의된 타입 이용
interface LengthType {
  length: number;
}

function logTextLength_v2<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption("name");
