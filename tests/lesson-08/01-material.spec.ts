import { expect, test } from '@playwright/test';

test.describe("Test suite: Material site", async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://material.playwrightvn.com/index.html");
    });

    test("Test 1: User registration page", async ({ page }) => {
        // await test.step("Step 1: Goto material page", async () => {
        //     await page.goto("https://material.playwrightvn.com/index.html");
        // });

        await test.step("Step 2: Click 'User registration'", async () => {
            await page.locator('//a[@href="01-xpath-register-page.html"]').click();
        });

        await test.step("Step 3: Fill information", async () => {
            console.log("Filling information");
        });
    });

    test("Test 2: Product page", async ({ page }) => {
        // await test.step("Step 1: Goto material page", async () => {
        //     await page.goto("https://material.playwrightvn.com/index.html");
        // });

        await test.step("Step 2: Click 'Product Page'", async () => {
            await page.locator('//a[@href="02-xpath-product-page.html"]').click();
        });

        await test.step("Step 3: Add products to cart", async () => {
            console.log("Adding products to cart");
        });
    });
});



test.describe("Test suite: Material site", async () => {
    test.beforeAll(async () => {
        console.log("BeforeAll: Trước khi tất cả các test chạy");
        expect(1).toEqual(2);
    });

    test.afterAll(async () => {
        console.log("AfterAll: sau khi tất cả các test chạy");
    })

    test.beforeEach(async () => {
        console.log("BeforeEach: Chạy trước khi test chạy");
    });

    test.afterEach(async () => {
        console.log("AfterEach: Sau khi test chạy xong");
        // Có thể verify, không hạn chế
    });

    test("Test 3: User registration page", async () => {
        await test.step("Step 2: Click 'User registration'", async () => {
            console.log("Step 2: Click 'User registration ")
        });

        await test.step("Step 3: Fill information", async () => {
            console.log("Step 3: Fill information");
        });
    });

    test("Test 4: Product page", async () => {
        await test.step("Step 2: Click 'Product Page'", async () => {
            console.log("Step 2: Click 'Product Page'");
        });

        await test.step("Step 3: Add products to cart", async () => {
            console.log("Step 3: Add products to cart");
        });
    });
});