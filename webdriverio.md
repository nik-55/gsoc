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

You can't mix multiple selector strategies in one selector. Use multiple chained element  
queries to reach the same goal  

For example in first $ we are using css selector strategies and in the second we are   
using xpath strategies

`$('css selector strategies').$('xpath strategies')`  

```
const elem = await $('header h1*=Welcome') // doesn't work!!!
// use instead
const elem = await $('header').$('*=driver')
```

`$( 'button=Submit' )`  
`$( 'button*=Submit' )`   
`<my-element>Bharat is love</my-element>`
`$( '<my-element />' )`   
 

```
const paragraph = await $('//body/p[2]')
await expect(paragraph).toHaveText('barfoo')

const parent = await paragraph.$('..')
expect(await parent.getTagName()).toBe('body')
```


`<div aria-label="foobar">Hello World!</div>`  
`const elem = await $('aria/foobar')`   

```
<button aria-labelledby="ref-1">Click Me!</button>
<div id="ref-1">Some Button</div>
```

aria-labelledby
```
const elem = await $('aria/Some Button')
await expect(elem).toHaveText('Click Me!')
```

shadow dom   
`shadow$()`   
`shadow$$()`   


```
browser.addLocatorStrategy('myCustomStrategy', (selector, root) => {
    /**
     * scope should be document if called on browser object
     * and `root` if called on an element object
     */
    const scope = root ? root : document
    return scope.querySelectorAll(selector)
})


<div class="foobar" id="first">
    <div class="foobar" id="second">
        barfoo
    </div>
</div>

const elem = await browser.custom$('myCustomStrategy', '.foobar')
console.log(await elem.getAttribute('id')) // returns "first"
const nestedElem = await elem.custom$('myCustomStrategy', '.foobar')
console.log(await elem.getAttribute('id')) // returns "second"
```

