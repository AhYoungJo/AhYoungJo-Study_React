console.log('안녕');

// 변수 선언 방법
const msg: string = '타입스크립트를 배워보자';
const num: number = 100;
console.log(`msg: ${msg}, num: ${num}`);


// 함수 정의 방법
function sum(x: number, y: number) {
    return x + y;
}
console.log(`10 + 20은 ${sum(10, 20)}입니다.`)

let a: number = 1;
a = 2;
// a = 'hello'  < type error 발생

let b: string = 'hello';
let c: boolean = true;
let d: undefined;
let e: null = null;


// 배열
// 1. number만 들어올 수 있는 배열
// 타입[]
let numArr: number[] = [1, 2, 3, 4, 5];

// 2. string만 들어올 수 있는 배열
// 이번엔 Array<타입>으로 써보기
//<>는 여러개 쓸 수 없나요?
let strArr: Array<string> = ['apple', 'banana', 'melon'];
let Arr2: Array<string | number> = ['apple', 'banana', 'melon', 1];

console.log('Arr2: ', Arr2)

// 3. 여러 타입을 지정하고 싶을 때
// 또는 이기 때문에 순서는 중요하지 않음
let arr1: (number | boolean | string)[] = [1, true, 'string'];
let arr2 = [[1,2,3], true, null];
console.log(arr2)
// let arr2 : Array<boolean | null | number[]> = [true, null, [1, 2, 3]];

//4. 어떤 타입이든 상관없을 때
let arr3: any[] = [1, 2, 3, 'wow', true, null];

// object
let obj1: object = {
    name: 'codingon',
    grade: 1,
};

console.log('obj1', obj1)

// --------------------------타입 스크립트에만 있는 문법
// 1. Tuple
// 순서와 개수가 있는 배열
// push를 하면 값이 추가가 된다.
let drink: [string, number] = ['사이다', 1000];
drink[0] = '콜라';
drink.push('음료수');
console.log('drink', drink)

// 2. readonly: 요소 타입 순서와 길이 고정
// readonly를 push를 했을 때 오류가 발생한다.
const drink2: readonly [string, number] = ['사이다', 1000];
// drink2.push('음료수');


// 3. enum(열거형) : 값에 이름을 고정시킴
// enum은 문자열 또는 숫자만 가능
// 값이 없으면 위에서부터 0으로 순서대로 1씩 증가하면서 할당됌 (=index 값이 들어감)
//만약 권한을 number로 관리를 할 때 (아래는 숫자 열거형)
enum Auth {
    admin, 
    user = 0,
    guest = 2,
    guest2,
}
// 문자 열거형 버전
enum Cafe {
    americano = '아메리카노',
    latte = '카페라떼',
}
//enum의 값 접근하는 방법
console.log('Auth.admin: ', Auth.admin, 'Auth.guest: ', Auth.guest, ', Auth.guest2: ', Auth.guest2);
console.log('Cafe.latte: ', Cafe.latte);
// 변경을 시도하면 다음 에러가 뜸
// Cafe.latte = '라뗴'
// Cannot assign to 'latte' because it is a read-only property.

// 아래처럼 혼용해서 사용가능하지만, enum을 사용하는 목적을 고려하면 권장하진 않음
enum Class {
    subject = 'Math',
    time = 10,
}
console.log('enum Class: ', Class)

// 4. any
// 보통 타입을 미리 알기 어려울 때 사용
// 4-1. 명시적으로 쓰는 방법
let val: any;
val = true;
val = 1;
val = 'str';
val = { name: 'codingon'};


// 4-2. 암묵적으로 쓰는 방법
let val2;
val2 = false;
val2 = 'hi';


// ---------------------------------
//사용자 정의 type
//1. interface : 여러 오브젝트의 타입을 정의하는 규칙
interface Student{
    name: string;
    isPassed: boolean; 
}

