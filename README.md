# IBM X RED HAT AI 과정

## JavaScript

## 02-04 자바스크립트 기본문법 - 데이터 타입과 변수
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

**num=parseInt(num);  //문자를 정수로 바꿔 다시 num에 대입한다**  
---

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
         1. < head> 태그 안
        - 특징:  HTML이 렌더링 되기 전에 자바스크립트가 먼저 실행됨
        - 단점: < body> 의  DOM 요소들이 만들어지기 전이기 때문에 DOM 조작 코드가 에러가 날 수 있음
2. < body></ body>태그 안   
    - 특징: HTML이 모두 렌더링 된 뒤 실행되므로 DOM 접근 안정성 높아서 가장 많이 쓰는 위치이다.      
## 02-03 자바스크립트의 기본문법

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
console.log(3 * 4);
console.log(10 / 2)
//나머지
console.log(10 % 3); //10을 3으로 나누었을 때 나머지
//숫자와 문자를 사칙연산하면 어떻게 되는지?
console.log(5 - "3"); //문자열 -, *, / 가능
console.log(5 * "3"); //15
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
// /*var name = "gildong"; //문자열 'gildong'을 name이라변수명에 대입
// console.log(name);
// console.log(typeof (name));
// console.log(name == "gildong")
// var name = "juli";
// console.log(name); *
// /*let name = 'gildong';
// console.log(name)
// let name = 'juli';
// console.log(name); *
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
// let _str;
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