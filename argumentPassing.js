'use strict'
const flight = 'Indigo';
const abdul ={
    _name: "Abdul Azeem",
    passport : '12345678901'
};

const checkIn = function(flightNum,passenger){
    flightNum = 'Lhz19',
    passenger.name = "Mr." + passenger._name;

    if(passenger.passport ==='12345678901'){
        alert("checked In");
    }else{
        alert("Wrong Passport!");
    }

};

checkIn(flight,abdul);
console.log(flight);
console.log(abdul);

const x = {
    _name:"Jhon",
    passport: Math.trunc(Math.random()*100000000)
}
checkIn(flight,x);
console.log(flight);
console.log(x);