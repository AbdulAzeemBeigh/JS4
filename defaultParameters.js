'use strict';
const bookings = [];
const createBooking = function(
    flightNum, numPassengers =1,price=2000){

        const booking = {
            flightNum,
            numPassengers,
            price,
        };

        console.log(booking);
        bookings.push(booking);
    } ;

    createBooking('indigo',200,5000);
    createBooking('Lhz1',200,300);
    createBooking(5000);
    createBooking(200,5000);
    createBooking(200,);
   
