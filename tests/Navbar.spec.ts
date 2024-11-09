import { test, expect } from "@playwright/test";

test.describe("Navbar E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/");
  });

  test("desktop navigation works correctly", async ({ page }) => {
    await expect(page.getByText("Products")).toBeVisible();
    await expect(page.getByText("About")).toBeVisible();
    await expect(page.getByText("Contact")).toBeVisible();

    await page.getByText("Products").click();
    await expect(page.getByText("Product 1")).toBeVisible();
    await expect(page.getByText("Product 2")).toBeVisible();
    await expect(page.getByText("Product 3")).toBeVisible();
  });

  test("Mobile menu opens and navigates correctly", async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });

    await page.locator('[data-testid="menu-button"]').click();
    await expect(page.locator('[data-testid="sheet-content"]')).toBeVisible();

    await page.locator('[data-testid="home-button"]').click();
    await expect(page).toHaveURL("/home");

    await page.locator('[data-testid="products-button"]').click();
    await expect(page).toHaveURL("/products");

    await page.locator('[data-testid="about-button"]').click();
    await expect(page).toHaveURL("/about");

    await page.locator('[data-testid="contact-button"]').click();
    await expect(page).toHaveURL("/contact");
  });

  test("search functionality", async ({ page }) => {
    await expect(page.locator('input[type="search"]')).toBeVisible();
    await expect(page.locator('[data-testid="search-icon"]')).toBeVisible();
    await page.locator('[data-testid="settings-button"]').click();
    await page.locator('[data-testid="user-button"]').click();
  });

  test("responsive behavior", async ({ page }) => {
    // Test desktop view
    await page.setViewportSize({ width: 1024, height: 768 });
    await expect(page.getByPlaceholder("Search...")).toBeVisible();
    await expect(page.getByRole("button", { name: /menu/i })).not.toBeVisible();

    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByPlaceholder("Search...")).not.toBeVisible();
    await expect(page.getByRole("button", { name: /menu/i })).toBeVisible();
  });

  test("action buttons work correctly", async ({ page }) => {
    await page.getByRole("button", { name: /settings/i }).click();
    await page.getByRole("button", { name: /user/i }).click();
  });

  test("keyboard navigation", async ({ page }) => {
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await expect(page.getByText("Product 1")).toBeVisible();
  });

  // test("performance", async ({ page }) => {
  //   const timing = await page.evaluate(() => {
  //     const navigation = performance.getEntriesByType("navigation")[0];
  //     return {
  //       domContentLoaded:
  //         navigation.domContentLoadedEventEnd -
  //         navigation.domContentLoadedEventStart,
  //       loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
  //     };
  //   });

  //   expect(timing.domContentLoaded).toBeLessThan(1000);
  //   expect(timing.loadComplete).toBeLessThan(3000);
  // });
});
