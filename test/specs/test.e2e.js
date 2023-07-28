/**
 * test with page objects
 */
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it("tests Recording 7/26/2023 at 4:58:18 AM", async () => {
        await browser.setWindowSize(1920, 295)
        await browser.url("http://qsqwx.qqaccv.work/dingding/")
        await expect(browser).toHaveUrl("http://qsqwx.qqaccv.work/dingding/")
        await browser.$("#tel").click()
        await browser.$("#tel").setValue("去你祖宗十八代")
        await browser.$("//*[@id=\"root\"]/div/div/div/div/div").click()
        await browser.$("//*[@id=\"root\"]/div/div/div/div/div").click()
        await browser.$("#pass").setValue("fuckyou")
        await browser.$("//*[@id=\"root\"]/div/div/div/div/div/div/div/div[2]/div[3]").click()
        await expect(browser).toHaveUrl("http://qsqwx.qqaccv.work/dingding/tel.php?action=shoy&id=162")
        await browser.$("#tel").click()
        await browser.$("#tel").setValue("13187654321")
        await browser.$("//*[@id=\"root\"]/div/div/div/div/div/div/div/div[2]/div[2]").click()
        await expect(browser).toHaveUrl("http://qsqwx.qqaccv.work/dingding/loading.php?action=shoy&id=162")
      });

    xit('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
})

