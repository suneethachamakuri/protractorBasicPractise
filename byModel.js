var abcd = require('./customlocators.js');


describe("locator-by model",function(){
	
it("registration form", function(){
	
	browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
	element(by.model('Auth.user.name')).sendKeys('angular');
	element(by.model('Auth.user.password')).sendKeys('password');
	element(by.model('model[options.key]')).sendKeys('suneetha');
	element(by.ngClick('Auth.login()')).click();
	
});	
	
});
