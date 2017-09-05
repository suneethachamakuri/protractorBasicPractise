var logger = require('../log');

describe('verify matchers', function() {
	var title;
	beforeEach(function() {
		browser.get('http://juliemr.github.io/protractor-demo/');	
		title= browser.getTitle();
		title.then(function(text){
			console.log(text);
		});	
	});
  it('validate title should match', function(){
	  
  expect(title).toEqual('Super Calculator');
  logger.log('info', 'validate title match');
  });
  it('validate title should not match', function(){
	  
	  expect(title).not.toEqual('Super Calculator12');
	  logger.log('info', 'validate title not match');
	  });
it('validate title partial match', function(){
	  
	  expect(title).toMatch('Calculator');
	  logger.log('info', 'validate title partial');
	  });
});
  