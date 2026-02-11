# IBM X RED HAT AI 과정

## JavaScript

## 02-11 수업내용


## **호이스팅** 개념 정리
### 기본 개념
- **호이스팅(Hoisting)**이란, 자바스크립트 엔진이 코드를 실행하기 전, 변수나 함수의 ‘선언’ 부분을 해당 유효 범위(scope)의 최상단으로 끌어올리는 것과 같이 동작하는 방식을 의미한다.
  - 선언(Declaration): var myVar; 와 같이 변수가 존재함을 알리는 부분이다. 이 부분이 끌어올려진다.

  - 할당(Assignment): myVar = 10; 처럼 변수에 실제 값을 넣는 부분이다. 이 부분은 원래 위치에 남아있다.
- 예시코드
```
var myVar; 

console.log(myVar); // 아직 값이 할당되지 않았으므로 'undefined' 출력

myVar = 10; // 이 시점에 값이 할당됨

console.log(myVar);
```
### 대상과 동작방식
- **호이스팅** 은 var, let, const, 그리고 함수 선언에 따라 모두 다르게 동작한다.
1. var 변수 호이스팅 : 선언만 위로
오직 선언부(var name;)만 스코프 최상단으로 끌어올려지며, undefined로 초기화된다. 값을 할당하는 부분은 원래 자리에 그대로 남아있다.
```
console.log(name); // 결과: undefined
// var name; (선언부가 호이스팅되어 이 위치에 온 것처럼 동작)
var name = '박건일'; // 할당은 이 위치에서 이루어짐
console.log(name);
```
2. let, const와 TDZ (Temporal Dead Zone)
let과 const로 선언된 변수도 호이스팅이 되기는 하지만, var처럼 undefined로 초기화되지 않는다. 대신, 스코프의 시작 지점부터 변수 선언문에 도달하기 전까지 ‘일시적 사각지대(Temporal Dead Zone, TDZ)’ 에 놓이게 된다. TDZ에 있는 변수에 접근하려고 하면 undefined가 아닌, 훨씬 명확한 ReferenceError가 발생한다.
```
console.log(job); // ReferenceError: Cannot access 'job' before initialization
// let job; 이 호이스팅되었지만, TDZ에 있기 때문에 접근할 수 없다.

let job = '박건일'; // 이 라인을 지나야 TDZ에서 벗어난다.
console.log(job); // 결과: '박건일'
```
TDZ는 변수가 선언되기 전에 사용하는 실수를 막아주기 때문에, 코드를 훨씬 더 안전하고 예측 가능하게 만들어 준다.
3. 함수 표현식과 화살표 함수
이들은 함수가 아니라 변수의 규칙을 그대로 따른다. 함수 자체가 변수에 할당되는 형태이기 때문이다. 결과적으로, 어떤 키워드(var, let, const)로 선언했는지에 따라 호이스팅 동작이 결정된다.
---

- var는 스코프 범위가 함수 단위이고, undefined로 초기화되는 호이스팅 방식 때문에 예기치 않은 버그를 만들 가능성이 높다.
- let과 const는 블록 스코프를 따르며, TDZ(일시적 사각지대) 때문에 선언 전에 변수에 접근하면 명확한 오류(ReferenceError)를 발생시킨다. 이는 실수를 즉시 발견하게 도와주므로 훨씬 안전하다.
- 코드를 작성할 때, 해당 스코프(함수나 블록)에서 사용할 변수들은 가급적 가장 위쪽에 모아서 선언하는 것이 좋다.




### 1.5 DOM 객체 준비 메소드

- 기본 형식
```jsx
window.onload=function(){   //브라우저가 코드를 읽을 때 위에서부터 아래로 읽어내려가는 방식
	실행문
}
```
### 1.6 DOM 객체의 속성 관련 메소드
| 메소드 이름	| 설명|
|-------|----|
|`getAttribute(’속성명’) `|	태그의 속성 값을 가져오는 메소드|
|`setAttribute(’속성명’,값)` | 태그의 속성 값을 변경하는 메소드|


### 1. 7 DOM 객체의 텍스트 속성
| 메소드 이름 |	설명 |
|------|----|
|`innerHTML=’내용’`	| 내용은 텍스트로 인식, 태그는 태그로 인식|
|`innerText=’내용’ `|	내용에 있는 태그를  그냥 문자로 인식(사용자에게 보여지는 text값만 읽어오는)|
|`textContent=’내용’`|	내용에 있는 태그를  그냥 문자로 인식(<script>나 <style> 태그에 상관없이 해당 노드가 가지고 있는 텍스트 값을 모두 읽어온다.)|


---

## 02-09 4. 객체와 배열 - 기본 내장 객체들
### 1.1 String 객체
- 문자열을 객체로 만들어 문자열을 다루기 쉽도록 해준다

