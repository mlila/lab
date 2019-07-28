const puppeteer = require('puppeteer');
Feature('My First Test');
Before(async (I) => { 
    I.amOnPage('http://weatunes.surge.sh')
    I.click('Sign In')
})

Scenario('test something', async(I) => {
    // let browser = await puppeteer.launch({headless : false})
    // page = await browser.newPage();
    // I.amOnPage('http://weatunes.surge.sh')
    // I.click('Sign In')

    I.see('Sign in with your email address')
    I.seeInCurrentUrl('/login')
    I.fillField('input[name="username"]','john@gmail.com')
    I.fillField('input[name="password"]','123')
    I.click('Sign In')
    //I.seeInCurrentUrl('/#/home')
    //await browser.close();


})