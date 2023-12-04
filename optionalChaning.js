'use strict'

const restaurant = {
    names: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex,mainIndex){
       return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },
    openingHours:{
        mon:{       //ES6 enhanced object literal
            open:12,
            close:22,
        },
        tue:{
            open:11,
            close:23,
        },
        wed:{
            open:0,
            close:24,
        },
        thur:{          
            open:0,
            close:12 +12,        
        }
    }
  };

  if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

//   optional chaning

console.log(restaurant.openingHours.mon ?.open)
console.log(restaurant.openingHours?.mon?.open)
console.log(restaurant.openingHours?.sat?.open)

const weekends = ["mon",'tue','wed','thur','fri','sat'];
for(const day of weekends){
    const open = restaurant.openingHours[day]?.open || 'closed';
   if(open !== 'closed'){
    console.log(`${day} open's at ${open}`);
   }else{
    console.log(`${day} is ${open}`);
   }
};

// methods

console.log(restaurant.openingHours?.sun ?? "Not Defined");
console.log(restaurant.openingHours?.mon?? "Not Defined");

const users = [{ user:'Abdul', email:'abdulazeem222@outlook.com'}];
console.log(users[0]?.email??"email is empty");