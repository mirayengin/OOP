//* ======================================================
//*                     (OOPS)
//* ======================================================

//* Object Literals
console.log("**** Object Literals ****");

const book1 = {
    title: "The Kramazov Brothers",
    author: "Dostoevski",
    year: 1880,
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    },
};

console.log(book1);

//! Prototype bu üretilen değerin nerden üretildiğini gösterir.
//! Javascript ten herşey Object ten türetilmiştir.


console.log(book1.hasOwnProperty("author")); //? book1 de author varmı bunu kontrol eder true false verir.

const book2 = {
    title: "The Lily of Valley",
    author: "Honere de Balzac",
    year: 1888,
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}


console.log(book2);
console.log(book2.getSummary());

//? Object literals yontemi ile fazla sayida yeni objeler olusturmak oldukca zahmetlidir.
//? Ayrica programcilik yaklasimi acisindan da cok tekrar icerdigi icin uygun degildir (DRY - Dont Repeat Yourself)
//? Cozum: Object Oriented Programming (ES5 and ES6)

