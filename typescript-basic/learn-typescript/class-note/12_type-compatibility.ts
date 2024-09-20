// 타입 호환 - 인터페이스
interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
}
let developer: Developer;
let person: Person;
// developer = person; // -> Person 타입에는 skill 타입이 없기때문에 Developer 에 못 넣음 , 구조적으로 더 큰 타입에서 작은 타입으로는 못넣음
person = developer; //

// 타입 호환 - 함수
let add = function (a: number) {
  // ...
};
let sum = function (a: number, b: number) {
  // ...
};

// add = sum; // 구조적으로 sum이 파라미터2개 받으므로 더 큼
sum = add;

// 제네릭
interface Empty<T> {
  //...
}
let empty1: Empty<string>;
let empty2: Empty<number>;

// interface 안에 제네릭에 의해 값이 바뀌는게 없기때문에 구조적으로 서로 호환가능
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;

// 제네릭에 의해 인터페이스에서 타입에 영향을 주므로 서로 호환x
// notEmpty1 = notEmpty2;
// notEmpty2 = notEmpty1;

