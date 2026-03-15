import{test, expect, chromium} from '@playwright/test';

test('NoFixture', async()=>{

    const context = await chromium.launch(
   {
        channel: 'chrome',
        headless : false
   }
    )

    const page = await context.newPage()
    await page.goto("https://testautomationpractice.blogspot.com/")
    expect(page.locator('#Wikipedia1 h2.title')).toHaveText('Tabs')

})

test('BrowserContext', async({browser})=>{

    const context1 = await browser.newContext();

    const page = await context1.newPage()

    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.locator('form input[name="name"]').fill("SheenamFatima")
    
})