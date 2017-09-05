describe('verify repater locator is working or not', function() {
	it('validate row data', function(){
		browser.get('http://juliemr.github.io/protractor-demo/');	
  
	   
   element(by.model('first')).sendKeys('22');

   element(by.model('second')).sendKeys('13');
   element(by.id("gobutton")).click();
   
   element(by.model('first')).sendKeys('12');
   element(by.model('second')).sendKeys('5');
   element(by.id("gobutton")).click();

   element(by.model('first')).sendKeys('2');
   element(by.model('second')).sendKeys('9');
   element(by.id("gobutton")).click();
   element.all(by.repeater('result in memory')).getText().then(function(rows){
	   var noRows=rows.length;
	   for(i=0;i<noRows;i++)
		   {
		   var result=element(by.repeater('result in memory').row(i)).getText();
		   result.then(function(text){
			   console.log(text);   
		   });
		   };
	   
   });
  });
});