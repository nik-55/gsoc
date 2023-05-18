/**
 * object.property
 * object.method()
 */

class Book {
    constructor(name, author) {
        this.name = name
        this.author = author
    }

    get fullName() {
        return "Hellooo"
    }

    set fullName(value) {
        this.fullName = value
    }

    getSummary() {
        return "Land of greatness"
    }

    static topBookStore() {
        return "Land of lions";
    }
}

const book1 = new Book('bharat','nikhil')
book1.author
book1.getSummary()
// book1.fullName ---> getter method can be used as a property 
// book1.fullName = 'Nikhil mahajan' ---> set the fullname to Nikhil mahajan

// book1.topBookStore() ---> give error as topBookStore is a static method
// Book.topBookStore() ---> works fine 

/**
 * Example of inheritance
 */
class Magazine extends Book {
    /**
     * Whenever writing constructor it is must that we call the super ourself
     */
    constructor() {
        super('nuil','ded')
    }

    hello() {
        // this.name ---> property of parent class can be accessed by using this 
        // to access the methods of parent class in the child class we use super 
        return super.getSummary()
    }
}

const magazine1 = new Magazine();
magazine1.getSummary()
magazine1.author

class Util {
    #name = "";
    constructor() {
        this.#name = "s"
    }
}