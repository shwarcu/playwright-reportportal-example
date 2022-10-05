import { test, expect, type Page } from '@playwright/test';

test.describe('New Todo', () => {
  const TODO_ITEMS = ['buy some cheese', 'feed the cat', 'book a doctors appointment'];
  test('should allow me to add todo items', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    // Create 1st todo.
    await page.locator('.new-todo').fill(TODO_ITEMS[0]);
    await page.locator('.new-todo').press('Enter');

    // Make sure the list only has one todo item.
    await expect(page.locator('.view label')).toHaveText([TODO_ITEMS[0]]);

    // Create 2nd todo.
    await page.locator('.new-todo').fill(TODO_ITEMS[1]);
    await page.locator('.new-todo').press('Enter');

    // Make sure the list now has two todo items.
    await expect(page.locator('.view label')).toHaveText([TODO_ITEMS[0], TODO_ITEMS[1]]);

    await page.pause();
  });
});
