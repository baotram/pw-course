import { expect, test } from '@playwright/test';

test("Test1: Register page", async ({ page }) => {
    await test.step("Step 1: Đi đến trang material. Verify title hiển thị", async () => {
        await page.goto("https://material.playwrightvn.com/");

        const titleLoc = page.locator("//h1");
        await expect(titleLoc).toBeVisible();
    })

    await test.step("Step 2: Click Bài học 1", async () => {
        await page.click('//a[@href="01-xpath-register-page.html"]');
        const titleLoc = page.locator("//h1[@id = 'self']");
        await expect(titleLoc).toContainText("User Registration");
    }
    )

    await test.step("Step 3: Điền thông tin username, mail click vào button register. verify thành công", async () => {
        const testData = [
            {
                username: 'Tram Nguyen',
                email: 'tram123@gmail.com'
            },
            {
                username: 'Hoang Dinh',
                email: 'hoang123@gmail.com'
            }]

        for (let i = 0; i < testData.length; i++) {
            await page.locator("//input[@id = 'username']").fill(testData[i].username);
            await page.locator("//input[@id = 'email']").fill(testData[i].email);
            await page.locator("//button[@type = 'submit']").click();
        }

        const tableRows = await page.locator("//table[@id='userTable']//tbody//tr").count();
        expect(tableRows).toBe(testData.length);

        for (let i = 0; i < testData.length; i++) {
            const usernameCell = page.locator(`//table[@id='userTable']//tbody//tr[${i + 1}]//td[2]`);
            const emailCell = page.locator(`//table[@id='userTable']//tbody//tr[${i + 1}]//td[3]`);
            expect(usernameCell).toHaveText(testData[i].username);
            expect(emailCell).toHaveText(testData[i].email);
        }
    })

})