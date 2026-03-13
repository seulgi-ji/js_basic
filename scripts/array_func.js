// array_func.js
//여러개의 값을 저장할 수 있는 배열
//특정 동일 주제에 묶여있는 2개 이상의 값 배열로 묶음.

// 배열 사용 안한 경우
const month = '월';
const tue = '화';
console.log(month, tue);

// 배열 사용한 경우
const yoil =['월','화','수','목','금','토','일'];
console.log(yoil); //모든 배열 출력
console.log(yoil[0]); // 배열 값 중 원하는 인덱스 출력
console.log(yoil.length); // 요일 객체의 길이 속성

// ======================================배열 기초1. 
// 원하는 색상을 자유롭게 6개 배열로 저장하고
// 그 중 좋아하는 색상만 인덱스로 골라 콘솔 로그로 출력하기

const Color = ['#fff','#B096FF','#96EFFF','#9EFF96','#FF9697','#E3FF96'];
console.log(`내가 좋아하는 색상은 ${Color[2]}입니다.`);

//배열 생성법 2.
// new Array() 내장함수 선언법

let wh = new Array(2); // 숫자2대입(x), 빈배열 위치2자리 삽입(O)
console.log(wh);

wh[0] = 100;
wh[1] = 50;
console.log(wh);

//=====신발 쇼핑몰 색상/사이즈 배열
let colorsize = new Array(2); //빈배열 2개 준비

// colorsize[0] = prompt('pick, white 중 하나를 선택하세요.');
// colorsize[1] = prompt('220,230,240 중 하나를 선택하세요.');

colorsize[0] = 'pick';
colorsize[1] = 220;

let order = `주문옵션 : 색상 : ${colorsize[0]} , 사이즈 : ${colorsize[1]}`;
console.log(order);

//==========================의류 쇼핑몰 선택옵션 배열로 만들기
// 사이즈 : s m l
// 색상 : 화이트, 블랙, 그레이
// 추가 상품 : 양말, 손수건

let clothing = new Array(3);

// clothing[0] = prompt('s,m,l 중 하나를 선택하세요.');
// clothing[1] = prompt('화이트, 블랙, 그레이 중 하나를 선택하세요.');
// clothing[2] = prompt('양말, 손수건 중 하나를 선택하세요.');

clothing[0] = 's';
clothing[1] = '화이트';
clothing[2] = '양말';

option = `옵션을 선택하세요. 사이즈 : ${clothing[0]} , 색상 : ${clothing[1]} , 추가상품 : ${clothing[2]} `;
console.log(option);

//=====================================배열과 사용자 정의 함수

// 날씨 소식 앱
// 출력 예시 1) 오늘은 맑음, 내일은 비 소식이 있습니다.
// 출력 예시 2) 오늘은 흐림, 내일은 눈 소식이 있습니다.
// 출력 예시 3) 오늘은 눈, 내일은 맑음 소식이 있습니다.

//날씨 상태를 저장한 배열
const weather = ['맑음','흐림','비','눈'];

//함수 실행시마다 다른 데이터를 전달하는 매개변수
weatherFunc(weather[0],weather[2]); //호출
weatherFunc(weather[1],weather[3]); //호출
weatherFunc(weather[3],weather[0]); //호출

function weatherFunc(today,tomorrow){//준비
    let msg = `오늘은 ${today}, 내일은${tomorrow} 소식이 있습니다.`;
    console.log(msg);
}

//=========================================영화 좌석 예매 배열 + 함수
// 일반 2명 좌석 선택 기준
// 일반 1명당 표 가격은 10,000원 => 20,000원

let cgvseat = new Array(2);
const price = 10000; //변수

cgvseat[0] = 'f5';
cgvseat[1] = 'f6';

//함수호출
cgvFund(cgvseat[0],cgvseat[1],price*cgvseat.length);
//

function cgvFund(seat1,seat2,price){//매개변수
    let movie = `일반 2명 예약한 좌석은 ${seat1}, ${seat2}이고,`;
    movie += `결제 가격은 ${price.toLocaleString('ko-kr')}원 입니다.` 
    console.log(movie);
}

//=============================================================구구단 함수
//아래 함수 활용 매갭변수 추가와 함께 2단 ~ 9단까지 모두 출력할 수 있는 함수 만들기
//+ 아래 함수의 틀린 부분 찾아서 고치기

dan99(2);//()안에 생성된 매개변수 자리에 대입해야 하는 값 입력 위치
dan99(3);//()안에 생성된 매개변수 자리에 대입해야 하는 값 입력 위치
dan99(4);//()안에 생성된 매개변수 자리에 대입해야 하는 값 입력 위치
dan99(5);//()안에 생성된 매개변수 자리에 대입해야 하는 값 입력 위치
dan99(6);//()안에 생성된 매개변수 자리에 대입해야 하는 값 입력 위치
dan99(7);//()안에 생성된 매개변수 자리에 대입해야 하는 값 입력 위치
dan99(8);//()안에 생성된 매개변수 자리에 대입해야 하는 값 입력 위치
dan99(9);//()안에 생성된 매개변수 자리에 대입해야 하는 값 입력 위치

function dan99(num){//num 매개변수를 생성(호출시 대입받는 값을 받는 위치)
    let dan = '';
    dan += `${num}x1=${num*1}` // num 호출시 대입 받은 값을 최종 전달 받는 위치
    dan += `${num}x2=${num*2}`
    dan += `${num}x3=${num*3}`
    dan += `${num}x4=${num*4}`
    dan += `${num}x5=${num*5}`
    dan += `${num}x6=${num*6}`
    dan += `${num}x7=${num*7}`
    dan += `${num}x8=${num*8}`
    dan += `${num}x9=${num*9}`
    console.log(dan);
}