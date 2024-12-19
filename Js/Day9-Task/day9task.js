var arr=["ALice","Bob","Charlie","David"]
arr.unshift("Beaula")
arr.pop()
console.log(arr);
console.log(arr.includes("Bob"));
console.log(arr);

var str="Learn,Practice,Improve"
var array=(str.split(" "));
console.log(array);
var reversearr=array.reverse();
console.log(reversearr);

var str = "Learn,Practice,Improve";
var wordsArray = str.split(",");
var reversedArray = wordsArray.reverse();
var finalOutput = reversedArray.join(" ");
console.log(finalOutput); 

var arr1=["Song1", "Song2", "Song3"] 
var arr2= ["Song4", "Song5"]
var song=arr1.concat(arr2);
song.shift();
song.push("Song6")
console.log(song);

var movies1=["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"]
var movie=movies1.slice(1,4)
console.log(movie);
var movies2=["The Matrix", "The Godfather"]
var movies=movie.concat(movies2)
var reversemovie=movies.reverse();
console.log(reversemovie)

var numbers= [1, 2, 3, 4, 5];
numbers.shift();
numbers.push(6,7)
numbers.length;
console.log(numbers);
console.log(numbers.length);

var cart=["Milk", "Bread", "Eggs", "Butter"]
console.log(cart.includes("Eggs"));
cart.pop()
cart.push("Cheese","Juice")
console.log(cart);

var names1=["Alice", "Bob", "Charlie"]
var names2= ["David", "Eve"]
var names = names1.reverse();
var combo = names1.concat(names2);
combo.unshift("Frank");
console.log(combo); 

var shopping=["Milk", "Bread", "Eggs", "Butter"]
var cart= shopping.indexOf("Eggs");
console.log(cart);
if (cart !== -1) {
    shopping[cart] = "Cheese";
  }
shopping.unshift("Juice");
console.log(shopping);
