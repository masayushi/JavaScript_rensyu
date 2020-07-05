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