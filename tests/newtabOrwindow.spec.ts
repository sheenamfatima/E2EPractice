import{test, expect} from '@playwright/test'

test.beforeEach('OpenUrl',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
})

test('Newtab', async ({page})=>{

    const newtab = page.waitForEvent('popup')

    page.getByRole('button', {name: 'New Tab'}).click()

    const opentab = await newtab;

    expect(opentab.locator('#header-inner h1')).toHaveText("SDET-QA Blog");

})

test('New Window', async ({page})=>{

    const newwindow = page.waitForEvent('popup')

    page.locator('#PopUp').click()

    const openwindow = await newwindow

    expect(openwindow.locator('#Layer_1')).toBeVisible();
})