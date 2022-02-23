class LoginPage {
    async visitloginpage(){
        await page.goto('https://www.saucedemo.com/')
    }
    async filluplogininfo(){
        await page.fill('#user-name','standard_user')
        await page.fill('#password','secret_sauce')
        await page.click("#login-button")
    }
    async athomepage(){
        await page.waitForSelector('.title')
    }
}