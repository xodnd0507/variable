//var 이름; //선언
//이름 = 'Youn'; //할당 / 한번 더 할당하면 재할당

//var 이름name = 'Youn'; //재선언 재할당 전부 가능
//let 이름 = 'Youn'; //재선언 불가능 재할당 가능 실수 방지 가능
//const name = 'Youn'; //재선언 재할당 전부 불가능 변하면 안되는 값을 보관하기 좋음

let 나이 = 19;
const 출신지역 = '충청남도 천안시 서북구 두정동';


//다음을 실행했을 때 콘솔창에서 출력되는 것
// var name = 'park';
// var id = 0;

// function showName(){
//     var name = 'kim';
//     var id = 1;
//     console.log(name);
// }

// showName();
// console.log(id);

// 철수는 은행에 예금을 하러 갔는데 예금 금액에 따라 이율이 달라지는 것을 보고 크게 당황했습니다.
// 첫 예금액이 5만원 미만이면 이율이 연 15퍼센트,
// 첫 예금액이 5만원 이상이면 이율이 연 20퍼센트라고 합니다.
// 그래서 민준이는
// (1) 변수에 예금액을 넣으면
// (2) 2년 후의 총 예금액을 자동으로 콘솔창에 출력해주는 기능을 자바스크립트로 만들려고하는데
// 어떻게 코드를 짜면 될까요? 


// var 예금액 = 10000;
// var 미래예금액 = 0;

// if ( 예금액 >= 50000 ){
//   미래예금액 = 예금액 * 1.2 * 1.2 ;
// } else {
//   미래예금액 = 예금액 * 1.15 * 1.15 ;
// }

// console.log(미래예금액) 
// (동작예시)
// var 예금액이라는 변수에 60000을 집어넣으면 86400 이게 콘솔창에 출력되어야 합니다. (이자 20%가 2번 붙음)
// var 예금액이라는 변수에 10000을 집어넣으면 13225 이게 콘솔창에 출력되어야 합니다. (이자 15%가 2번 붙음)



// 방금 마신 커피의 3분의 2만큼 총 2번 리필해주는 카페가 있습니다.
// 예를 들면 처음 커피를 90ml 주문하면 첫 리필은 60ml를 해주며, 그 다음 리필은 40ml를 해주는 카페입니다.
// 그럼 처음 주문한 커피 양에 따라서 최대한 마실 수 있는 커피를 콘솔창에 계산해주는 코드를 작성해봅시다. 

var first = 360;
var total = 0;

total = first + first * 2 / 3 + first * 2 / 3 * 2 / 3

console.log(total)

// (동작예시)
// var first에 360을 집어넣으면 위 코드를 실행했을 때 콘솔창에 760이 출력되어야합니다. (360 + 240 + 160)