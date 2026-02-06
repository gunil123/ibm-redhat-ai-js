# IBM X RED HAT AI 과정

## JavaScript

### 02-06 isNaN - 숫자 변환한 다음 NaN 이면 true

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
document.write("100"); //문자열 데이터이다(따옴표 넣었기 때문
//문자열 : 쌍따옴표 똔느 외 따옴표로 작성
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
// = 대입 연산자(오른쪽의 데이터를 왼쪽 변수에 대입

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
// document.write(n2
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

```

```

```

```
