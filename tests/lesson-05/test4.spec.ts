import { test } from '@playwright/test';

test('Bài học 4: Personal notes', async ({ page }) => {
    await test.step('Truy cập trang', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step('Click Bài học 4: Personal notes', async () => {
        await page.click('//a[text() = "Bài học 4: Personal notes"]')
    })


    async function fillPersonalNotesWithTimes(times: number) {
        const btnAddNote = "//button[@id = 'add-note']";
        const locatorInputTitle = page.locator(`//label[contains(text(),'Title:')]/../input`);
        const locatorInputContent = page.locator(`//label[contains(text(),'Content:')]/../textarea`);

        for (let i = 0; i < times; i++) {
            await locatorInputTitle.fill("click");
            await locatorInputContent.fill("Hàm click dùng để thực hiện click vào các phần tử trên trang web");
            await page.click(btnAddNote);
        }
    }

    await test.step('Thêm mới 10 note ', async () => {
        await fillPersonalNotesWithTimes(10);
    })

    await test.step('Search với keyword “một hoặc nhiều” ', async () => {

        await page.reload({ timeout: 30000 });
        const locatorInputSearch = page.locator(`//label[contains(text(),'Search Notes:')]/../input`);
        await locatorInputSearch.fill("một hoặc nhiều");
    })


})