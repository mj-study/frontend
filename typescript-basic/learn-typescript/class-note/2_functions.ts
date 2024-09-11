// 함수의 파라미터 및 반환값 타입 정의
// function sum(a: number, b: number): number {
//   return a + b;
// }

function sum(a: number, b: number): number {
  return a + b;
}

// 인자를 더 넣어도 ts가 잡아준다
sum(10, 20);

// 함수 옵셔널 파라미터
// ? 붙이면 선택적으로 사용가능
function log(a:string, b?:string, c?:string) {

}
log("1번째 파라미터");
log("1번째", "2번째");
