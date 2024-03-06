/* 3.	Name Cases: Store a person’s name in a variable,
 and then print that person’s name in lowercase, uppercase, 
 and titlecase.*/

// lower case

let personName: String ="Muhammad";
console.log("lowercase:", personName.toLowerCase());

//  Case

console.log("UpperCase:", personName.toLocaleUpperCase());

// Title Case

console.log("titlecase:", personName.replace(/\bw/g,p => p.toUpperCase()));