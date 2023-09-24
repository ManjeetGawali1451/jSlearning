



console.log("===== Assignment 2 ========");
console.log("***** Part 1 ********");
console.log("----- Functions with No Arguments and No Return Type ---------");

function aboutMe(){  //function name
            console.log("My Name ==> Mohit Sharma");
            console.log("Qualification ==> B Tech");
}
aboutMe() //function call

console.log("====================================================================");
console.log("***** Part 2 *****");
console.log("------ Function With argumens and no return type --------");

function myPersonalDetails(FirstName,LastName,CollegeName){  //function arguments
        console.log("First Name==>Mohit");
        console.log("Last Name==>Sharma");
        console.log("Collage Name==>Sinhgad Institute");
    }
 myPersonalDetails("Mohit","Sharma","Sinhgad Institute")//function call

console.log("======================================================================");
console.log("******** Part 3*********");
console.log("-------- Swap the values------");

function swap(num1,num2){
            console.log("Before Swap==>",num1,num2);
            var temp=num1
            var num1=num2
            num2=temp
            console.log("After Swap==>",num1,num2);

}
swap("Virat","Anushka")
swap(1000,2000)


console.log("========================================================================");
console.log("************Part 4*********");
console.log("Log The addition of three paramneters or Argumnets");

function addThreevalues(num1,num2,num3) {
                var result=num1+num2+num3
                return result

            }

    var addition=addThreevalues(10.63,600,40)
    var result=addThreevalues("Hello", " " ,"Good Morning")
            console.log("Value 1 ==>10.63");
            console.log("Value 2 ==>600");
            console.log("value 3==>40");
            console.log("The total Sum of three values are:",addition);
            console.log("The sum of three values are:",result);            

            
            