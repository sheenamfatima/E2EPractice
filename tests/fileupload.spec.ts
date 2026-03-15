import{test,expect} from '@playwright/test'
import path from 'path';

test("fileupload",async({page})=>{

     await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html')

     console.log(__dirname)
    const filepath1 = await path.join(__dirname,'../TestData/geto.jpg')     
     await page.locator('#singleFileInput').setInputFiles(filepath1)
     console.log(filepath1)

     
})