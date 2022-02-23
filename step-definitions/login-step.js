const {Given, When, Then, definestep} = require('@cucumber/cucumber')

Given('I visit a login page', async function() {
    await page.goto('https://www.saucedemo.com/')
})