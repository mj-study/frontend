// 타입 추론 기본 1
const a = 10;

function getB(b = 10) {
  const c = "hi";
  return b;
}

// 타입 추론 기본2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
//
// let shoppingItem: Dropdown<string> = {
//   value: "hi",
//   title: "ok",
// };

// 타입 추론 기본3
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
}

const detailedItem: DetailedDropdown<string> = {
  title: "abc",
  description: "ab",
  value: "a",
  tag: "a",
};

// Best Common Type -> 가장 적절한 타입 추론
const arr = [1, 2, true, 'a'];
