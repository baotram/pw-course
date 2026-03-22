import { test } from '@playwright/test';

test('Bài học 4: Personal notes', async ({ page }) => {
    await test.step('Truy cập trang', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step('Click Bài học 4: Personal notes', async () => {
        await page.click('//a[text() = "Bài học 4: Personal notes"]')
    })

    async function fillPersonalNotes(label: string, content: string) {
        const locatorInput = page.locator(`//label[contains(text(),'${label}')]/../input`);
        console.log(locatorInput);
        await locatorInput.fill(content);
    }

    async function fillPersonalNotesWithTimes(times: number) {
        const btnAddNote = "//button[@id = 'add-note']";
        for (let i = 0; i < times; i++) {
            await fillPersonalNotes("Title:", "click");
            await fillPersonalNotes("Content:", "Hàm click dùng để thực hiện click vào các phần tử trên trang web");
            await page.click(btnAddNote);
        }
    }

    await test.step('Thêm mới 10 note ', async () => {
        fillPersonalNotesWithTimes(10);
    })

    await test.step('Search với keyword “một hoặc nhiều” ', async () => {
        fillPersonalNotes("Search Notes:", "một hoặc nhiều");
    })
})