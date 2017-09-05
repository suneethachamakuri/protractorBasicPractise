var SelectWrapper = require('./select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));

describe("Select Wrapper",function(){



    it("Handling the dropdown list",function(){


        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/customer");
        
       // mySelect.selectByText("Harry Potter");
        mySelect.selectByValue("3");
        browser.sleep(2000);

    }) ;
});