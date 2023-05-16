test suite is the collection of related test cases  
`describe` is used to declare a test suite  
`it` is used to write a test case  

write assertions to check the results ---> chai is used  
spy the method ---> ccreate a wrapper around the method and keep an eye over all its activities ---> using sinon  


Mock ---> using sinon  
stubs ---> using sinon  
`describe.skip()`  
`it.skip()`  
`this.skip()`  
`describe.only()`  
`it.only()`  
`this.retries(2)`  
`new Promise()`  

`this.timeout(5000)` ---> to be used inside `it` statement  
`this.timeout(0)` ---> wait until the promise is not resolved or rejected  

hooks--->  
1. after
2. before  
This will executed once per test suite (once per describe block)   

```
after(()=>{
    // code
})
```

3. afterEach  
4. beforeEach  
This will executed after and before each test case (after and before it block)  

Root level hook   
  
Report coverage ---> nyc ---> tells how the test has covered the lines, functions and branches (if else)  

