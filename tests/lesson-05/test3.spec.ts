import { test } from '@playwright/test';

test('Bài học 3: Todo page', async ({ page }) => {
    await test.step('Truy cập trang', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step('Click “Bài học 3: Product page”', async () => {
        await page.click('//a[text() = "Bài học 3: Todo page"]')
    })

    async function addNewTask(content: string, times: number) {
        const locatorInput = "//input[@id = 'new-task']";
        const locatorButtonAdd = "//button[@id = 'add-task']";
        for (let i = 1; i <= times; i++) {
            await page.locator(locatorInput).fill(content + " " + i);
            await page.click(locatorButtonAdd);
        }
    }

    async function deleteNewTask() {
        const locatorTaskList = page.locator("//ul[@id='task-list']/li/span");
        const count = await locatorTaskList.count();
        let contentArr = [];
        for (let i = 1; i <= count; i++) {
            const content = await page.locator("//ul[@id='task-list']/li[" + i + "]/span").innerText();
            let firstNum = parseInt((await content).replace(/[^0-9]/g, ''));
            if (firstNum % 2 !== 0) {
                contentArr.push(content);
            }
        }
        console.log(contentArr);
        for (let i = 0; i < contentArr.length; i++) {
            const locatorDeleteHasIndex = "//li//span[text() = '" + contentArr[i] + "']/../div//button[text() = 'Delete']";
            console.log(locatorDeleteHasIndex)
            await page.locator(locatorDeleteHasIndex).waitFor({ state: 'visible' });
            page.once('dialog', async dialog => {
                await dialog.accept();
            });
            await page.click(locatorDeleteHasIndex);

        }
    }

    await test.step('Thêm mới 100 todo item có nội dung “Todo <i>”', async () => {
        await addNewTask("Todo", 100);
    })

    await test.step('Xoá các todo có số lẻ', async () => {
        await deleteNewTask();
    })

}) 