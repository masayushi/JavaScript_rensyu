// Ctrl + F 搜尋

console.log("我是 JS醬!")

// DOM (Document Object Model) 文件物件模式
// 文件.透過 ID 搜尋元素("元素名稱").插入 HTML = "文字訊息";
document.getElementById("box1").innerHTML = "Hellow,world!";

// 變數 Variable
// 用於儲存資料
// 資料類型如下列
var a = 10;        //整數
var b = 1.5;       //浮點數
var c = "文字"     //字串
var d = true;      //布林值 分為兩種：true 是 / false 否

console.log(a);

// 運算子 Operators
// 類型一：數學 的運算子 符號：+ - * / % -> 加減乘除餘

// 程式內的 = 為指定的符號，不是等於(重要)
// = 的右邊會優先執行，再指定給左邊的值
a = a + 1;

console.log(a);

// 目前各個軟體比較常用的版本分別是：HTML5、CSS3跟JS ES6
// ++ 遞增 1 --遞減 1
var e = 7;
e++;
console.log(e)

// ES6 指數符號 ** 次方
var f = 5;
f = f**3 //指定f為f(5)的3次方
console.log(f);

// 指定運算子 Assignment，適用於 + - * / % **
var num1 = 10;
// num1 num1 + 5;
num1 **= 5;
console.log("指定運算子：" + num1);

// 自訂函式(方法) function、method
// 語法：
// 函式關鍵字  函式名稱(參數1、參數2、...){ 程式內容 }
                // 自訂函數的參數沒有上限
function functionA(){
    console.log("我是函式A醬");
}

// 自訂函式需要被呼叫才會執行
functionA();
functionA();

function addTen(number){

    number += 10;
    console.log("加十："  + number)
}

addTen(7);
addTen(100);

function mul(a, b){
    console.log("數字相乘的結果：" +(a * b));
}

mul(999, 7);

// 物件 { 物件資料名稱 ： 物件資料值 }
var car = {
    brand: "BZ",
    cc: 2000,
    color: "gold",
    drive: function() {
        console.log("開車中...");
    }
}

console.log("汽車的牌子：" + car.brand);

car.drive();

// 練習事件
var box2 = document.getElementById("box2");

box2.onclick = () => {
    console.log("點擊唷!");
}

box2.onmouseenter = () => {
    console.log("滑入囉!");
}

box2.onmouseleave = () => {
    console.log("滑出啦!");
}

// 陣列 Array 可以用來存放多個資料

var numberA = 10;
var numberB = 100;
var numberC = 60;

var numberObject = {
    A: 10,
    B: 100,
    C: 60,
}

// 陣列資料
var numbers = [10, 100, 60];

console.log("陣列第三筆資料：" + numbers[2]);

numbers[0] = 999;

console.log("陣列第一筆資料：" + numbers[0]);

console.log("陣列的數量:" + numbers.length);

// 比較運算子 -> > < >= <= == != ->大於 小於 大於等於 小於等於 等於 不等於
var testA = 100;
var testB = 50;

console.log(testA != testB);

// == 與 ===的差異

var testC = 7;
var testD = "7";

console.log("== 的結果：" + (testC == testD)); //比較值
console.log("=== 的結果:" + (testC === testD)); //比較值與類型

// 邏輯運算子 logical Operators
var testE = true;

// !是屬於邏輯運算子下的顛倒運算子
console.log("顛倒：" + !testE);

// 並且 &&
// 只要有一個 false 其結果就會為 false

console.log(true && true);          //t
console.log(true && false);         //f
console.log(false && true);         //f
console.log(false && false);        //f

// 或者 ||
//  只要有一個 true 其結果就會為 true

console.log(true && true);          //t
console.log(true && false);         //t
console.log(false && true);         //t
console.log(false && false);        //f

//判斷式 if
//語法 Syntax
// if (布林值) { 當布林值為 true 時會執行 }
if (true) {
    console.log ("我是判斷式~");
}

//  else 否則
//  if { 當布林值為 true 時會執行 }
//  else { 當布林值為 false 時會執行 }

var boolTest= true;

if (boolTest) {
    console.log("布林值為 true!");
} else {
    console.log("布林值為 false!");
}


// 如果 分數 >=60 ： 及格
// 如果 分數 <=60 ： 補考
// 如果 分數 <=40 ： 被當

var score = document.getElementById("score");
var result = document.getElementById("result");

score.onchange = () => {
    var s = parseInt(score.value);

    if (s >= 60) {
        result.innerText = "分數：" + s + " - 及格";
    }

    else if (s >= 40){
        result.innerText = "分數：" + s + " - 補考";
    }
    else {
        result.innerText = "分數：" + s + " - 被當";
    }
}

// 迴圈 for 
// 語法
// for (初始值; 條件(條件須為布林值); 迭代器-迴圈結束回執行的區塊) {}

// 初始值：迴圈開始的值
// 條 件：迴圈會執行的條件 - 當條件為 ture 時會執行，false時則會結束迴圈
// 迭代器：初始值處理 - 通常會為遞增(++)

for (let i = 0; i < 100; i++) {
    console.log("迴圈：" + i);
}

// 陣列
var products = ["冰美式", "卡布奇諾", "拿鐵"];

// products.length 陣列.長度(即為數量) 3(此範例的數量為三)

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}