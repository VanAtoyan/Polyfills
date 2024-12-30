// String.prototype.replaceAll
// function replaceAll (sourceStr,searchStr,replacedStr) {
//   if (typeof sourceStr !== "string") {
//       throw  Error("argument provided is not a string")
//   }
//  let sourceStrArray = sourceStr.split("")
//   for (i = 0; i < sourceStrArray.length; i++) {
//       if (sourceStrArray[i] === searchStr[0] ) {
//         console.log(replacedStr)
//           sourceStrArray.splice(i, searchStr.length,replacedStr)
// // remove searchStr.length elements from array index i and add replaced strings
//       }
//   }
//   // I will add a reduce method to concatenate all the strings
//   return sourceStrArray.reduce((a,b) => a + b).toString()
// }
// // It is possible to pass a function—rather than a string—as the second argu- ment to replace.
// // lets try that
// // It cant handle regular expressions though

// console.log(replaceAll("abcdefgghhijkl","gh","rt"))

// String.prototype.includes
// String.prototype.myIncludes = function(search, start) {

//   if (search instanceof RegExp) {
//     throw TypeError('first argument must not be a RegExp');
//   }
//   if (start === undefined) { start = 0; }
//   return this.indexOf(search, start) !== -1;
// };

// String.prototype.startsWith
// String.prototype.myStartsWith = function(search, pos) {
//   pos = !pos || pos < 0 ? 0 : +pos;
//   return this.substring(pos, pos + search.length) === search;
// };

// String.prototype.endsWith
// String.prototype.myEndsWith = function(search, this_len) {
//   if (this_len === undefined || this_len > this.length) {
//     this_len = this.length;
//   }
//   return this.substring(this_len - search.length, this_len) === search;
// };

// // String.prototype.trimEnd
// String.prototype.myTrimEnd = function() {
//   return this.replace(/\s+$/, '');
// };

// String.prototype.trim
// String.prototype.myTrim = function() {
//   return this.replace(/^\s+|\s+$/g, '');
// };

// String.prototype.trimStart
// String.prototype.myTrimStart = function() {
//   return this.replace(/^\s+/, '');
// };

//#1 //Array.prototype.at()
// Array.prototype.myAt = function (index) {
//   if (typeof index != "number") {
//     throw new Error("index must be a number");
//   }
//   if (index < 0) {
//     return this[this.length + index];
//   }
//   return this[index];
// };

// let arr = ["apple", "peach", "banana", "strawberry"];
// console.log(arr.myAt(3));

//#2 // Array.prototype.concat()
// Array.prototype.myConcat = function (...arr) {
//   7;
//   let newArr = this;
//   for (let i = 0; i < arr.length; ++i) {
//     if (Array.isArray(arr[i])) {
//       for (let j = 0; j < arr[i].length; j++) {
//         newArr.push(arr[i][j]);
//       }
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7];
// console.log(arr1.myConcat(arr2));

//#3//Array.prototype.entries()
// Array.prototype.myEntries = function () {
//   let newArr = [];
//   for (let i = 0; i < this.length; ++i) {
//     newArr.push([this.indexOf(this[i]), this[i]]);
//   }
//   return newArr;
// };

// let myArray = [1, 2, 3, 4, 5];

// for (const elm of myArray.myEntries()) {
//   console.log(elm);
// }

//#4//Array.prototype.every()
// Array.prototype.myEvery = function(callback){
//     if(!callback){
//         throw new Error('i need calback function ')
//     }
//     for(let i = 0;i<this.length;++i){
//         if(!callback(this[i],i)){
//             return false
//         }
//     return true
//     }
// }

// let myArray = [10,15,8,6,44]
// console.log(myArray.myEvery(i=>i<10));

//#5Array.prototype.fill()

Array.prototype.myFill = function () {
  // ???????????????????????????
};

// #6//Array.prototype.filter()
// Array.prototype.myFilter = function (callback) {
//   if (!callback) {
//     throw new Error("i need calback function ");
//   }
//   let filteredArr = [];
//   for (let i = 0; i < this.length; ++i) {
//     if (callback(this[i], i)) {
//       filteredArr.push(this[i]);
//     }
//   }
//   return filteredArr;
// };

// myArr = [1, 2, 3, 4, 5, 6];
// console.log(myArr.myFilter((elm) => elm < 4));

//#7 //Array.prototype.find()
// Array.prototype.myFind = function(callback){
//   if(!callback){
//     throw new Error ('i need callback function')
//   }
//    for(let i = 0;i<this.length;++i){
//     if(!callback(this[i],i)){
//       return undefined
//     }
//     return this[i]
//    }
// }
// let myArray = ['banana','apple','cherries',]

