`beforeTest` ---> for imports   
`global.expect = chai.expect`   
`$` ---> selector (findElement)   
`getText()`  
`setValue()`   
`browser.url()`  
`browser.pause(3000)`  
`$$` ---> selector (findElements)  
`click()`   

```
class HomePage{
    get element1() { return $( '#element1' ); }
    get element2() { return this.element1.$('#child1'); }
    get child2() { return $('=Spice jet') }
    get child3() { return $( '*=Spice jet' ) }  // for partial text
}

module.exports = new HomePage();
```

// parameters can not be passed to getter method    
instead use the function that works as getter   

`isDisplayed()`  
`isEnabled()`   
`isExisting()`   
`waitForDisplayed()`   

`npm run test -- --spec ./tests/tester.js`   
`expect()`  
`browser.getUrl()`   

`clearValue()`   
`getValue()`  

three level menu ---> `moveTo()`   
`setValue("Tab")` ---> keyboard tab   
`setValue("Enter")` ---> keyboard Enter  
`scrollIntoView()`   
 
`browser.acceptAlert()`   
`browser.getAlertText()`   
`waitForEnabled(timeout,{message : "Button is not enabled yet"})`   
`waitForExist()`   

`browser.waitUntil(condition,timeout,timeoutMssg)` ---> explicit wait     
explicit wait are recommended to use over large implicit wait   

```
browser.waitUntil(function(){
    return email.isDisplayed() === true;
},5000,"Email Input field is not displayed")
```

`browser.getTitle()`   

```
suites:{
    myName: [
        './tests/test2.js',
        './tests/test4.js'
    ]
}
```

`npm run test --suite myName`   

`allure` reporter   
`allure generate and allure open`   
`ENV=qa npm run test`    

`browser.maximizeWindow()`   

chrome developers tool ---> recorder   
BDD ---> behaviour driven development   

junit reporters ---> jenkins  