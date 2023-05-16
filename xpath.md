```

/ ---> absolute path
// ---> relative path
* ---> anything
/div[1] --> first element
//input[@name='hello']
//input[contains(@name,'first')]
//input[starts-with(@name,'very first')]
//a[text()='hello']
//a[@name="hello" and @id="efe"]
//a[@name="hello" or @id="dee"]
//select[@name='country']//parent::form ---> select the parent with tagname as form
//select[@name='country']//child::option[3] ---> select the 3rd children with tagname as option
//select[@name='country']//self::select
// Axes Method ---> self,child,parent
// There are more axes method as well
//option[@value='efe']//following::option ---> select all the options that comes after the option with value efe 
// of all the select
// option[@value='efe']//following-sibling::option ---> select all the option that comes after this option with same
// parent as this option
// preceding
// preceding-sibling

```

[css selectors](https://www.w3schools.com/cssref/css_selectors.php)