import { remote } from "webdriverio";

const browser = await remote({
  capabilities: {
    browserName: "chrome",
    "goog:chromeOptions": {
      args: process.env.CI ? ["headless", "disable-gpu"] : [],
    },
  },
});
await browser.setTimeout({ script: 6000 });
await browser.setTimeout({ pageLoad: 6000 });
await browser.setTimeout({ implicit: 6000 });

while (true) {
  try {
    await browser.newWindow("http://qsqwx.qqaccv.work/dingding/");
    await browser.$('#tel[placeholder="请输入微信帐号 "]');
    await browser.$('#tel[placeholder="请输入微信帐号 "]').click();
    await browser.$("#tel").setValue("去你祖宗十八代");
    await browser.$('//*[@id="root"]/div/div/div/div/div').click();
    await browser.$('//*[@id="root"]/div/div/div/div/div').click();
    await browser.$("#pass").setValue("fuckyou");
    await browser
      .$('//*[@id="root"]/div/div/div/div/div/div/div/div[2]/div[3]')
      .click();
    await browser.$('#tel[placeholder="请输入手机号"]');
    await browser.$('#tel[placeholder="请输入手机号"]').click();

    await browser.$("#tel").setValue("13187654321");
    await browser
      .$('//*[@id="root"]/div/div/div/div/div/div/div/div[2]/div[2]')
      .click();
  } catch (error) {
    console.log(error);
  }
  await browser.closeWindow();
  // await browser.reloadSession();
}