| 메서드 명 | 설명 |
|----------|------|
| charAt(index) | 매개변수로 지정한 인덱스 위치의 문자를 반환한다. |
| substr(idx[, len]) | 인덱스 `idx`부터 `len`개의 문자를 잘라 새로운 문자열을 반환한다. `len`이 생략되면 문자열 끝까지 반환한다. |
| match(str) | 문자열에 `str`이 있는지 확인한다. (일치 결과 배열 또는 `null` 반환, 정규식 사용 가능) |
| substring(idxA, idxB) | `idxA`부터 `idxB` **이전까지**의 문자열을 반환한다. |
| toLowerCase() | 문자열을 소문자로 변환한 새로운 문자열을 반환한다. |
| toUpperCase() | 문자열을 대문자로 변환한 새로운 문자열을 반환한다. |
| indexOf(s[, idx]) | 문자열 앞에서부터 특정 문자 `s`의 위치를 찾는다. (`idx`는 검색 시작 위치) |
| replace(a, b) | 문자열에서 `a`를 찾아 `b`로 변경한 새로운 문자열을 반환한다. |
| concat(a, b, …) | 현재 문자열 뒤에 문자열 `a`, `b` 등을 순서대로 연결한 새로운 문자열을 반환한다. |
| split(separator[, limit]) | 지정한 구분자(`separator`)를 기준으로 문자열을 분리해 **문자열 배열**을 반환한다. |


-substr(인덱스부터 len 문자 개수만큼 문자열 리턴)
```jsx
let num = prompt('생년월일 입력');
let a = num.length;   //6글자
let month = num.substr(2,2);   
let day = num.substr(4,2);    
```

- match(문자열 확인해서 true,false 반환)
```jsx
let str= prompt('언어 입력');
  if(str.math('자바')||str.match('데이터베이스')){
  alert('백엔드');
}
else if(str.match('react')){
  alert('프론트');
} 
```

- charAt(인덱스에 위치하는 문자 반환)
```jsx
let str = prompt('주민번호');
  //charAt(index)
let n = str.charAt(6);

if(n ==1 || n==3){
  alert('남자')
}
else if(n==2 || num ==4){
  alert('여자');
}
```

- indexOf(특정문자의 인덱스 찾기), replace(특정 문자열 변경)
```jsx
let n = 'Computer';

console.log(n.indexOf('C')); //0 특정문자의 인덱스 찾기
console.log(n.indexOf('m')); //2 
console.log(n.replace('C', 'c')); //C => c //특정 문자열 변경

let m = '  computer'; 
    // console.log(m.trim()); // 앞 뒤 공백 제거
    // console.log(n.slice(2)); //mputer **2이상 끝까지 출력**
    // console.log(n.slice(2,4));  //mp  **2이상 4미만 출력**
```
 - substr은 시작 과 끝의 포함안하는 인덱스 범위, slice는 시작부터 몇 글자 가져올지 길이 차이


- concat(a,b...) (현재 문자열 뒤 a,b 순서대로 연결)
```jsx
const str1 = "Hello";
const str2 = "world";

console.log(str1.concat(str2)); //Helloworld  str1기준으로 str2로 나열
console.log(str2.concat(", ", str1));  //world, Hello  str2기준으로 ,를 사용해 str1나열
```
- 눈으로 보기에는 문자열(기본형) 같아보이지만,
내부적으로 js에서 **오토박싱(자동 박싱)**으로 내부에서 객체로 처리한다
  - 오토 박싱 - 메서드 사용 시 JS가 임시로 객체를 감쌈
```jsx
new string("hello") -> 객체안에 있는 메소드에 접근 가능
```jsx
- 문자열 (기본형) : 값 자체를 비교
```
let a ="hi";
let b = "hello";
```
- 문자열 객체형(문자열을 객체로 감싼 것) -> 메소드와 속성 가짐
```jsx
let a1 = new string("hi");
let b1 = new string("hi"); //객체이므로 주소 기준 비교
```
- split(문자열 분리하여 문자열 배열 만들어 리턴)
```jsx
let n = new String("공부는 어렵지만, 재밌네요");
//split(separater)
document.write(n.split(",")[0] +"<br>"); //공부는 어렵지만, 배열로 리턴함
document.write(n.split(",")[1] + "<br>");  //재밌네요

//split(separater, limit)
document.write(n.split(",",1) +"<br>"); //공부는 어렵지만,   쉼표기준으로 나누되 1개까지만 출력
document.write(n.split(",",2) +"<br>"); //공부는 어렵지만, 재밌네요
document.write(n.split(",",3) +"<br>"); //공부는 어렵지만, 재밌네요 쉼표 기준으로 나눈 결과를 최대 1개까지만 배열에 저장
```

