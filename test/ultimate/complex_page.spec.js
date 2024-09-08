const {By, Builder, WebElementCondition, until, Key} = require('selenium-webdriver');
const assert = require("assert");
const { describe } = require('mocha');
const { Actions } = require('selenium-webdriver/lib/input');

describe("Complicated page", function () {
    let driver;

    before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://ultimateqa.com/complicated-page");
    });

    after(async function () {
        await driver.quit();
    });
    it("Check Section of Buttons", async function () {
        let buttons = await driver.findElements(By.css('[class^="et_pb_button et_pb_button_"]'));
       let itemCount = buttons.length;
    
        for (let i = 0; i < itemCount; i++) {           
            buttons = await driver.findElements(By.css('[class^="et_pb_button et_pb_button_"]'));
    await buttons[i].click(); 
            await driver.sleep(1000); 
           const currentUrl = await driver.getCurrentUrl();
            assert.strictEqual(currentUrl, 'https://ultimateqa.com/complicated-page', 'page is refreshed')
         
       }
      });
      
      it ("Check Section of Social Media Follows", async function () {
        let socialMediaIcons = await driver.findElements(By.css('div.et_pb_row.et_pb_row_4 [class^="icon et_pb_with_border"]'));
        let itemCount = socialMediaIcons.length;
    
        for (let i = 0; i < itemCount; i++) {         
            socialMediaIcons = await driver.findElements(By.css('div.et_pb_row.et_pb_row_4 [class^="icon et_pb_with_border"]'));
        await socialMediaIcons[i].click();
        await driver.sleep(2000); 
        let currentUrl =  await driver.getCurrentUrl();
        if (currentUrl.includes('facebook')) {
            await driver.navigate().back();
        } else if (currentUrl.includes('https://x.com')) {
            await driver.sleep(2000);
            await driver.navigate().back();
            await driver.navigate().back();
        }        
        await driver.sleep(2000); 
        };
      });

        it ("Check Section of Random Stuff", async function () {
            //check menu panel
       let hideButtons =   await driver.findElements(By.css("#lpwtoc_widget-2 > div > div > div.lwptoc_header > span > al"));
        for (let hideButton of hideButtons){ 
            hideButton.click();
        let hideText = await hideButton.getText();
          assert.strictEqual(hideText, 'show');
          let menu = await driver.findElement(By.css('#lpwtoc_widget-2 > div > div > div.lwptoc_items')); 
    let displayProperty = await element.getCssValue('display');
      assert.strictEqual(displayProperty, 'none', 'The element should have display: none.');
        hideButton.click();
        let showText = await hideButton.getText();
          assert.strictEqual(showText, 'hide');
          assert.notStrictEqual(displayProperty, 'none', 'The element should be displayed');  

          let divElement = await driver.findElement(By.css('#lpwtoc_widget-2 > div > div > div.lwptoc_items.lwptoc_items-visible > div')); 
    let links = await divElement.findElements(By.css('a'));
    for (let link of links){
        await link.click();
    }
       }
       //check first contact us form
    let nameInput0 = await driver.findElement(By.id("et_pb_contact_name_0"));
    let emailInput0 = await driver.findElement(By.id("et_pb_contact_email_0"));
    let messageInput0 = await driver.findElement(By.id("et_pb_contact_message_0"));
    let captcha0 = await driver.findElement(By.css("#et_pb_contact_form_0 > div.et_pb_contact > form > div > div > p > span"));
    expression = captcha0.getText();
    let result = eval(expression);
   let captchaResult0 = await driver.findElement(By.css(`input[name="et_pb_contact_captcha_0"]`));
   nameInput0.sendKeys("tylenea");
   emailInput0.click();
    emailInput0.sendKeys("test@email.com");
    messageInput0.click();
    messageInput0.sendKeys("i have a question");
    captchaResult0.click();
    captchaResult0.sendKeys(result);
    await driver.findElement(By.css("#et_pb_contact_form_0 > div.et_pb_contact > form > div > button")).click();
//check second contact us form
    let nameInput1 = await driver.findElement(By.id("et_pb_contact_name_1"));
    let emailInput1 = await driver.findElement(By.id("et_pb_contact_email_1"));
    let messageInput1 = await driver.findElement(By.id("et_pb_contact_message_1"));
    let captcha1 = await driver.findElement(By.css("#et_pb_contact_form_1 > div.et_pb_contact > form > div > div > p > span"));
    expression1 = captcha1.getText();
    let result1 = eval(expression1);
   let captchaResult1 = await driver.findElement(By.css(`input[name="et_pb_contact_captcha_1"]`));
   nameInput1.sendKeys("tylenea");
   emailInput1.click();
    emailInput1.sendKeys("test@email.com");
    messageInput1.click();
    messageInput1.sendKeys("i have a question");
    captchaResult1.click();
    captchaResult1.sendKeys(result1);
    await driver.findElement(By.css("#et_pb_contact_form_1 > div.et_pb_contact > form > div > button")).click();
//check third contact us form
    let nameInput2 = await driver.findElement(By.id("et_pb_contact_name_2"));
    let emailInput2 = await driver.findElement(By.id("et_pb_contact_email_2"));
    let messageInput2 = await driver.findElement(By.id("et_pb_contact_message_2"));
    let captcha2 = await driver.findElement(By.css("#et_pb_contact_form_2 > div.et_pb_contact > form > div > div > p > span"));
    expression2 = captcha2.getText();
    let result2 = eval(expression2);
   let captchaResult2 = await driver.findElement(By.css(`input[name="et_pb_contact_captcha_2"]`));
   nameInput2.sendKeys("tylenea");
   emailInput2.click();
    emailInput2.sendKeys("test@email.com");
    messageInput2.click();
    messageInput2.sendKeys("i have a question");
    captchaResult2.click();
    captchaResult2.sendKeys(result2);
    await driver.findElement(By.css("#et_pb_contact_form_2 > div.et_pb_contact > form > div > button")).click();
    
});
});