// object 대신 interface로 만든 type을 써주면 key와 type까지 지정 가능
const student1: Student = {
    name: 'codingon',
    isPassed: true,
    // Student 키값을 추가하면 에러 발생
    // addr: 'seoul', < error 발생
}

//2. interface 상속: extends
// interface BaseballCLub extends Student {
//     position: string;
//     height: number;
//     backNumber?: number;
// }

enum Score {
    Aplus = 'A+',
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D'
}

interface BaseballCLub extends Student {
    position: string;
    readonly height: number; //바꿀 수 없는 값
    backNumber?: number;
    // score: typeof Score;
    [gade: number]: Score; //한년: 섬수
}

const student2: BaseballCLub = {
    name: '김ㅇㅇ',
    isPassed: false,
    position: '타자',
    height: 190,
    // score: Score.A,
    1: Score.A //키 값 변경
}

console.log(student2.position, student2)

student2.position = '투수';

console.log(student2.position)


// 2.type
// 사용자 정의 타입은 문자열, 객체, 숫자 등등 다양하게 지정 가능
// 타입으로 함수도 들어갈 수 있다.
type Breakpoint1 = 500 | 700 | 1000;
enum Breakpoint2 {
    SM = 500,
    MD = 700,
    LG = 1000,
}


//타입을 사용할 것이라면 각 키마다 값이 뭐였는지 기억해야 함
const width: Breakpoint1 = 500;

//키값을 불러와 사용한다면 기억할 필요 ㅓㅄ음...
const width2: Breakpoint2 = Breakpoint2.LG;

//교차 타입??? 두개 이상의 타입을 합치는 것
interface Toy {
    name: string;
    start(): void;
}

interface Car {
    name: string;
    color: string;
    price: number;
}

type ToyCar = Toy & Car;
const toyCar: ToyCar = {
    name: 'tayo',
    start() {
        console.log('출발~');
    },
    color: 'blue',
    price: 10000, 
}

type Gender = 'F' | 'M';
type Person = {
    name: string;
    age?: number; // 넣어도 되고 안 넣어도 되고
    like?: string[];
    gender: Gender; //타입안에 다른 타입으로 지정가능
}

let daniel: Person = {
    name: 'daniel',
    gender: 'F',
}


//--------------------------
//function 타입

//선택적 매개변수(?)를 작성한 후 뒤에 값을 추가할 수 없음
function print (a: number, b?: number, c?: number) {
    console.log('print() 출력');
    console.log(`a: ${a}, b: ${b}, c: ${c}`)
}

print(2, 3, 4); // a: 2, b: 3, c: 4
print(2, 3); // a: 2, b: 3, c: undefined
print(2); // a: 2, b: undefined, c: undefined

// 매개변수에 기본값을 할당할 수 있음
// 기본값으 할당한 경우, 값을 넣어주지 않아도 오류가 나진 않음
function print2 (a: number, b: number, c = 100) {
    console.log('print2() 출력');
    console.log(`a: ${a}, b: ${b}, c: ${c}`)
}

print2(1, 2); // a: 1, b: 2, c: 100
print2(1, 2, 3) // a: 1, b: 2, c: 3
// print2(1);
//Expected 2-3 arguments, but got 1.

//리턴해줄 값이 없다면 void를 사용한다.
function sayHello(): void{
    console.log('Hi~');
}

sayHello()

// 리턴해줄 값이 없어서 voide썼는데, 정해진 타입이 있다면 생략 가능
function sayHelloStr(): string{
    return 'hello';
}

console.log(sayHelloStr())

//화살표 함수도 가능함 (궁금했던 건데 해소)
// const squareArea = (x: number, y: number) => {
//     return x * y;
// }

//생략하거나 명시적으로 반환할 값의 타입을 적어줘도 됨
const squareArea = (x: number, y: number): number => {
    return x * y;
}

// inerface 정의할 때 함수 타입을 표현하는 방법
interface Greet {
    name: string;
    hi(): string; // 함수가 void일 때
    bye(a: number): string; // 매개변수가 있을 떄
}

