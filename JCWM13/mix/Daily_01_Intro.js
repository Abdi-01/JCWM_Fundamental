/*
📝JavaScript (JS) was initially created to “make web pages alive”.
The programs in this language are called scripts. They can be written right in a web page’s HTML 
and run automatically as the page loads.

Today, JavaScript can execute not only in the browser, but also on the server, or actually 
on any device that has a special program called the JavaScript engine.

The browser has an embedded engine sometimes called a “JavaScript virtual machine”.

Different engines have different “codenames”. For example:
 - V8 – in 💻 Chrome and Opera.
 - SpiderMonkey – in Firefox.
 … There are other codenames like “Trident” and “Chakra” for different versions of IE, 
 “ChakraCore” for Microsoft Edge, “Nitro” and “SquirrelFish” for Safari, etc.

How do engines work❔
Engines are complicated. But the basics are easy.
 - The engine (embedded if it’s a browser) reads (“parses”) the script.
 - Then it converts (“compiles”) the script to the machine language.
 - And then the machine code runs, pretty fast.

⚠ NOTE❗ : JS Full integration with HTML/CSS. In programming term, JS is known as 
high-level programming language, dynamic and weak type language, also single thread and 
interpreted language.
*/

/* How to write and run JavaScript ? 
1️⃣ the Script tag, <script> . . . <script/> in HTML
    JavaScript programs can be inserted into any part of an HTML document with the help 
    of the <script> tag.
2️⃣ using external source or JavaScript file (... .js), Script files are attached to 
    HTML with the src attribute: 
    1. from local storage
        <script src="/path/to/script.js"></script>,
    2. from url
        <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js"></script>
    NOTE : we can also attach multiple JS file in HTML
    <script src="/js/script1.js"></script>
    <script src="/js/script2.js"></script>
    …
3️⃣ running JS file in windows or mac command line or terminal --> need JS engine like such as "NodeJS"
*/

/* Essential tools :
🆚 VS Code : https://code.visualstudio.com
📜 Node Js : https://nodejs.org/en/
*/

/* Set-up editor : essential vs code plugin for web developer */

// Reference : 
// https://javascript.info/
// https://scotch.io/courses/getting-started-with-javascript-for-web-development/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript

console.log("Nama : Abdi")
console.log("Usia : 23")
console.log("Tinggal : Depok")
console.log("Pekerjaan :", "Developer")
