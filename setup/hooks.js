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

Before(async()=>{
    console.log('setting up context and page')
    global.context = await global.browser.newContext()
    global.page = await global.context.newPage()
})

After(async()=>{
    console.log('closing context and page')
    await global.page.close()
    await global.context.close()
})