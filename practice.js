// var x=7
// a()
// b()
// console.log(x)

// function a(){
//     var x = 10;
//     console.log(x)
// }

// function b(){
//     var x = 100;
//     console.log(x)
// }

// call apply bind

// let name1 = {
//     "fname":"rakshitha",
//     "lname":"HM"
// }
// let name2 = {
//     "fname":"MS",
//     "lname":"Dhoni"
// }

// function printfullname(){
//     console.log(typeof(this))
//     console.log(this.fname+" "+this.lname)
// }

// bind

// let printname1 = printfullname.bind(name1)
// printname1()

// function currying

// let multipy = function( y){
//     console.log(typeof(this))
//     console.log("this val" , y)
// }

// let multiply2 = multipy.bind(this , 2)
// console.log(multiply2)
// multiply2()

// ---------------- CLOSURES ------------


// function x() {
//     var a = 10
//     function y() {
       
//         console.log(a)
//     }
//     a=100
//     y()
//     return y
// }

// var z = x()
// console.log(z)


// --------------CLOSURE example 2 ------------------------


// function z(){
//     var b =100
//     function x() {
//         var a = 10
//         function y() {
           
//             console.log(a , b)
//         }
//         y()
        
//     }
//     x()
// }
// z()

// set time out

// function x(){

//     var i = 1 ; 
//     setTimeout(()=>{
//         console.log(i)
//         i++
//     }, 1000)

//     setTimeout(()=>{
//         console.log(i)
//         i--
//     }, 2000)

//     setTimeout(()=>{
//         console.log(i)
//         i++
//     }, 3000)

//     i =i+1

// }
// x()

// Async await

// let hello = async function() { return "Hello" };
// let re_val = hello();
// console.log(re_val)

// re_val.then((val)=>{console.log(val)})

async function hello() {
    return await Promise.reject("Hello");
  };
  let re_val = hello()
  console.log(re_val)
  hello().then((val)=>{console.log(val)});
  hello().catch((val)=>{console.log("")})

