//원시 데이터 타입 : string, number, bigint, boolean, undefined, null, symbol
const number= 1234;
//console.log(typeof number);

const bigint= 1234n;
//console.log(typeof bigint);


const age = 30;
const job = '개발자';

const msg = '저는 ' + job + '이고, ' + age + '살 입니다.';

//백틱(backtick) 사용법
const msg2 = `저는 ${job}이고, ${age}살 입니다.`;
//console.log(msg);
//console.log(msg2);

//null:         값이 없음, 
//undefined:    변수만 선언하고, 값이 지정되지 않음(값을 초기화하지 않음)


//배열
//const arr = [1,2,3];

//객체
const obj = {
    name : '문혜란',
    age : 30
}
//console.log(obj);
//console.log(obj.name);
//console.log(obj['name']);

const obj2 = {
    arr: [1,2,3],
    something: {
        name: '문혜란'
    }
}
//console.log(obj2);

//산술 연산자
// +, -, *, /
//console.log(10 / 5);
//console.log(2 ** 3); // 8

//증감 연산자
//등호
let a = 123;
let b = '123';
//console.log(a==b);    //true (추상 비교)
//console.log(a===b);   //false(엄격 비교)

let c = 2 < 3;          //true
let d = 30 > 50;        //false
//console.log(c && d);
//console.log(c || d);
//console.log(!a);

//널리쉬 (??) - null, undefined 가 아닌 것!
const e = undefined;
const f = null;
const g = '문혜란';

//console.log(a ?? b ?? c);

//비트 연산자 &, |, ~, ^, <<, >>

//전개 연산자(전개 구문)
const numbers = [1,2,3];
const numbers2 = [4,5,6];
const newNumbers = [...numbers, ...numbers2];

//console.log(numbers);
//console.log(...numbers);
//console.log(newNumbers);

//조건문
const h = 10;
const i = 6;

//if(h < i) console.log('h가 더 작아요!');
//else console.log('h가 더 작아요!!');

// const number3 = 10;
// switch(number){
//     case 1:
//         console.log(number);
//         break;
//     case 2:
//         console.log(number);
//         break;
//     default:
//         console.log("아무것도 해당되지 않아요!");
// }


//반복문
// for(let i = 0; i < 10; i++){
//     if(i === 7){
//         break;
//     }   // 7 이후로 빠져나옴

//     if(i === 7){
//         continue;
//     }   // 7만 빠져나옴

//     console.log(i);
// }

const arr2 = [1,2,3];

// for (const i of arr){
//     console.log(i);
// }

let j = 0;
// while(j < 10){
//     console.log(j++);
// }

console.log("-----------------");

do{
    console.log(j++);
} while (j < 10);


function bok(main){
    console.log(`${main} 볶음밥`);
}

bok('새우');
bok('제육');


const sum = function(a, b){
    console.log(a+b);
}
 
const sum2 = (a, b) => console.log(a + b);
const sum3 = (a, b) => {
    return a + b;
}


//배열 메소드
const arr = [1,2,3,4,5];
//배열 뒤에 추가, 삭제
// arr.push(6);
// arr.push(7,8);

// arr.pop();
// arr.pop();

//배열 앞에 추가, 삭제
// arr.unshift(0);

// arr.shift();
// arr.shift();

//console.log(arr); 

//forEach()
arr.forEach((number, index) => {
    console.log(`${index} 위치의 요소 : ${number}`);
});

//includes()
const arr3 = ['hello', 'world'];
// console.log(arr3.includes('hello'));
// console.log(arr3.includes('zo'));

//find()
const arr4 = [1,2,3,4,5];
// console.log(arr4.find((number) => number > 3));

//findIndex()
const arr5 = [1,2,3,4,5];
// console.log(arr5.findIndex((number) => number > 3));

//fill()
//console.log(arr.fill(10, 1, 3));

//slice
//console.log(arr.slice(2,4));

//splice
//arr.splice(2, 1, 999)
//console.log(arr);

//join
//console.log(arr3.join(';'));

//concat
const numbers3 = [123,456];
console.log(arr3.concat(numbers3));
//filter