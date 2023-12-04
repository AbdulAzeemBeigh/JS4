const weekends = ["mon",'tue','wed','thur','fri','sat'];

const openingHours={
    [weekends[3]]:{       //ES6 enhanced object literal
        open:12,
        close:22,
    },
    [weekends[4]]:{
        open:11,
        close:23,
    },
    [weekends[5]]:{
        open:0,
        close:24,
    },
    [`Day-${2+4}`]:{          //computing properties
        open:0,
        close:12 +12,         // computing valuesss
    }
};

const restaurant = {
    names: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex,mainIndex){
       return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },
    openingHours                 //ES6 enhanced object literal
    
  };

  console.log(restaurant);

console.log(openingHours);