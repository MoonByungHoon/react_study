// 구조 분해 할당(Destructing assignment)
// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에
// 담을 수 있게 하는 자바 스크립트 표현식

let rest;

// 값을 할당할 변수명이 동일해야한다. 그러지 않으면 할당되지 않는다.
let c = {a: 'id', b: '11'};

let {a, b} = c;
// 결과적으로 a와 b에 각 id 11이 저장됨.

console.log(a, b);
// 결과값 {id 11}

[a, b, ...rest] = [10, 20, 30, 40, 50, 60, 70];

console.log(rest);
// 결과값 30~70