### 1.2 Number 객체

- 문자열을 숫자로 변환
  -변수식, 생성자 함수식 선언방식 존재

 
| 메소드명 | 설명 |
|----|----|
| toString() | 숫자를 문자열로 변환 |
| toFixed()  | 소수점 자리수를 지정하여 문자열로 반환 |

### 1.3 Math 객체

- 수학 계산을 위해 제공

  * Math.ceil(숫자) : 자리올림
  * Math.floor(숫자) : 자리 내림
  * Math.round(숫자) : 반올림해서 반환
  * Math.random() : 0~1 보다 작은 임의의 실수 리턴
```jsx
//0~1 random 수를 무작위로 반환(실수형태)
let num = Math.random();
console.log(num); //0.2038...... 랜덤값 실수

let num1 = Math.round(Math.random() * 20)+3; // 1 < Math.random < 23
console.log(num1);

50~81 미만
let num2 = Math.round(Math.random() * 50) + 31;
console.log(num2);
```
### 1.4 Date 객체

시간 정보를 담는 객체

```jsx
let now = new Date();  현재 날짜와 시간(시,분,초) 값으로 초기화된 객체 생성

let day = new Date(2025,1,1); //날짜 지정
```
```jsx
//특정 날짜 시간
let day2 = new Date(2026,11,25);
console.log(day2);   //Mon Jan 25 2027 00:00:00 GMT+0900 (한국 표준시)
//월이 하나 증가되서 출력됨
    
let day3 = new Date(2026,1,17); //js에서는 month가 0부터 시작됨!!!
console.log(day3);

//오늘 날짜만 출력
console.log(day.toLocaleDateString());
//오늘 시간만 출력
console.log(day.toLocaleTimeString());
```

| 메서드명 | 설명 |
|----------|------|
| getFullYear() / setFullYear() | 년도를 4자리 숫자로 반환 / 설정 |
| getMonth() / setMonth()       | 월을 숫자로 반환 (0~11) / 설정 |
| getDate() / setDate()         | 일을 숫자로 반환 / 설정 |
| getHours() / setHours()       | 시간을 숫자로 반환 / 설정 |
| getMinutes() / setMinutes()   | 분을 숫자로 반환 / 설정 |
| getSeconds() / setSeconds()   | 초를 숫자로 반환 / 설정 |
| getMilliseconds() / setMilliseconds() | 밀리초를 숫자로 반환 / 설정 |
| getDay() / setDay()           | 요일을 숫자로 반환(0~6, 일요일=0) / 설정 |

```
let day=today.getDay();
    document.write(day); //  0:일요일 ...~6:토요일
```
```jsx
//오늘 포함해서 100일 후 계산
//let today3=today.setDate(today2 + 100);
//document.write(today3 + "<Br>");   //1779256374661
    
    //setDate함수는 mx(타임스템프)를 반환
    today.setDate(today2 + 100);
    document.write(today.toLocaleDateString()+"<br>");
```
---
### .5 Array 객체

```jsx
let n=[1,2,3];  
let n2=new Array(1,2,3);
```


| 속성/메소드 | 설명 |
|-------------|------|
| length      | 배열의 개수 |
| concat(a,b,c) | 다른 배열을 합쳐서 새로운 배열 생성 |
| pop() / shift() | 배열 맨 뒤 요소 제거 / 배열 맨 앞 요소 제거 |
| push() / unshift() | 배열 맨 뒤 요소 추가 / 배열 맨 앞 요소 추가 |
| trim()      | 문자열 앞뒤 공백 제거 |
| slice()     | 문자열 또는 배열에서 특정 범위의 요소/문자열 추출 |
| includes()  | 배열 또는 문자열에 해당 값이 있는지 확인 (true/false 반환) |
| forEach()   | 배열의 각 요소와 인덱스를 반복해서 확인 |
| sort()      | 배열 내 요소들을 오름차순 정렬 (문자열 기준) |
| reverse()   | 배열 내 요소들의 순서를 역순으로 정렬 |

```jsx
 //변수선언방식
let fruit=['Apple','banana','Mango'];
let fruit2 = ['Orange', 'Kiwi']

console.log(fruit.concat(fruit2));
    // //['Apple', 'banana', 'Mango', 'Orange', 'Kiwi']
    // //concat은 원본 유지가 된다.

    // //pop, shift, push, unshift -> 원본 유지 안됨(원본 변경)
fruit.pop(); //맨 뒤요소 제거
console.log(fruit);   //['Apple', 'banana']

fruit.shift();//맨 앞요소 제거
console.log(fruit);  //['banana']

fruit2.push('PineApple'); //맨 뒤 요소 추가
console.log(fruit2);    //['Orange', 'Kiwi', 'PineApple']

fruit2.unshift('Strawberry'); //맨 앞 요소 추가
console.log(fruit2);    //['Strawberry', 'Orange', 'Kiwi', 'PineApple']
```
```jsx
let list= ['01)자바', '02)DB','3)파이썬', '04)JS'];
let ary=[];

for(let i = 0; i<list.length; i++){
  document.write(list[i]); //01)자바02)DB3)파이썬04)JS
}
```
---

