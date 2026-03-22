import { test } from '@playwright/test';


test('“Bài học 2: Product page”', async ({ page }) => {
    await test.step('Truy cập trang', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step('Click “Bài học 2: Product page”,', async () => {
        await page.click('//a[text() = "Bài học 2: Product page"]')
    })

    async function clickCartLocatorByProduct(product: string, num: number) {
        const locator = `//div[contains(text(), "${product}")]/../button[@class="add-to-cart"]`;
        for (let i = 0; i < num; i++) {
            await page.click(locator);
        }
    }


    await test.step('Sản phẩm 1: 2 sản phẩm', async () => {
        await clickCartLocatorByProduct("Product 1", 2);
    })


    await test.step('Sản phẩm 2: 2 sản phẩm', async () => {
        await clickCartLocatorByProduct("Product 2", 2);

    })

    await test.step('Sản phẩm 3: 2 sản phẩm', async () => {
        await clickCartLocatorByProduct("Product 3", 2);
    })
}) 