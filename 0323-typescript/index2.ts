let OlimpicGame: object = {
    name: '쇼트트랙',
    type: '혼성 계주',
}


// OlimpicGame.name = '쇼트';

//readonly를 하면 할당한 변수 또한 변경이 불가능
// Property 'name' does not exist on type 'object'. 에러 발생
// 그래서 애초에 readonly를 쓸거라면 이 곳에 정의하는 것이 나은 것 같다!!
// const OlimpicNewGame: readonly [object, boolean] = [OlimpicGame, true];
const OlimpicNewGame: readonly [object, boolean] = [OlimpicGame, true];
// 으로 하면 따로 값을 추가했을 때, 또는 각 변수에 다른 타입을 넣었을 때 오류가 남

console.log(OlimpicNewGame)

//----------------------------------

//두 번째 실습

interface Game {
    title: string;
    price: number;
    desc?: string;
    category: string;
    platform: string;
}

let heroGame_A: Game = {
    title: 'DC 언체인드',
    price: 50000,
    category: '몰라',
    platform: '모바일',
}

console.log(heroGame_A)

// 세번쨰 실습 , 함수 타입

const sum1 = (a: number, b: number) => {
    console.log(a + b)
}

sum1(1, 2)

// const sum2 = (a: number): number => {
//     return a += a;
// }

// 배열을 인자로 넘겨주는데, 스프레드 연산자를 사용하면 펼쳐서 들어가기 떄문에 가능
const sum2 = (...numbers: number[]): number => {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum2(1, 2, 3, 4, 10))


//--------------4번째 실습: 제네릭

// id에 T를 선언하면, 타입스크립트에서 아래 로직을 실행하는데 오류가 걸림
// id가 string인지, number인지 객체인지 등등 타입을 확실히 알 수 없기 때문
// 다른 타입일 때 무조건 오류나는 상황
// 그래서 이 오류가 안 나려면 명확하게 id는 number로 선언해줘야 함
// + 제네릭과 같이 타입을 명시적으로 적어줄 수도 있다!
function arrEl<T>(arr: T[], id: number) {
    if(id > arr.length) {
        return false
    }
    return arr[id]
}
console.log(`arrEl: ${arrEl<string>(['1', '2', '3'], 4)}`);

