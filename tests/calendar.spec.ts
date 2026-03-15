import{test, expect} from '@playwright/test';



test('calendarScenario1_DirectDateInputUsingFill', async({page})=>{

    // const targetdate = '10';
    // const targetmonth = 'May';
    // const targetyear = '2026';
        
    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.locator('div input[name="bday"]').fill('2026-05-31')

})

test('CalendarScenario02_Datepicker1',async({page})=>{

    const targetdate = "10";
    const targetmonth = 'May';
    const targetyear = '2026';

    await page.goto('https://www.hyrtutorials.com/p/calendar-practice.html')
    await page.locator('#first_date_picker').click()
    const datepicker =   page.locator(".ui-datepicker-month")
    const yearpicker =  page.locator(".ui-datepicker-year")
    const prevbtn =  page.locator('#ui-datepicker-div a[title="Prev"]')
    const nextbtn =  page.locator('#ui-datepicker-div a[title="Next"]')
    const date =  page.locator('table tbody tr td a[href="#"]')

    while(true){
        if( (await yearpicker.textContent() === targetyear) && (await datepicker.textContent() ===targetmonth))
        {
              await page.getByText(targetdate,{exact: true}).click()
                break;
        }
    await nextbtn.click();

    }
})

test('CalendarScenario3_Datepicker2', async({page})=>{

    const targetdate = '10';
    const targetmonth = 'Apr';
    const targetyear = '2026';

    await page.goto('https://www.hyrtutorials.com/p/calendar-practice.html')

    await page.locator('#fourth_date_picker').click()

    const yearpicker = await page.locator('.ui-datepicker-year')
    const monthpicker = await page.locator('.ui-datepicker-month')
    const nextBtn = await page.locator('#ui-datepicker-div div a[title="Next"]')

    await yearpicker.selectOption(targetyear);
    await monthpicker.selectOption(targetmonth);

    await page.getByText(targetdate,{exact:true}).click()

})
