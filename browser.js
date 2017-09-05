var screen = require('./screen.js');
describe('API practise' , function(){
it('browser commands', function(){
browser.get('http://www.protractortest.org/#/')	;
browser.sleep(2000);
browser.takeScreenshot().then(function(png){
	writeScreenShot(png, 'exception.png');
});
/*browser.getTitle().then(function(title){
	console.log('pagetitle' +title);
}); 
//browser.close();

browser.getPageSource().then(function(text){
	console.log('pagesourece' +text)
});*/
//browser.sleep(2000);
//*refresh page..
//browser.refresh();
//*create new browser window
//var fork = browser.forkNewDriverInstance();
//fork.get('http://www.protractortest.org/#/');
//*identify whether element is present
/*var el = element(by.linkText('View on GitHub'));
//browser.isElementPresent(el);
el.click();
browser.ignoreSynchronization = true;
browser.waitForAngular();
browser.sleep(500); 
//browser.waitForAngular();
//browser.explore();
browser.pause();
element(by.partialLinkText('Sign')).click();
browser.sleep(2000);*/
//*browser navigation
/*browser.navigate().back();
browser.sleep(2000);
browser.navigate().forward();*/
//el.isPresent();
//*restart the browser
//browser.restart();

//*set location-in line page navigation
/*browser.get('http://angular.github.io/protractor/#/');
browser.sleep(2000);
browser.setLocation('protractor-setup');
browser.sleep(2000);
//browser current url
browser.getCurrentUrl().then(function(url){
	console.log('url is' +url)*/
//});

});
	
});