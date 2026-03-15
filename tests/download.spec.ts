import{test,expect} from '@playwright/test'
import path from 'path';
import fs from 'fs';

test('downloadfile', async({page})=>{

     

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.getByRole('link',{name: 'Download Files'}).click();

    expect(page.getByText('Download Files')).toBeVisible();

    await page.locator('#inputText').fill('sheenam')

    await page.locator('button[id = "generateTxt"]').click()  

    const downloadevent = page.waitForEvent('download')

    await page.locator('a#pdfDownloadLink').click()

   const download = await downloadevent;
   
   const downloaddir =  path.join(__dirname,'../download')

   const filename =  download.suggestedFilename();
   const filepath =  path.join(downloaddir,filename)

   await download.saveAs(filepath)

     expect(filepath).toContain(filename)
     expect(fs.existsSync(filepath)).toBeTruthy()
   
       // Clean up - delete the downloaded file after verification
        fs.promises.unlink(filepath)
        expect(fs.existsSync(filepath)).toBeFalsy()

})