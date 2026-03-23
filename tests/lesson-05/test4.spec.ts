import { test } from '@playwright/test';

test('Bài học 4: Personal notes', async ({ page }) => {
    await test.step('Truy cập trang', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step('Click Bài học 4: Personal notes', async () => {
        await page.click('//a[text() = "Bài học 4: Personal notes"]')
    })


    async function fillPersonalNotes(title: string, content: string) {
        const btnAddNote = "//button[@id = 'add-note']";
        const locatorInputTitle = page.locator(`//label[contains(text(),'Title:')]/../input`);
        const locatorInputContent = page.locator(`//label[contains(text(),'Content:')]/../textarea`);

        await locatorInputTitle.fill(title);
        await locatorInputContent.fill(content);
        await page.click(btnAddNote);
    }

    await test.step('Thêm mới 10 note ', async () => {
        await fillPersonalNotes("click", "Hàm click dùng để thực hiện click vào các phần tử trên trang web");
        await fillPersonalNotes("fill", "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web");
        await fillPersonalNotes("type", "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng");
        await fillPersonalNotes("hover", "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover");
        await fillPersonalNotes("check", "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked");
        await fillPersonalNotes("uncheck", "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked");
        await fillPersonalNotes("selectOption", "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown");
        await fillPersonalNotes("press", "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác");
        await fillPersonalNotes("dblclick", "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web");
        await fillPersonalNotes("dragAndDrop", "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web");
    })

    await test.step('Search với keyword “một hoặc nhiều” ', async () => {
        await page.reload({ timeout: 30000 });
        const locatorInputSearch = page.locator(`//label[contains(text(),'Search Notes:')]/../input`);
        await locatorInputSearch.fill("một hoặc nhiều");
    })

})