// console.log(myArray.myFind((elm,i)=>elm=='banana'));
// console.log(myArray);

// #8//Array.prototype.findIndex()
// Array.prototype.myFindIndex = function (callback) {
//   if (typeof callback != "function") {
//     throw new Error("!!");
//   }
//   for (let i = 0; i < this.length; ++i) {
//     if (callback(this[i])) {
//       return i;
//     } else if (i + 1 == this.length) {
//       return -1;
//     }
//   }
// };
// let myArray = [5, 12, 8, 130, 44];
// console.log(myArray.myFindIndex((elm) => elm > 113));

// #9//Array.prototype.findLast()
// Array.prototype.myFindLast=function(callback){
//   if (typeof callback != "function") {
//         throw new Error("!!");
//       }
//       let newArr=[...this]
//       newArr.reverse()
//       console.log(newArr);
//       // console.log(newArr);
//     for(let i = 0;i<newArr.length;++i){
//       for (let i = 0; i < newArr.length; ++i) {
//             if (callback(newArr[i])) {
//               return newArr[i];
//             } else if (i + 1 == newArr.length) {
//               return undefined;
//             }
//           }
//     }
// }

// let myArray = [5, 12, 50, 130, 44]
// // console.log(myArray);
// console.log(myArray.myFindLast((elm)=>elm>44));

// #10 Array.prototype.findLastIndex()
// Array.prototype.myFindLastIndex = function(callback){
//   if (typeof callback != "function") {
//             throw new Error("!!");
//           }
//           let newArr=[...this]
//         newArr.reverse()
//         console.log(newArr)
//         for (let i = 0; i < newArr.length; i++) {
//           if(callback(newArr[i])){
//             return newArr.length-(i+1)
//           }else if(i+1==newArr.length){
//             return -1
//           }
//         }
//       }

//       let myArray = [5, 12, 50, 130, 44]
//       console.log(myArray);
//       // console.log(myArray);
//       console.log(myArray.myFindLastIndex((elm)=>elm>45));
//       console.log(myArray.findLastIndex((elm)=>elm>45));

// #11//Array.prototype.flat()
// Array.prototype.myFlat = function(deep=1,index=0,count=0,flatedArr=[]){
// if(!Array.isArray(this)){
//   throw new Error(`${this} is not a array`)
// }
// let newArr = []
// this.forEach((elm)=>{
//   if(Array.isArray(elm) & deep>0){
//     newArr.push(...elm.myFlat(deep-1))
//   }else{
//     newArr.push(elm)
//   }
// })
// return newArr
// }

// let myArray = [1,2,3,[4,5,6,[7,8]]]
// console.log(myArray.myFlat(2));
// console.log(myArray.flat(2));

//#12//Array.prototype.flatMap()
// Array.prototype.myFlatMap = function (callback) {
//   if (!Array.isArray(this)) {
//     throw new Error(`${this} is not Array`);
//   }
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr[i] = callback(this[i]);

//     if (Array.isArray(newArr[i])) {
//       newArr[i] = newArr.push(...callback(this[i]));
//     }
//   }

//   return newArr;
// };

// let myArray = [1, 2, 3, 4];
// myArray.flatMap((x) => x * 2);
// // console.log(myArray);

// console.log(
//   myArray.flatMap((x) => {
//     x * 2;
//   })
// );
// console.log(myArray.myFlatMap((x) => x * 2));
// console.log(myArray.map((x) => [x * 2]));

//#13//Array.prototype.forEach()
// Array.prototype.myForEach = function(callback){
//   if(!Array.isArray(this)){
//     throw new Error('!!')
//   }
//   let newArr=[]
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(callback(this[i]))
//   }
//   return newArr
// }

// let myArray = [1,2,3,4,5]
// console.log(myArray.myForEach((elm)=>elm+1));

//13// Array.prototype.includes()
// Array.prototype.myIncludes = function (elm, idx) {
//   let newArray = [...this];
//   for (let i = 0; i < this.length; ++i) {
//     if (idx) {
//       if (this[i] == elm && idx == i) {
//         return true;
//       }
//     } else if (isNaN(elm) && isNaN(this[i])) {
//       return true;
//     } else {
//       if (this[i] == elm) {
//         return true;
//       } else if (isNaN(elm) && isNaN(this[i])) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(myArray.myIncludes(3,2));

