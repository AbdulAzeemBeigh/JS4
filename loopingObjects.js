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
  };

 const openingHours ={
    mon:{      
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
        close:24,         
    }
}

  const properties = Object.keys(openingHours);
  console.log(properties);

  console.properties = Object.keys(openingHours);
  console.log(properties)

  let openStr = `we are open on ${properties.length} days`;

  for(const day of properties){
     openStr += `${day}`;
  }

  console.log(openStr)

//   property values
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);

for(const [key,{open,close}] of entries){
    console.log(`on ${key} we open at${open} and close at ${close}`);
}
