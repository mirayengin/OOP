//* ======================================================
//*           OOP - Classes and Inheritance (ES6)
//* ======================================================

//? Classes'lar, object (nesne) olsuturmak icin kullanilan sablonlardir.
//? JS'de Class'lar prototipler uzerine insa edilmistir. Ancak, syntax
//? ES5'den farklidir. Aslinda, class keyword'u ilk olarak ES6 da
//? kullanilmistir ancak bu sadece bir syntactical sugar'dir.
//? JavaScript, class-tabanli bir dil degil, prototype-tabanli bir dildir.
//? yaygin kullanim class-tabanli oldugu icin syntax'ini O'na benzetmistir.

//? Bir parent class'in degisken ve fonksiyonelliği extends
//? keyword'u ile child class'a gecmektedir.(INHERITANCE)


class Book {
    constructer(title,author,year) { //? buraya yazılan değişkenlerin hepsi intance lara gider
        this.title = title;
        this.author = author;
        this.year = year;

        //? Bu alanın içinde yazılan metotlar butun ınstance ların belleğinde tek tek yer kaplar.
        this.title = function () {
            return this.title
        }
    }

    //? bu kısımda yazılanlar prototype alanında bulunur.
    getAge() {
        return new Date().getFullYear() - this.year;
    }
    
     getSummary() {
        return `${this.title} was writtten by ${this.author} in ${this.year}`;
    }
    
}


  //? instance
  const book1 = new Book("Kasagi", "Omer Seyfettin", 1920);
  

console.log(book1);
console.log(book1.getAge()); //? book classı na koyduğumuz fonk ları görebiliriz.



//? Sub-Class tanımlaması (Inheritance)

class Magazin extends Book {
    constructer(title, author, year, month) {

        //? Book un consructor ı çağrıldı.
        super(title, author, year) //? Book un prototype ınu kopyalamış olduk bununla
        this.month = month;
    }
}


//? Magazine objesinin yeni bir instance
const mag1 = new Magazine("Scientific Research", "Einstein", 1926, "Sep");
console.log(mag1);





















