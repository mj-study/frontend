// ES2015 (ES6) 부터 사용
class Person {
  // 클래스 로직 작성
  constructor(name, age) {
    console.log("생성되었습니다.");
    this.name = name;
    this.age = age;
  }
}

const hangang = new Person("한강", 34);
console.log(hangang);
