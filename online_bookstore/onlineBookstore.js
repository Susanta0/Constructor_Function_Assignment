// Author details>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function AuthorDetails(name,birthYear,nationality){
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality
}

// Author book details>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function AuthorBook(title,AuthorDetails,genre,price){
    this.title = title;
    this.AuthorDetails = AuthorDetails;
    this.genre = genre;
    this.price = price
}

let store1=new AuthorDetails("Brendan Eich",1961,"America");
let store2=new AuthorDetails("Satish Chandra",1922,"India");
let store3=new AuthorDetails("Leo Tolstoy",1928,"Russian Empire");
let store4=new AuthorDetails("T.S Eliot",1988,"America");
let store5=new AuthorDetails("Susanta",1998,"India");

let bag1=new AuthorBook("JavaScript",store1,"Coding",500);
let bag2=new AuthorBook("medieval Indian history",store2,"History",1000);
let bag3=new AuthorBook("War and Peace",store3,"War story",2000);
let bag4=new AuthorBook("Waste Land",store4,"modernist poetry",3500);
let bag5=new AuthorBook("New Coder",store5,"Coding",299);

// Autor name with book details>>>>>>>>>>>>>>>>>>>>>>>
function getBookInfo(){
   console.log(`Book title name:- ${this.title}`);
   console.log(`Author name:- ${this.AuthorDetails.name}`);
   console.log(`Genre is:- ${this.genre}`);
   console.log(`Price:- ${this.price}`); 
}
getBookInfo.call(bag1)
getBookInfo.call(bag2)
getBookInfo.call(bag3)
getBookInfo.call(bag4)
getBookInfo.call(bag5)
