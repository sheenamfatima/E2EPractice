import {test, expect} from '@playwright/test';

test.beforeEach('GoToUrl', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
})

test('Simple Alert', async ({page})=>{

    page.on('dialog',async (simplalert)=>{
        await simplalert.accept()
    });

    await page.locator('#alertBtn').click()
})

test('Confirmation Alert',async ({page})=>{

    page.on('dialog', async(confirmationalert)=>{
        await confirmationalert.accept()
    });

    await page.locator('#confirmBtn').click()
})


test('PromptAlert',async ({page})=>{

   const test = page.on('dialog',(PromptAlert)=>{
        PromptAlert.accept("SheenamFatima")
        console.log(PromptAlert.message())
    });

   await page.locator('#promptBtn').click()

   

})