- arr.filter
```
        let arr=[1,2,3,4,5];
    //3보다 큰 값들만 리턴하는 함수
    // function maxNumber(number){
    //     return number>3;
    // }
    // console.log(arr.filter(maxNumber));

    //filter(callbackFn)
    //console.log(arr.filter(maxNumber));

    //화살표 함수 구조
    let n = (a, b) => a+b;
    console.log(arr.filter((item) => item > 3));
```    

## DOM(Document Object Model)
- 브라우저는 HTML 페이지를 로드하는 과정에서 각 HTML태그를 하나의 객체로 만든다.
-> HTMl 페이지가 출력된 후, DOM 객체를 통해 HTML 태그가 출력된 모양과 콘텐츠를 제어하기 위해
### 1. DOM트리
- DOM트리 : 브라우저는 HTML 페이지를 로드하면서 HTML 태그의 포함 관계에 따라 DOM객체들을 트리구조로 만듬

1. DOM 트리의 루트는 document 객체이다.
2. DOM 객체는 HTML 태그 당 하나씩 있다.
3. HTML 태그 당 DOM객체가 하나씩 생성된다.
4. DOM트리는 HTML 태그의 포함관계에 따라 부모 자식 관계로 구성된다.

### 1.2 DOM객체의 구성 요소
- 프로퍼티 : DOM객체의 멤버변수로서 HTML 태그의 속성 반영-속성을 알아내거나 프로퍼티 값을 바꾸어 HTML 태그에 변화를 줄 수 있다.
- 메소드 : DOM객체의 멤버함수로서 HTML 태그를 제어한다.
- 컬렉션 : DOM 객체의 모든 자식 DOM객체에 대한 주소를 가진다.
- 이벤트 리스너 : DOM객체는 HTML태그에 작성된 이벤트 리스너를 그대로 가진다.
- CSS3 스타일 : style 프로퍼티를 통해 CSS 스타일 시트에 접근할 수 있다.

### 1.3 문서 객체를 가져오는 메소드
| 메소드 이름 | 설명 |
|------------|------|
| `getElementById('아이디명')` | 태그의 **id 값**으로 문서 객체를 선택함 (단일 선택) |
| `getElementsByTagName('태그명')` | 태그 이름으로 문서 객체를 선택함 (**복수 선택**, HTMLCollection) |
| `getElementsByClassName('클래스명')` | 태그의 **class 값**으로 문서 객체를 선택함 (**복수 선택**, HTMLCollection) |
| `querySelector('CSS 선택자')` | CSS 선택자로 **첫 번째 요소 하나만** 선택 |
| `querySelectorAll('CSS 선택자')` | 같은 CSS 선택자가 여러 개일 경우 **모두 선택** (NodeList, 배열처럼 사용) |
---

## 02-06 isNaN - 숫자 변환한 다음 NaN 이면 true

```
document.write(isNaN(100) + '<br>'); //false
document.write(isNaN("100") + '<Br>');  //false 숫자 100으로 변환됨
document.write(isNaN("abc") + '<Br>');    //true
document.write(isNaN("33")  + "<Br>"); //숫자 33.33으로 변환됨
```

### 1.3 변수식 함수 선언

- 변수식 함수 선언 기본 형식 : 함수의 이름이 없고 함수 전체를 변수에 담아서 변수를 호출해서 사용한다.

```jsx
let 변수명 = function() {
	실행할 코드
}
변수명();
```

---

```
//좀 더 간결하게 작성하는 함수(화살표 함수)
//1. 변수식 (변수명=함수명)
let sum=function(a,b){
    return a + b;
}
alert(sum(3,4));
//2. ** 화살표 함수**-> function 키워드 없음, return 키워드 생략가능
let sum1 = (a, b) => {
    return a + b;
}
let sum2=(a,b) => a+b;
alert(sum2(3,4));
```

```
let multi = (a, b) => a ** b;

document.write(multi(2, 10)); // 1024 JS 에서 **연산자가 거듭제곱 연산
```

## 배열과 객체

### 1. 배열(array)이란?

- 여러 개의 원소들을 연속적으로 저장하고 전체를 하나의 단위로 다루는 데이터 구조

```
let 배열이름 = ['값1', '값2', '값3']

let 배열이름 = [값1, 값2, 값3]
```

