import { expect, browser, $ } from "@wdio/globals";

describe("My first test suite", () => {
  it.skip("Check title", async () => {
    let url = "https://example.com/";
    await browser.url(url);
    await browser.maximizeWindow();
    await browser.pause(3000);

    // await expect(browser).toHaveTitle("Swag Fail");
    // await expect(browser).toHaveUrl(url);

    let pageElement = await $("//h1[normalize-space()='Example Domain']");
    let elementText = await pageElement.getText();
    await expect(pageElement).toExist();
    await expect(pageElement).toBeDisplayed();
    await expect(pageElement).toHaveText("Example Domain");
    console.log("Element text: ", elementText);
  });

  it("Sauce Demo Login", async () => {
    let url = "https://www.saucedemo.com/";
    await browser.url(url);
    await browser.maximizeWindow();
    await browser.pause(3000);

    let username = await $("#user-name");
    let password = await $("#password");
    let loginButton = await $("#login-button");

    await username.clearValue();
    await password.clearValue();
    await username.setValue("standard_user");
    await password.setValue("secret_sauce");
    await loginButton.click();

    await browser.pause(3000);

    let inventoryElement = await $("#inventory_container");
    await expect(inventoryElement).toBeDisplayed();
  });

  it("Selectbox an checkbox", async () => {
    let url = "https://devexpress.github.io/testcafe/example/"
    await browser.url(url);
    await browser.maximizeWindow();
    let selectorOne = await $('#remote-testing')
    let selectorTwo = await $('#reusing-js-code')
    let selectorThree = await $('#background-parallel-testing')
    let selectorFour = await $('#continuous-integration-embedding')
    let selectAll = await $('#tried-test-cafe')
    let selectSlider = await $('#slider')
    let comments = await $('#comments')

    await selectorOne.click()
    await selectorTwo.click()
    await selectorThree.click()
    await selectorFour.click()
    await selectAll.click()
    await selectSlider.click()
    await comments.setValue('This is a comment')
    await browser.pause(5000)
  })
});