const condingon: Greet = {
    name: 'codingon',
    hi() {
        // console.log('hi');
        return '여기는' + this.name
    },
    // 타입의 구조를 그대로 가져와서 쓰면 된다 헷갈리지 말자
    bye(age: number) {
        return `나이는 ${age}`
    }
};


console.log(condingon) // { name: 'codingon', hi: [Function: hi], bye: [Function: bye] }
//함수안의 함수를 실행할 때는 아래처럼
console.log(condingon.hi()); // 여기는codingon
console.log(condingon.bye(23)); // 나이는 23

//함수의 끝이 없을 때, 즉 반복을 무한정 해야 할 때 'never'라는 타입을 적어준다.
//사용하는 상황이 매우 드물다.
function goingOn(): never{
    while(true) {
        console.log('go!');
    }
}


// -------------------------generic
/** 선언할 때 타입을 지정하기 어려운 케이스가 존재 
 * 예:
 * 1. 데이터 타입을 외부에서 지정할 때
 * 2. 생성 시점에 타입을 명시할 때
 * => 재사용성 증가
 * -=> 타입을 변수처럼 사용하면
 * 사용방법: <T> 형태로 주로 사용
*/

function numArrLen(arr: number[]): number{
    return arr.length;
}

function strArrLen(arr: string[]): number {
    return arr.length;
}

console.log(numArrLen([1, 2, 3]));
console.log(strArrLen(['1', '2', '3']));

// 두 개의 비슷한 함수를 어떻게 재사용할 수 있을까?
// <T>를 이용해서 매개변수를 선언하는 공간을 하나 더 만든다!
// T 에는 type만 올 수 있음

// --     --           = string[]
function arrLen<T>(arr: T[]) {
    return arr.length;
}

console.log(arrLen<string | number>(['1', '2', '3',]))

function objLen<T extends object>(obj: T) {
    return Object.keys(obj).length;
}
/** 각 key 이름들의 타입을 지정해주지 않았을 경우 발생하는 에러
 * No overload matches this call.
  Overload 1 of 2, '(o: {}): string[]', gave the following error.
    Argument of type 'T' is not assignable to parameter of type '{}'.
  Overload 2 of 2, '(o: object): string[]', gave the following error.
    Argument of type 'T' is not assignable to parameter of type 'object'.ts(2769)

해당 오류는 Object.keys() 함수의 매개변수로 전달된 타입이 예상한 형태와 일치하지 않는다는 것을 의미합니다. 즉, 함수의 매개변수 obj의 타입 T가 {}나 object에 할당할 수 없는 타입으로 간주되었다는 것을 의미합니다.
이 오류를 해결하려면 TypeScript에게 obj가 객체임을 명시적으로 알려주어야 합니다. 이를 위해서는 제네릭 타입 T를 제한해야 합니다.

 */

//T는 객체형태로 반환이야 그래서 배열이 타입일 땐 []를 써줘야 하는거야

console.log(objLen({
    name: '이름',
    age: 20,
}));

function printSome<T>(x: T, y: T) {
    console.log(x, y);
}

printSome<boolean>(true, false);
printSome<string | number>('1', 2);


// T를 타입으로 지정할 수도 있음
interface Phone<T> {
    company: string,
    createAt: Date,
    option: T
}

// 객체는 인터페이스를 잘 사용 안하나? 어차피 객체니까 인터페이스로 안 만들어된다는 뉘앙스로 말씀하시는데...
type iphoneOption = {
    color: string;
    storage: number;
}

const iphone: Phone<iphoneOption> = {
    company: 'apple',
    createAt: new Date('2024-03-23'),
    option: {
        color: 'black',
        storage: 128
    }
}

console.log(iphone)

type galaxyOption = {
    color: string;
    isAI: boolean;
};

const galaxy: Phone<galaxyOption> = {
    company: 'samsung',
    createAt: new Date('2024-03-23'),
    option: {
        color: 'white',
        isAI: true
    }
}

console.log(`galaxy: ${galaxy}`)