- 문자의 경우 따옴표로 묶고, 문자가 아닌 경우는 묶지 않는다.
- , 를 기준으로 인덱스라 부르고, 인덱스 번호는 항상 0부터 시작한다.
- 배열에서 반복문을 사용할 수 밖에 없다.

```
let ary = [1, 2, 3, 4, 5];
document.write(typeof(ary)+'<br>'); //object js에서 배열은 객체임.
document.write(ary[0] + " " + ary[1]);

//배열 개수(배열명.legnth)
document.write(ary.length); //5

인덱스번호는 0부터 시작하기때문에 배열 개수 -1
for (let i = 0; i < ary.length; i++) {
  console.log(ary[i]);
}
```
- trim 은 앞 뒤 공백 제거, slice는

### 2.for in문

```html
for(let i in 배열명) { 반복할 식 }
```

```
for(let i in ary){ //배열이 가지고 있는 인덱스 값들을 변수 i에 저장하겠다.
  console.log(ary[i]);
}
```

---

### 3. 객체

- 현실 세계는 객체들의 집합
- 객체는 하나의 값으로 표현할 수 없고, 여러 개의 속성과 값의 묶음으로 표현됨
- 객체는 속성(property) 와 값의 쌍으로 표현됨
- 객체는 여러 개의 함수를 가질 수 있는데, 함수를 메소드(method)라고 부른다

### 3.1 객체의 선언 기본 형식

```
let student={
      name : 'juli',
      age:42,
      height:188,
      weight:66,
      show : function(){
        console.log(`${student.name}`);
      }
    }
    student.show(); //함수호출
```

- 변수 : 데이터 한 개 저장하는 공간
- 배열 : 데이터를 여러 개 저장하는 공간
- 객체 : 데이터를 집합적으로 저장하는 공간

```
// 객체를 기준으로 해서 js로 코드 구현 가능
    let car = {
        name:'소나타', //변수
        color:['red','blak','white'],
        fuel:'전기',

        operating : function(e){
            if(e=='on'){
                alert('시동 켜져있음');
            }
            else if(e=='off'){
                alert('시동 꺼져있음');
            }
        }
    }
    //속성 호출 -> 객체명.속성명, 객체명[속성명]
    console.log(car.name); //객체 car에 있는 name이라는 변수에 대한 값 출력
    //배열시 객체명.배열명[인덱스]
    console.log(car.color[1]);
    console.log(car.fuel);
    //객체명[속성명]
    console.log(car['name']);
    //메소드(함수) 호출 -> 객체명.함수명
    car.operating('off');
```

```
let student = {
        name: '홍길동',
        show:function(){
            console.log(student.name);
            console.log(this.name);  //this: show함수가 들어있는 객체를 의미
            console.log(`${student.name}`);
        }
    }
student.show();  //함수 호출
```
```
let student = {
    name: 'tom',
    test: function() {
        console.log(`${this.name}`);
    }
}
let student2 = {
    name: 'tom2',
    test: function() {
        console.log(`${this.name}`);
    }
}
//객체명이 변경되도 메소드 내에 객체명을 사용하지 않게 좀 더 효율적으로 코드 구현 가능
student.test();
student2.test();
```
---

