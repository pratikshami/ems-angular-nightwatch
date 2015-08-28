
module.exports = {


  'step one' : function (browser) {
    browser
      .url('http://localhost:3010/#/home')
      .waitForElementVisible('body', 1000)
     .click('a[id=AddEmployeeLink]')
	  // .waitForElementVisible('a[id=AddEmployeeLink]', 1000)
	   
	},
	
	 'step two' : function (browser) {
      browser
	   .url('http://localhost:3010/#/add')
	   .waitForElementVisible('body', 1000)
      .setValue('input[name=code]', '2222')
	  .setValue('input[name=name]', 'neha')
	  .setValue('input[name=city]', 'pune')
      .waitForElementVisible('button[id=btn_add1]', 1000)
      .click('button[id=btn_add1]')
      .pause(1000)
      //.assert.containsText('#code', '4000')

 

  },
  
  'step three' : function (browser) {
      browser
	   .url('http://localhost:3010/#/list')
	   .waitForElementVisible('body', 1000)
    .end();
	}
};