//operator2.js
//증감연산자 ++, --
let x = 5; /* x 변수 생성 ->숫자 5를 x로 대입 */
// let y = ++x; /* y 변수 생성 -> 1 증가한 x를 대입 */
let y = x++; //y 변수 생성 -> x를 대입하고 나중에 x를 1증가
console.log(x,y);
let a;
let b;
let c;
let d;
//  변수만 생성하고 값이 정이 안된 상태(undefined)
a = 1;
b = 2;
c = 3;
d = 4;
console.log(`a=${a},b=${b},c=${c},d=${d}`);//a=1,b=5 템플릿 문자열
/* ++,-- */
c = d++; 
console.log(`a=${a},b=${b},c=${c},d=${d}`);//
//=========================================================================================증감 연산자 결과 예측 문제
let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;

//대입 연산자가 없으면 증감연산자 앞뒤 의미 없음
num1++; 
num2--;
num3++;
num4--;

console.log(num1,num2,num3,num4)
num1 = ++num2; // 전위 연산
console.log(num1,num2,num3,num4)
num2 = num1++; // 후위 연산
console.log(num1,num2,num3,num4)
num3 = num1+num2; 
console.log(num1,num2,num3,num4)
num4 = ++num3;
console.log(num1,num2,num3,num4)
num1 = ++num3 + 10;
console.log(num1,num2,num3,num4)
num2 = --num4 + 1;
console.log(num1,num2,num3,num4)
//=========================================================================================증감 연산자 + 질문답변함수
// const는 변경할 수 없음 -> let로 변경
// prompt 문자로 데이터 인식 -> Number() 숫자 변환
//num++ 증가전 값이 plus 인식 -> 전위연산 ++num
// let num = Number(prompt(`구입 수량을 입력하세요.`));
let num = Number('1');
let plus = ++num;
let result = `1+1 행사로 총 구입 수량은 ${plus}개입니다.`
console.log(result);
//=======================================복합대입연산자
//증감연산자는 1 증감 처리시 사용
//복합대입연산자는 1이상 큰 숫자를 -,*,/,% 등에 활용
//복합대입연산자는 새로운 값이 아닌 기존값을 활용해서 추가 대입
// 키 140  -> 145
let height = 140;
// height = 5; x (새로운 값 5만 대입됨)
// height = height + 5; // 기존 140에 +5를 더해서 대입
height += 5; //위와 뜻 동일(코드 간결화)

// 빼기 복합
height =10; //새로운값 대입
//height = height -5;
height -= 5;
console.log(height)

// 곱하기 복합
height = 20;
//height = height * 2;
height *= 2;
console.log(height)
// 나누기 복합
height = 50;
height /= 10;
console.log(height)
// 나머지 복합
height = 10;
height %= 5;
console.log(height)
// =====================================복합대입연산자 예제
// 용돈기입장 앱
// 기존에 지갑에 있는 돈 + 이번달 받은 용돈 = 결과
// let wallet = 10000;
// // let month = Number(prompt('이번 달 용돈 얼마 받았나요?'));
// let month = Number('5000');
// wallet += month;
// let total = `용돈을 더해서 총 ${wallet}원이 되었습니다.`;
// console.log(total);

//지갑 10000준비
//편의점에서 물건을 구입할때 지갑의 돈이 나가는 상황
//삼각김밥 2000, 아이스크림 3000, 과자 4000, 남은 돈
// 결과형태) 편의점 총 구입비는 OOOO원이고 남은돈은 OOOO원입니다.
let wallet = 10000;
let expense1 = 2000;
let expense2 = 3000;
let expense3 = 4000;
let month = Number('9000');
total = expense1+expense2+expense3;
wallet -= expense1;
wallet -= expense2;
wallet -= expense3;
result = `현재 남은 돈은 ${wallet}원`;
result = `편의점 총 구입비는 ${totle.toLocaleString('ko-kr')}원, 남은 돈은 ${wallet.toLocaleString('ko-kr')}원`;
console.log(result);
