// 화살표 함수
// map()과 () => {}

const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

// materials.length만큼 반복
// idx는 row를 카운트해줌.


let newArr = materials.map((e, idx) => {
  console.log(e, idx + 1);

  return e.length * 2;
});

// 회문
let palindromes = [
  '스위스',
  '팥콩밭',
  '별똥별',
  '음악',
  '인도인',
  '필리핀',
  '다시합시다',
  '여보안경안보여',
  '역삼역'
];

const contents = palindromes.filter((str) => {
  // split은 문자열을 문자 단위로 쪼개준다. 만약 '' 사이에 , 을 넣으면 , 을 넣어준다.
  // reverse는 배열의 인덱스들을 거꾸로 뒤집어준다.
  // 조인은 나눠진 문자열들을 합쳐주는 역할을 한다.
  if(str === str.split('').reverse('').join('')){
    return str;
  }
});

console.log(contents);

const contents2 = palindromes.map((str) => {
  if(str === str.replace(/(\s*)/g, "").split('').reverse('').join('')){
    return str;
  }
});

console.log(contents2);