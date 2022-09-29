//* ======================================================
//*             OOP - Object Constructor (ES5)
//* ======================================================

//? Object Constructor
//* Javascript, prototype-temelli bir dildir.
//* Butun JavaScript nesneleri (objects) ozellikleri (properties)
//* ve metotlari bir prototipten miras olarak almaktadir.
//* Object prototipi, prototip miras zincirinin en tepesinde yer almaktadir.
//* Ornegin Date ve Array nesneleri Object.prototype'dan miras almaktadir.

//? Object Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function () {
      return `${this.title} was writtten by ${this.author} in ${this.year}`;
    };
};
  
  
  //? new keyword'u Book Constructor'ini parameterler ile cagirmaktadir.
  //? Constructor ise Book nesnesinden bir ornek (instance) olusturmaktadir.
  //? Constructor, mantiksal bir ifade iken instance fiziksel bir olusum gibi dusunulebilir.
  //? Contructor'da tanimlanmis tum degisken ve fonksiyonlar olusturulan
  //? her bir instance'da hayat bulmus olur.

  //? instance
  const book1 = new Book("Kasagi", "Omer Seyfettin", 1920);
  

//? instance
const book2 = new Book("Sinekli Bakkal", "H. Edip Adıvar", 1930);

//! Prototype, belirli bir Nesne'nin (Object) tum instance'larina
//! kolay bir sekilde metotlar tanimlamaya izin vermektedir.
//! Prototip alaninda bir metot tanimlamanin avantaji bu metot'un
//! olusan tum instance'larin belleginde yer kaplamamasi ancak tum
//! instance'larin bu metota ulasabilmesidir.


//? book a eklediğimiz için bütün olusanlarda görülecek
Book.prototype.getAge = function () {
    return new Date().getFullYear() - this.year;
  };
  

  //? burada getSummery fonk prototype a attık ve sadece burda yazmamız yetti çünkü diğerlerinde olacak hepsinde
  Book.prototype.getSummary = function () {
    return `${this.title} was writtten by ${this.author} in ${this.year}`;
  };
  
// book1.price = 100;//? sadece book1 e price key ini ekledik
Book.prototype.price = 100; //? bütün kitapların hepsi fiyatı 100 oldu



//* Ornegin Book nesnesinin tum instance'lari getAge() fonksiyonunu miras alabilir.
//* Ancak, getAge() fonksiyonu bellekte sadece bir yer kaplamaktadir.
//* Bir nesnenin prototiplerine .prototype ile erisilebilir.
//* Ancak bir instance'in prototiplerine .__proto__ ile erisilmektedir.

console.log(Book.prototype); //? objectin prototype larına bakarken
console.log(book1.__proto__); //? object ten oluşturulan ların prototype ına bakmak için

//! Bellek açısından prototype a atmak mantıklı function ları veya değerleri

  console.log(book1);
  console.log(book1.getSummary());
  
  console.log(book1, book2);
  
  console.log(book1, book2);
  console.log(book1.getAge());
  console.log(book2.getAge());
  

console.log(book1.getSummary());
console.log(book1);


//? INHERITANCE (KALITIM -ES5)

//* Sub-Class

function Magazin(title, author, year, month) {

    Book.call(this, title, author, year) //? burada book objesini cağırdık ve içindekileri buraya taşıdık.
    this.month = month; //? burada ise farklı proporty eklendi yaptık.
}



//! Prototipleri miras almak icin Object.create() metodu kullanabilir.
Magazine.prototype = Object.create(Book.prototype); //? book taki prototype ları buna aktardık

//? Magazine objesinin yeni bir instance
const mag1 = new Magazine("Scientific Research", "Einstein", 1926, "Sep");
console.log(mag1);

//! Prototipler dogrudan miras olarak gelmez.
console.log(mag1.getSummary());
console.log(mag1.getAge());
console.log(mag1.price);





















































