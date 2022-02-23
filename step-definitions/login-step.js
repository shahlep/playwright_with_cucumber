const {Given, When, Then, definestep} = require('@cucumber/cucumber')
const {LoginPage} = require('../page-objects/login-page')

const loginpage = new LoginPage()

Given('I visit a login page', async function() {
    //await page.goto('https://www.saucedemo.com/')
    await loginpage.visitloginpage()
})

When('I fill the login form with valid credentials', async function() {
    //await page.fill('#user-name','standard_user')
    //await page.fill('#password','secret_sauce')
    //await page.click("#login-button")
    await loginpage.filluplogininfo()
})

Then('I should see the home page', async function() {
    //await page.waitForSelector('.title')
    await loginpage.athomepage()
})