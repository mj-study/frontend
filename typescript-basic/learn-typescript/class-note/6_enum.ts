enum Shoes {
  Nike = "나이키",
  Adidas = "아디다스",
}

const myShoes = Shoes.Nike;
console.log(myShoes);

// 예제
enum Answer {
  Yes = "Y",
  No = "N",
}

// enum 활용시 안전하게 데이터 비교 가능
function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다");
  } else if (answer === Answer.No) {
    console.log("오답입니다.");
  }
}
