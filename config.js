exports.config = {
  directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  
  capabilities: {
    browserName: 'chrome',
     },

  
  specs: ['browser.js'],
/*suites:{
	smoke:['./smoke/*.js'],
	regression:['./regression/*.js'],
	all:['./*.js'],
},*/

  jasmineNodeOpts: {
    showColors: true, 
  }
};
