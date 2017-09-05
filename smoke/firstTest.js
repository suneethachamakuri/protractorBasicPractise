describe('verify addition and subtraction functionalities are working or not', function() {
	beforeEach(function() {
		browser.get('http://juliemr.github.io/protractor-demo/');	
	});
	
		 
	 
  xit('validate addition', function(){
	   
   element(by.model('first')).sendKeys('22');

   element(by.model('second')).sendKeys('13');
   element(by.id("gobutton")).click();
   expect(element(by.binding('latest')).getText()).toBe('35');
   console.log('addition executed');
  });
  
  it('validate subtraction', function(){	
	   
	   element(by.model('first')).sendKeys('22');
	   element(by.model('operator')).$('[value="SUBTRACTION"]').click();

	   element(by.model('second')).sendKeys('13');
	   element(by.id("gobutton")).click();
	   expect(element(by.binding('latest')).getText()).not.toBe('6');
	   console.log('subtraction executed');
	  });
  
});