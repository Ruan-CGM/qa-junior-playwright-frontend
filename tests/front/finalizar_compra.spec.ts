import { test, expect } from '@playwright/test';

test('Finalizar uma compra com 2 ou mais produtos', async ({ page }) => {
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
    
    await page.locator('#checkout').click();
    await page.getByPlaceholder('First Name').fill('Jhon Doe');
    await page.getByPlaceholder('Last Name').fill('Qa TagPlus');
    await page.getByPlaceholder('Zip/Postal Code').fill('22');
    
    await page.locator('#continue').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    
    await page.getByText('Finish').scrollIntoViewIfNeeded();
    await page.locator('#finish').click();
    
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    await expect(page.getByRole('heading', { name: 'Thank you for your order!' })).toBeVisible();

});
