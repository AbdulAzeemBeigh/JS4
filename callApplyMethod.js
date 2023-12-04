'use strict'


// call Method
const indigo = {
    airline:'indigo',
    iataCode:'io',
    bookings:[],
    book(flightNum,name){
        console.log(`${name} booked a sear on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        this.bookings.push({flight:`${this.iataCode}${flightNum}`,name});

    },
};
  
  indigo.book(3, 'Abdul Azeem');
  indigo.book(245, 'lewis');
  

const jetAirlines = {
    airline:'jetAirlines',
    iataCode:'jAl',
    bookings:[]
};
  

// const book = indigo.book;
//  book(29,'Abdul Azeem')
  
  

indigo.book.call(jetAirlines,242,'Abdul Azeem');
console.log(indigo);
indigo.book.call(indigo,343,'Abdul Azeem Beigh');


const Emirrates = {
    airline:'UAE airlines',
    iataCode:'UAE al',
    bookings:[]
};
  
// indigo.book.call(uae,334,'Abdul Azeem');

  
// Apply method


const flightData = [3,"Abdul Azeem"];
// indigo.book.apply(uae,flightData);
console.log(Emirrates);
  

