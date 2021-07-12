// To practice OOP concepts, let's create 3 classes that use constructor methods. 
//These constructors will assign properties based on initial parameters.

// 1. Create a class for `Breakfast`. `Breakfast` will have a constructor with a food and a drink.
// 2. Create a class for `Lunch`. `Lunch` will have a constructor with a salad, a soup, and a drink.
// 3. Create a class for `Dinner`. Since dinner is a little bit fancier, `Dinner` will have a constructor with 
//salad, soup, entree, and dessert. Indicate that dessert is intended to be a private property by including an underscore (`_`) 
//at the beginning.


class Breakfast {
    constructor(food, drink) {
        this.food = food
        this.drink = drink
    }
}

let Breakfast1 = new Breakfast("waffles", "oj")
let Breakfast2 = new Breakfast("french toast", "coffee")

class Lunch {
    constructor(salad, soup, drink) {   
        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
}

let Lunch1 = new Lunch("cobb", "tomato", "diet coke")
let Lunch2 = new Lunch("greek", "chicken noodle", "water")

class Dinner {
    constructor(salad, soup, entree, dessert) {
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this._dessert = dessert
    }
}

let Dinner1 = new Dinner("caesar", "italian wedding", "chicken marsala", "tirimasu")
let Dinner2 = new Dinner("thai salad", "dumpling soup", "general tsao", "mango sticky rice")