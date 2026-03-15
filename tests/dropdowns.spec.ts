import{test,expect} from '@playwright/test';

test('DropDownScenario1',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("#country").selectOption('India');
    await page.locator('#colors').selectOption(['Red','Yellow'])
    await page.locator('#animals').selectOption('Cat')
})