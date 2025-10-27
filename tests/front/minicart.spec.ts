import { test, expect } from '@playwright/test';

test('Remover produtos de dentro do minicart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveURL('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('#add-to-cart-sauce-labs-bike-light').click();
    await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click();
    
    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

    await page.locator('#remove-sauce-labs-backpack').click();
    await page.locator('#remove-sauce-labs-bike-light').click();
    await page.locator('#remove-sauce-labs-bolt-t-shirt').click();

    await page.locator('.shopping_cart_link');
    await expect(page).toHaveScreenshot();

})
