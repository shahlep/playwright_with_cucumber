const playwright = require('playwright')
const {Before, After, BeforeAll, AfterAll} = require('@cucumber/cucumber')

BeforeAll(async()=>{
    console.log('Launching the browser')
    global.browser =await playwright['chromium'].launch({headless:false})
})

AfterAll(async()=>{
    console.log('Closing the browser')
    await global.browser.close()
})