### 3.2 생성자 함수
- 비슷한 객체를 여러 개 만들어야 하는 경우에 사용됨
```
function student(name, score) {
  this.name=name;
  this.score=score;

  this.getgrade = function() {
    if(score >= 90){
      return 'A';
    }
    else if(score >= 80) {
      return 'B';
    }
    else {
      return 'F'
    }
  }
}

let stu1 = new student("juli",50);
let stu2 = new student("tom",100);

document.write(stu1.name + "학점" + stu1.getgrade() +"<br>");
document.write(stu2.name + "학점" + stu2.getgrade() + "<br>");

---
- 변수(속성) : tv크기, 색상, 모양...
- 함수(기능) : on/off, ch, volume +/-  ...
- (틀만 구현해놓고) 비슷한 객체를 여러 개 생성할 수 있다: 생성자 함수

---
```
<body>
    <!--버튼명은 아메리카노, 버튼을 클릭시 cafe 함수가 호출된다
    value: 아메리카노 버튼이 가지고 있는 실제 데이터(americano-->
    <button onclick="cafe(this.value)" value="americano">아메리카노</button>
    <button onclick="cafe(this.value)" value="latte">라떼</button>
    <button onclick="cafe(this.value)" value="smoothie">스무디</button>
</body>
```


---

## 02-05 JS 수업 내용

## 조건문과 반복문

### 11. 중첩 for 반복문 : 반복할 것이 2개 이상인 경우 사용

```
for(초기값; 조건식; 증감식){
	반복할 식
	for(초기값; 조건식; 증감식) {
		반복할 식
  }
}
```

- 구구단 출력해보기

```
for(let n=2; n<=9; n++){
    for(let m = 1; m <=9; m++){
    document.write(n + "*" + m + "=" + (n*m)+"<br>");
    }
}
```

### 삼항 연산자 형식

- 조건식 ? 참일때값 : 거짓일때값

### 12. break문 : 반복문을 벗어남

```
for(...) {
	.......
	break;
	.......
}
```

### 13. continue : 반복문과 같이 사용되며 다음 반복으로 넘어가고자 할 때 사용됨

```
for(초기식; 조건식; 반복){
	......
	continue;
	......
}

while(조건식){
	......
	continue;
	......
}

do{
	......
	continue;
	......
}
```

---

### eval함수

```
document.write("1+2+3"+"<br>");

     let n = eval("1+2+3"); //**문자열이 실제로 연산되는 함수**
    document.write(n + "<br>");

    let calculater = prompt("수식입력"); //"1+2+3"
    let result = eval(calculater);
    document.write(`${calculater} = ${result}`);
```

### 무한 반복문

```
for(;;) {
}
```

```
// while(true) { //무한루프(무한반복문)
        //     let name = prompt('이름 입력해라');
        //     if(name=='길동'){
        //         break;
        //     }
        //     document.write(name);
        // }
        // let a = prompt('정수1입력');
        // let b = prompt('정수2입력');
```

## 자바스크립트 함수

### 1. 함수란?

- 데이터를 전달받아 처리한 후 결과를 돌려주는 코드 블록
- 함수는 전달받은 데이터 없이 정해진 작업을 하기도 하고, 결과를 돌려주지 않기도 한다.

```
<script>
        //함수 왜쓰는가?
        //반복해서 사용되는 코드의 집합을 만들고 필요할 때 마다 호출해서 쓴다.
        //**호이스팅**
        function fun1(){   //함수 정의만 구현
            for(let i = 1; i<=10; i++){
                document.write(i);
            }
        }
        //함수를 호출해야 함수가 실행된다!!!
        fun1();
</script>
```

### 1-1. 매개변수 없을 때

```
function 함수명() {
	실행할 코드
}
```

### 1.2 매개 변수 있을 때

- 매개변수 함수 선언 =>함수명(e);
- 리턴 키워드 => return 반환값;

```jsx
function 함수명(e) {
	실행할 코드
}
```

```
function total(a,b){
    let sum = 0;
    for(let i=a; i <= b; i++){
    sum+=i;
    }
    return sum;
}
document.write(total(1,100));
```

### 지역변수/전역변수

- 전역변수 : (global variable) 함수 밖에서 선언 / 프로그램 전역에서 사용 가능
- 지역변수 : (local varaible) 선언됨 함수 안에서 사용 가능

```
let n = 10; //전역변수

    function f(){
        let m = 1; //지역변수
        document.write(m+'<br>');
        document.write(n+'<br>');
    }
    f();
```

---

```
function cal(x, y, z) {
  switch (x) {
    case "+":
      document.write(y + z);
      break;
    case "-":
      document.write(y + z);
      break;
    case "*":
      document.write(y * z);
      break;
    case "/":
      document.write(y / z);
      break;
    }
}

let a = prompt("사친연산 중 하나 입력해라");
let b = parseInt(prompt("첫 번째 정수 입력"));
let c = parseInt(prompt("두 번째 정수 입력"));

cal(a, b, c);
```

---

## 02-04 JS 수업 내용

## 자바스크립트 기본문법 - 데이터 타입과 변수

- 숫자 뒤 n을 붙이면 bigint형이 됨.

```

    document.write(Number.MAX_SAFE_INTEGER + "<br>")
    //9007199254740991
    document.write(typeof(10) + "<br>");
    //숫자 뒤 n을 붙이면 bigint형이 됨.
    //bigint는 정수만 됨
    //10n+1 더할 수 없음(타입안맞으면 안됨)
    //10n + 1n //가능
    document.write(typeof(10n) + "<br>" + 10n);
    // ->bigint
    // 10

```

---

## 조건문과 반복문

### 자동 형 변환

```

document.write('100'>90); // **자동 형 변환** -> true
document.write('2'>'10'); //2랑 1이랑 비교해서 2가 크기때문에 true로 나옴(문자열이라서)

```

- num=parseInt(num); //문자를 정수로 바꿔 다시 num에 대입한다

```

document.write(parseInt("abc")); //Nan (Not a Number) abc는 정수로 변환 불가

```

### 1. 기본 if 문

- if(조건식) {

  조건이 참일 경우 실행코드

  }

- else{

  조건이 거짓일 경우 실행코드

  }

---

### 2. 다중 if 조건문

```

if(조건식1) {
조건식1이 참일 경우 실행코드
}
else if(조건식2) {
조건식2가 참일 경우 실행코드
}
else if(조건식3) {
조건식3이 참일 경우 실행코드
}
else {
조건식1,2,3에 해당되지 않을 경우 실행코드
}

```

---

### 3. 논리 연산자 : if문 조건식을 비교해서 참,거짓 판단

1. && (논리곱 연산자) : and 연산으로 모든 조건식이 참이어야 참으로 출력

2. || (논리합 연산자) : or 연산으로 조건식 중 한개라도 참이면 참으로 출력

3. ! (부정 연산자) : 조건식이 참이면 거짓, 거짓이면 참으로 바꾸어 출력

### 4. 중첩 if문

```

if(조건식1) {
if(조건식2) {
조건식1이 참이면서 조건식2가 참일 경우 실행코드
}
else {
조건식1이 참이면서 조건식2가 거짓일 경우 실행코드
}
}
else {
조건식1이 거짓일 경우 실행코드
}

```

---

### 5. switch문

```

switch(데이터) {
case '값1' :
데이터와 값1 이 맞을 때 실행
break;
case '값2' :
데이터와 값2가 맞을 때 실행
break;
default :
위의 case들에 해당 되지 않는 경우 실행
}

```

---

### 6. 복합 대입 연산자

1. += : 더하기대입연산자
2. -= : 빼기대입연산자
3. \*= : 곱하기대입연산자
4. /= : 나누기대입연산자
5. %= : 나머지대입연산자

---

### 7. 증감 연산자

1. 변수++ : 기존 변수에 1 증가 시키고 다음 줄부터 실행
2. ++변수: 기존 변수에 1 증가 시키고 해당 줄부터 실행
3. 변수--: 기존 변수에 1 감소 시키고 다음 줄부터 실행
4. --변수: 기존 변수에 1 감소 시키고 해당 줄부터 실행

---

### 8. 반복문 while

```

while(조건식) {
반복할 식
}

```

### 9. 반복문 do while

```

do {
반복할 식
}
while(조건식);

```

### 10. 반복문 for : 반복문 중 가장 많이 사용하는 방식

```

for(초기값; 조건식; 증감식) {
반복할 식
}

```

## 02-03 자바스크립트 개념과 특징

### 1. 자바스크립트란?

- 웹 페이지에 동적인 기능을 넣기 위해 만들어진 프로그래밍 언어

- 웹 내부에서 일어나는 상호작용은 html, css만으로 이루어질 수 없음

=> 웹 내부에서 발생하는 다양한 기능을 만들 수 있음

### 2. 자바스크립트의 특징

- 브라우저에서 실행됨
- html(웹 페이지의 구조와 내용 작성), css(색상이나 폰트, 배치 등 웹 페이지 모양 꾸미기) 와 함께 웹 3대 요소 중 하나
- 자바스크립트는 사용자의 입력을 처리하거나 웹 애플리케이션을 작성하는 등 웹 페이지의 동적 제어에 사용됨
  - 사용자의 입력 및 계산
  - 동적 제어(웹 페이지 내용, 모양, 브라우저 제어)
  - 웹 서버와의 통신(웹 페이지가 웹 서버와 데이터를 주고받을 때 활용됨)

### 3. 데이터 출력

- document.write(출력할 내용);
  - 브라우저의 body 내에 출력
- alert(출력할 내용);
  - 브라우저에 경고창으로 출력
- console.log(출력할 내용);
  - 대부분 코드 오류 및 실행 /여부를 체크하기 위해 콘솔창에 출력 (브라우저에 F12를 누르면 콘솔창이 나옴)

### 4. 자바스크립트 코드의 위치

- < script></ script> 태그에 자바스크립트 코드 작성
  - 이 태그는 < head></ head> 나 < body></ body> 내 어디든 들어갈 수 있다.
    1.  < head> 태그 안
    - 특징: HTML이 렌더링 되기 전에 자바스크립트가 먼저 실행됨
    - 단점: < body> 의 DOM 요소들이 만들어지기 전이기 때문에 DOM 조작 코드가 에러가 날 수 있음

2. < body></ body>태그 안
   - 특징: HTML이 모두 렌더링 된 뒤 실행되므로 DOM 접근 안정성 높아서 가장 많이 쓰는 위치이다.

## 02-03 JS 수업내용

## 자바스크립트의 기본문법

---

### 1. 자바스크립트 개요

- 문자열 출력: 작은따음표 or 큰따옴표 - document.write

```

document.write("자바스크립트 공부!!" + "<br>");
//주석 : 실행안되는 코드들(보통 코드에 대한 설명, 쓸데없는 코드를 주석으로 표시한다.)
//document.writeln("환영해요~"); 입력한 값에\n 추가하여 입력해줌
document.write("2.5"); //문자열로 인식
document.write("hi");
// alert("자바 스크립트")
console.log("자바스크립트"); //f12 버튼 클릭
document.write("<br> " + 100); //숫자 데이터는 따옴표묶으면 안된다.
document.write("100"); //문자열 데이터이다(따옴표 넣었기 때문)
//문자열 : 쌍따옴표 또는 외 따옴표로 작성
document.write("안녕");
document.write("<br>"); //태그 - 문자열로 인식
document.write("자바스크립트 공부하네");
document.write("<br>")
//불(bollean) : 참과 거짓으로 된 자료형
document.write(5 > 3); //결과값이 참
document.write("<br>")
document.write(4 < 2);
document.write("<br>")
document.write("true"); //true나 false는 예약어이기 때문따옴표 없이 사용해야 함.
document.write("<br>")
document.write(true); //예약어로 쓰려면 이렇게 따옴표 없써야함
document.write("<br>")

```

---

- f12 키보드 -> console 창 확인

```

console.log(1 + 2);
console.log(3 - 4);
console.log(3 _ 4);
console.log(10 / 2)
//나머지
console.log(10 % 3); //10을 3으로 나누었을 때 나머지
//숫자와 문자를 사칙연산하면 어떻게 되는지?
console.log(5 - "3"); //문자열 -, _, / 가능
console.log(5 \* "3"); //15
console.log(5 / "3"); //1.666....
console.log(5 + "3"); // + 인 경우 문자를 더한다(나열됨)
console.log("내 시력은 " + 1.2 + "이다");
//문자열과 숫자 사이에 +연산을 쓰게되면 나열연산자가 된다
console.log(11 > 2);
console.log(11 < 2)
console.log(3 <= 2);
console.log(3 == 3); //== 같다(equal)
console.log(3 != 3); // != 같지않다(not) !는 부정연산자

```

### 2. 자바스크립트의 기본 문

```

//prompt("나이가 몇살이니?", "");
//confirm("정말 취소하시겠습니까? ")
console.log(5 == "5"); //항등 연산자 equal
console.log(5 === "5"); //데이터유형까지 일치해야
//typeof : 데이터타입 확인하는 함수
console.log(typeof 5); //number(숫자)
console.log(typeof "5"); //string (문자열)
console.log(typeof 5.5); //number(숫자)
console.log(typeof true); //bollean(논리형)
console.log(typeof "true"); //bollean(논리형
// ==데이터 타입까지는 확인하지 않음(모양만 같으면 됨등가비교연산자
// ===데이터 타입까지는 확인함 (typeof로 뽑아서 데이터타입일치해야함)
// = 대입 연산자(오른쪽의 데이터를 왼쪽 변수에 대입)

```

---

```

// let age = 10; //10이라는 데이터를 age라는 변수대입한다!!
// document.write("철수의 나이는 " + age + " 살이다");
// document.write("<br>");
// document.write(age + 30 + "살은 내 친언니 나이입니다.");
// document.write("<br>");
// //var let const
// /_var name = "gildong"; //문자열 'gildong'을 name이라변수명에 대입
// console.log(name);
// console.log(typeof (name));
// console.log(name == "gildong")
// var name = "juli";
// console.log(name); _
// /_let name = 'gildong';
// console.log(name)
// let name = 'juli';
// console.log(name); _
// const name='gildong'; //변수 재선언 불가능
// name='juli' //값 변경도 불가능-에러발생!
// document.write(name)
// var name = "gildong"; //변수 재선언 가능
// name = "juli"; //값 변경도 가능
// document.write(name);
// document.write("<br>")
// // let name='gildong'; //변수 재선언 불가능
// // name='juli' //값 변경은 가능
// // document.write(name)
// // let var const 가 앞에 있으면 새로운 공간을 만들겠다

```

```

// //n1 이라는 이름의 변수선언
// var n1=100; //100을 n1에 대입
// var n2=90
// document.write(n1)
// document.write(n2)
// // let 1str; //숫자가 먼저 나올 수 없음
// let myPassword;
// let \_str;
// let $str='aa';
// console.log($str);
// //let my password; //공백 불가능
// //카멜표기법
// let yourPassword; //두번째 단어의 첫글자를 대문자로 표현
// let myId
//데이터 유형 : 숫자, 문자열, 불(논리), 객체, undefined, 함수
let num=20;
console.log(num)
let name='33';
let str='자바스크립트 재밌네'
let bool1 = 4>5;
console.log(bool1)
let bool2 = true;
console.log(bool2)
//alert, prompt, confirm
let age = prompt('나이 입력해라'); //내가 입력한 나이가 ag변수에 대입됨
console.log(age); // 값 입력 후 확인 누르면 값이 뜨고아무것도 입력하지 않으면 공백, 취소는 null을 리턴

// let msg2 = prompt('입력해줘!');
// document.write(msg+"<br>");
// document.writre(typeof(msg2));

```