//14//Array.prototype.indexOf()
// Array.prototype.myIndexOF = function (item, start) {
//   if (start) {
//     for (let i = start; i < this.length; i++) {
//       if (this[i] == item) {
//         return i;
//       }
//     }
//   } else {
//     for (let i = 0; i < this.length; i++) {
//       if (this[i] == item) {
//         return i;
//       }
//     }
//   return -1
//   }
// };

// let myArray= ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(myArray.myIndexOF('bison',2));

//15//Array.prototype.join()
// Array.prototype.myJoin = function (separator = ",") {
//   let result = "";

//   for (let i = 0; i < this.length; i++) {
//     if (i === this.length - 1) {
//       result += this[i];
//     } else {
//       result += this[i] + separator;
//     }
//   }

//   return result;
// };

//16//Array.prototype.lastIndexOf()
// Array.prototype.myLastIndexOf = function (item) {
//   for(let i =this.length-1;i>0;--i){
//     if(this[i]==item){
//       return i

//   }
// }
// }

// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

// console.log(animals.lastIndexOf('Dodo'));
// console.log(animals.myLastIndexOf('Dodo'));

//17//Array.prototype.map()
// Array.prototype.myMap = function (callback) {
//   if (!Array.isArray(this)) {
//     throw new Error("!!");
//   }
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(callback(this[i]));
//   }
//   return newArr;
// };

// const array1 = [1, 4, 9, 16];

// const map1 = array1.myMap((x) => x * 2);
// console.log(map1);
// console.log(array1);

//18//Array.prototype.pop()

// Array.prototype.myPop = function () {
//   let newArr = [];
//   let word = this[this.length - 1];

//   this.length = this.length - 1;
//   return word;
// };

// let myArray = [1, 2, 3, 4, 5, 6];
// console.log(myArray.myPop());

//19//Array.prototype.push()

// Array.prototype.myPush = function (...arguments) {
//   length=this.length
// for (let i = 0; i < arguments.length; i++) {
//   this[length]=arguments[i]
//   length++
// }
// this.length=this.length
// return this.length
// };
// const animals = ["pigs", "goats", "sheep"];

// let count = animals.myPush("cows");
// console.log(count);
// console.log(animals);

// Array.prototype.reduce
// Array.prototype.myReduce = function (cb, initialValue) {
//   let result;
//   let startIndex = 0;

//   if (arguments.length <= 1) {
//     result = this[0];
//     startIndex = 1;
//   }

//   if (arguments.length >= 2) {
//     result = initialValue;
//   }

//   for (let i = startIndex; i < this.length; i++) {
//     result = cb(result, this[i]);
//   }

//   return result;
// };

// Array.prototype.reverse()
// Array.prototype.myReverse = function () {
//   for (let i = this.length; i > 0; --i) {
//     newArr.push(this[i]);
//     this[i] = newArr[i];
//   }
//   console.log(this);

//   return newArr;
// };

// const array1 = ["one", "two", "three"];
// const reversed = array1.reverse();
// console.log("reversed:", reversed);

// Array.prototype.shift()
// Array.prototype.myShift = function () {
//   let newArr = [];
//   for (let i = 1; i < array.length; i++) {
//     newArr.push(this[i]);
//     this.length = newArr.length;
//     this[i] = newArr[i];
//   }
// };

// const array1 = [1, 2, 3];
// const firstElement = array1.shift();
// console.log(array1);
// console.log(firstElement);

// Array.prototype.some()
// Array.prototype.mySome = function(callback){
//   for (let i = 0; i < array.length; i++) {
//     if(callback(this[i])){
//       return true
//     }
//   }
//   return false
// }
// const array = [1, 2, 3, 4, 5];
// const even = (element) => element % 2 === 0;
// console.log(array.some(even));

// Array.prototype.sort()
// Array.prototype.mySort = function(calback){
// ????
// ????
// }
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);

// Array.prototype.slice()
// Array.prototype.mySlice = function (start = 0, end = this.length) {
//   if (start < 0) {
//     start = this.length + start;
//   }

//   if (end < 0) {
//     end = this.length + end;
//   }

//   let arr = [];
//   for (let i = start; i < end; i++) {
//     arr.push(this[i]);
//   }

//   return arr;
// };

// Array.prototype.sort
// function defaultComparator(a, b) {
//   a = a.toString();
//   b = b.toString();
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   return 0;
// }

// Array.prototype.mySort = function (cb = defaultComparator) {
//   for (var i = 0; i < this.length; i++) {
//     for (var j = i + 1; j < this.length; j++) {
//       if (cb(this[i], this[j]) > 0) {
//         var swap = this[i];
//         this[i] = this[j];
//         this[j] = swap;
//       }
//     }
//   }
// };?????????
