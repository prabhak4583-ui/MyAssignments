/*import test from '@playwright/test'

test("Select and Option", async({page})=>{
await page.goto("https://www.telerik.com/contact")
await page.selectOption("#Dropdown-1",{value:"Account activation"})
await page.selectOption("#Dropdown-2",{index:5})
await page.selectOption("#Country-1",{label:"India"})

await page.waitForTimeout(3000)

})*/
import { test } from '@playwright/test'
test("select and Option Tag",async({page})=>{
await page.goto("https://www.leafground.com/select.xhtml")

await page.selectOption(".ui-selectonemenu",{label:"Playwright"})
await page.waitForTimeout(3000)
await page.selectOption(".ui-selectonemenu",{index:1})
})

test("Non Select tag",async({page})=>{
await page.goto("https://www.leafground.com/select.xhtml")
await page.locator("[id='j_idt87:country_label']").click()
await page.locator("[id='j_idt87:country_4']").click()

//await page.locator("(//input[@class='inputLogin'])[2]").fill("Demo")

})