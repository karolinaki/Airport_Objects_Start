

//const Bag = require("./Bag.js")//
class Person {
    // Include a Constructor Method for Properties: 
        // 1. Name
        // 2. Bags
            // 2a. Bags should contain/reference a data type for storing more than one bag object.
    constructor(name, bags) {
        /* if (!name) {
         throw new Error("passenger must have a name")
         }*/
        this.name = name;
        this.bags = [];
    }
    addBag(bag) {
        (this.bags).push(bag)
    }

    // Include an addBag method
}

/*try {
    const person = new Person();
} catch(err) {
    console.log(err)
}*/
//Export the Module
module.exports = Person