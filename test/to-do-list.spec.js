const {By, Builder, WebElementCondition, until, Key} = require('selenium-webdriver');
const assert = require("assert");
const { describe } = require('mocha');

describe("to-do-second list", function () {
    it("successful to-do function", async function () {
        let driver;
        let testPassed = true;

        try {
            driver = await new Builder().forBrowser("chrome").build();
            await driver.get("https://lambdatest.github.io/sample-todo-app/");
            await driver.findElement(By.id("sampletodotext")).sendKeys("Learn JS", Key.ENTER);

            let todoText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span"))
                .getText();

            assert.equal("Learn JS", todoText);

        } catch (error) {
            testPassed = false;
            console.log("Error:", error);
            throw error; // Rethrow the error to fail the test properly in Mocha
        } finally {
            if (driver) {
                await driver.quit();
            }
            if (testPassed) {
                console.log("Test 2 Passed");
            }
        }
    });
});