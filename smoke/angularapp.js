describe('Verify inputbox',function(){
it('enter value into field', function(){
	browser.get('https://angularjs.org')
element(by.model("yourName")).sendKeys("suneetha");
element(by.binding('yourName')).getText().then(function(text){
console.log(text);	
});
});
});