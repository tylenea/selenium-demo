const { Builder, By, until } = require('selenium-webdriver');
const { describe } = require('mocha');
describe("Selenium tasks", function () {
    let driver;

    before (async function () {
        let driver = await new Builder().forBrowser("chrome").build();
    });
    after(async function () {
        await driver.quit();
    });

    it("Enabled inputs", async function () {
   
      await driver.get('https://parsinger.ru/selenium/5.5/2/1.html');
      let inputs = await driver.findElements(By.className("text-field"));
      for (let input of inputs) {
        const isEnabled = await input.isEnabled();

        if (isEnabled) {
            await input.clear();
        }
    
    await driver.findElement(By.id("checkButton")).click();
    await alert();
    let result = alert.getText();
      };


it("Blocked buttons", async function () {
    await driver.get('https://parsinger.ru/scroll/4/index.html');
    let elements = await driver.findElements(By.className("btn"));let sum =0;
    for (let element of elements){
    await driver.executeScript("arguments[0].scrollIntoView(true);", element);
 await element.click();
  let numbers = await driver.findElements(By.id("result"));
    for (let number of numbers){
      let text = await number.getText();
   number = parseFloat(text);
      if (!isNaN(number)) {
          sum += number;
        }}
    }
      });

    it("Checkboxes", async function () {
    await driver.get('https://parsinger.ru/selenium/5.5/3/1.html');
           let checkboxes = await driver.findElements(By.className("checkbox"));
           let summ =0;
           for (let checkbox of checkboxes) {
              let isChecked = await checkbox.getAttribute('checked');    
            if (isChecked) {   
                 let numbers = await driver.findElements(By.tagName("textarea"));
                 for (let number of numbers){
                   let text = await number.getText();
                number = parseFloat(text);
                   if (!isNaN(number)) {
                       sum += number;
                   }
                 }             
        };
     }
    });


    it("Check HEX colors", async function () {
        await driver.get('https://parsinger.ru/selenium/5.5/5/1.html');
     let containers = await driver.findElements(By.css('#main-container > div'));
        for (let container of containers) {
            let span = await container.findElement(By.tagName('span'));
            let hexColor = await span.getText();

            let select = await container.findElement(By.tagName('select'));
            let options = await select.findElements(By.tagName('option'));
            for (let option of options) {
                let optionValue = await option.getAttribute('value');
                if (optionValue === hexColor) {
                    await option.click();
                    break;
                }
            };
            let button = await container.findElement(By.xpath(`.//button[@data-hex='${hexColor}']`));
            await button.click();

            let checkbox = await container.findElement(By.css('input[type="checkbox"]'));
            await checkbox.click();

            let inputField = await container.findElement(By.css('input[type="text"]'));
            await inputField.sendKeys(hexColor);
            let checkButton = await container.findElement(By.xpath(".//button[contains(text(), 'Проверить')]"));
            await checkButton.click();
        };
        let checkAllButton = await driver.findElement(By.xpath("//*[contains(text(), 'Проверить все элементы')]"));
        await checkAllButton.click();

        await alert();
        let result = alert.getText();

        it("List with chekboxes", async function () {
            await driver.get('https://parsinger.ru/scroll/2/index.html');
     let checkboxes = await driver.findElements(By.className("checkbox"));
           let summ =0;
          for (let checkbox of checkboxes) {
              let isChecked = await checkbox.getAttribute('checked');
    }
            if (isChecked) {
   let span = await driver.findElements(By.className("span"));
   for (span of span){
    
                 let numbers = await driver.findElements(By.tagName(`result${i}`));
                 for (let number of numbers){
                   let text = await number.getText();
                number = parseFloat(text);
                   if (!isNaN(number)) {
                       sum += number;
                   }
                 }}}
        });

      })
    })


});