/* 
- เราอยากพัฒนาโปรแกรมบวกลบคูณหารเลข ทุกครั้งจะรับ Parameter 3 ตัวคือ
    - เลขตัวที่ 1
    - เลขตัวที่ 2
    - กระบวนการทางคณิตศาสตร์
- ให้เขียน function ที่ทำงานตามที่โจทย์กำหนด
*/

// Start Coding Here
/*
-ต้องมี callback 4 อัน add, subtract. multiply, divide
-HoF ชื่อว่า calculate(num1, num2, callback)
*/

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1*num2
}

function divide(num1, num2){
    if (num2 === 0){
        return "Cannot divide by zero"
    } else {
        return num1 / num2
    }
}

function calculate(num1, num2, callback){
    return callback(num1, num2);
}

// เมื่อ function นี้ทำงานจะเห็นผลลัพธ์ดังนี้
console.log(calculate(10, 5, add)); // 15
console.log(calculate(10, 5, subtract)); // 5
console.log(calculate(10, 5, multiply)); // 50
console.log(calculate(10, 5, divide)); // 2
console.log(calculate(10, 0, divide)); // "Cannot divide by zero"