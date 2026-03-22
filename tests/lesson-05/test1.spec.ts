import { test } from '@playwright/test';

test('Bài học 1: Register Page (có đủ các element)', async({page}) => {
    await test.step('Truy cập trang', async() => {
        await page.goto("https://material.playwrightvn.com/")
    })

    await test.step('Click “Bài học 1: Register Page (có đủ các element)”', async()=> {
        await page.click("//a[contains(text(),'Bài học 1: Register Page (có đủ các element)')]")
    })

    await test.step('Nhập thông tin cho các field', async() => {
        await page.locator("//input[@id='username']").fill("Tram Nguyen");
        await page.locator("//input[@id='email']").fill('ddd@gmail.com');
        // await page.locator("//input[@id='female']").click();
        await page.locator("#female").check();
        await page.locator("#reading").check();
        await page.locator("#traveling").check();
        await page.locator("#interests").selectOption("art");
        await page.locator("#country").selectOption("uk");
        await page.locator("#dob").fill("1996-04-11");
        await page.locator("#profile").setInputFiles("tests/lesson-05/data/profile.png");
        await page.locator("#bio").fill("Bachelar of information technology at Hanoi national univesity of Education");
    })

     await test.step('Click button Register', async()=> {
        await page.click("//button[@type = 'submit']")
    })
})