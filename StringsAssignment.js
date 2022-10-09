/* 1. Input a String S, and check its length and if the length is greater than 4,
truncate the input String and output the result */

//Input
let strToTruncate="Icecream";

if(strToTruncate.length>4){
    strToTruncate=strToTruncate.slice(0,4);
    strToTruncate=strToTruncate.concat("..."); 
}
//Output
console.log("1: "+strToTruncate);

/*-------------------------------------------------------------------------------*/

/*2. Input a String S with multiple words, and remove whitespaces and
output the result */

//Input
let strToTrim="Hii Boy";

//Output
console.log("2: "+strToTrim.replace(/\s/g, ""));

/*-------------------------------------------------------------------------------*/

/* 3. Input a String S with two words, and replace first word with second word
and display the result */

//Input
let strToReplace="Hii Boy";
let strSplitByWhiteSpace=strToReplace.split(" ");

//Output
console.log("3: "+strSplitByWhiteSpace[1].concat(" ").concat(strSplitByWhiteSpace[0]));

/*-------------------------------------------------------------------------------*/

/* 4. Input a String S with a word, and replace character “a” with “x” and
display the result */

//Input
let strToReplaceA="apple";

//Output
console.log("4: "+strToReplaceA.replace("a", "x"));

/*-------------------------------------------------------------------------------*/

/* 5. What string method can be used to convert string into array ? */
// Answer
console.log("5: split,slice methods");

/*-------------------------------------------------------------------------------*/

/* 6. What string method can be used to check the occurrence of a specified
text in a string? */
// Answer
console.log("6:includes method");

/*-------------------------------------------------------------------------------*/

/* 7. How can you break a string to a newline in Javascript ? */
// Answer: using /n
//Example:

//Input
let strNewLine = "Java\nBlockchain";

//Output
console.log("7: "+strNewLine);

/*-------------------------------------------------------------------------------*/

/* 8. Write a Javascript function to test whether the first character of a string
is lowercase. */

//Input
let strToTestLowercase="abcd";

//Function which returns true if the first character of a string is lowercase or else returns false
function isFirstCharOfStrLowerCase(strToTestLowercase){
 let firstLetterAscii=   strToTestLowercase.charCodeAt(0);
return (firstLetterAscii>=97&&firstLetterAscii<=122)?true:false;
}

//Output
console.log("8: "+isFirstCharOfStrLowerCase(strToTestLowercase));

/*-------------------------------------------------------------------------------*/

/* 9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
(any combination) using string methods.How will you handle that ? */
//Answer: convert input to lowercase/uppercase & then compare

//Input 
let strToCompare="Yes";

//Output
console.log("9: "+strToCompare.toLowerCase()==="yes");

/*-------------------------------------------------------------------------------*/

/* 10. Given a String S, achieve following tasks */

/* 10a. Convert the String into upper case. */

//Input
let strConvToUppercase="amarthya";

//Output
console.log("10a: "+strConvToUppercase.toUpperCase());

/* 10b. Convert only the first character to uppercase. */

//Input
let conv1stLetterToUppercase="amarthya";

//Output
console.log("10b: "+conv1stLetterToUppercase.replace(conv1stLetterToUppercase.charAt(0),conv1stLetterToUppercase.charAt(0).toUpperCase()));

/* 10c. Convert the String into lower case. */

//Input
let convStrToLowerCase="Amarthya";

//Output
console.log("10c: "+convStrToLowerCase.toLowerCase());

/* 10d. Break the string into two halves and swap them. */

//Input
let strToBreakSwap="Blockchain";

let firstHalf=strToBreakSwap.slice(0,strToBreakSwap.length/2);
let secondHalf=strToBreakSwap.slice(strToBreakSwap.length/2,strToBreakSwap.length);

//Output
console.log("10d: "+secondHalf.concat(firstHalf));

/* 10e. Count the repeating characters. */

//Input
let repeatingCharCount="Amarthya";

repeatingCharCount=repeatingCharCount.toLowerCase();
var  charCountMap=new Map();
for( i=0;i<repeatingCharCount.length;i++){
    if(!charCountMap.has(repeatingCharCount.charAt(i))){
    charCountMap.set(repeatingCharCount.charAt(i),1);
    }else{
        charCountMap.set(repeatingCharCount.charAt(i),charCountMap.get(repeatingCharCount.charAt(i))+1);
    }
}

let noOfRepeatingChar=Array.from(charCountMap.values()).filter(value=>value>1).length;

//Output
console.log("10e: "+noOfRepeatingChar);

/* 10f. Reverse the string */

//Input
let strToReverse="amarthya";
let strToReverseArr=Array.from(strToReverse);
let reversedString="";
for(let i=strToReverseArr.length-1;i>=0;i--){
    reversedString=reversedString.concat(strToReverseArr[i]);
}

//Output
console.log("10f: "+reversedString);











