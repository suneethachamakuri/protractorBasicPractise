describe('Verify banking site login',function(){
it('validate the dropdown', function(){
	browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
	expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');
element(by.buttonText('Customer Login')).click();
element.all(by.css('#userSelect option')).then(function(items){
	console.log('total values are'+items.length);

	console.log('list of values are');
	for(i=0;i<items.length;i++)
		{
		items[i].getText().then(function(text){
			console.log('list is'+text);
		});
		}
	for(i=0;i<items.length;i++)
	{
	items[i].getAttribute('value').then(function(text){
		console.log(text);
	});
	}
});
	element(by.model('custId')).$("[value='3']").click();
	element(by.buttonText('Login')).click();
	expect(element(by.binding('user')).getText()).toEqual('Ron Weasly');
	browser.sleep(3000);
});
});