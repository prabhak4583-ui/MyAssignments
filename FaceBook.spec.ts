import {test} from '@playwright/test'

test("Facebook Reg", async({page})=>{
await page.goto("https://www.facebook.com/")
//click on create new account button
await page.locator("//a[contains(text(),'account')]").click()
await page.waitForTimeout(1000)
//add firstname input
*await page.locator("//input[@name='firstname']").fill("user1")
//add lastname input
await page.locator("//input[@name='lastname']").fill('test')
//select day month and year dropdown option below
await page.waitForTimeout(1000)

await page.selectOption("#day",{value:"1"})
await page.waitForTimeout(1000)

await page.selectOption("#month",{index:5})
await page.waitForTimeout(1000)

await page.selectOption("#year",{label:"1990"})
//select gender radio button
await page.locator("(//input[@type='radio'])[2]").check()
await page.waitForTimeout(500)
// enter gmail id
await page.locator("//input[@name='reg_email__']").fill("test@gmail.com")
// enter new password
await page.locator("#password_step_input").fill("Password!23")
 })