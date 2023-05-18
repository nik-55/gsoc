/**
 * Student Name
 * @type {string}
 */
const studentName = 'Nikhil Mahajan';

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [23,23.6,57,78.8,56]

/**
 * Todo object
 * @type {{id:number|string, text: string}}
 */
const todo = {
    id: 1,
    text: "Hello"
}

/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total amount in dollar
 */
const calculateTax = (amount,tax)=>{
    return `$${amount+amount*tax}`;
}

/**
 * A Student
 * @typedef {Object} Student
 * @property {number} id - Student Id
 * @property {string} name - Student Name
 * @property {string|number} [age] - Student Age (optional)
 * @property {boolean} isActive - Is Student active
 */

/**
 * Student 
 * @type {Student}
 */
const student = {
    id: 1,
    name: 'nikhil mahajan',
    age: '12',
    isActive: true
}

/**
 * Class to create a Person object
 */
class Person {
    /**
     * 
     * @param {Object} personInfo - Person Information 
     */
    constructor(personInfo) {
        /**
         * @property {string} name - Person Name
         */
        this.name = personInfo.name
        /**
         * @property {string|number} age - Person Age
         */
        this.age = personInfo.age    
    }

    /**
     * @property {Function} greet - Greet jai shree krishna
     * @returns {void}
     */
    greet() {
        console.log("Jai Shree krishna");
    }
}

/**
 * See {@link Person}
 */
const person1 = new Person({name: "Nikhil", age: 12});


/**
 * @module calculator
 */

/**
 * Add tutorial in opts in jsdoc.json 
 * tutorials: "./tutorials"
 * Make a tutorials directory and tutorials.json in it
 * Write the .html files inside the tutorials folder
 */

/**
 * See {@tutorial calculator-tutorial}
 */

/**
 * @file index.js is the root file
 * @author Nikhil Mahajan
 * @see <a href="https://google.com"/>Google</a>
 */