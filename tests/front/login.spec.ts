import { test, expect } from '@playwright/test';

//Cenário nagativos
test('Tentativa de login sem inserção de dados', async ({ page})=>{
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForSelector('.error-message-container', { state: 'visible' });

});

test('Dados incorretos', async ({ page })=>{
    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveURL('https://www.saucedemo.com/');

    await page.click('.form_group')
    await page.getByPlaceholder('Username').fill('admin');
    await page.getByPlaceholder('Password').fill('admin');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForSelector('.error-message-container', { state: 'visible' });

});


//Cenário positivo
test('Login realizado com sucesso!', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveURL('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});
