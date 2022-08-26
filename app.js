const pup = require('puppeteer')
const email = ''
const senha = ''
 async function start(){
   async function seguir(page, selector){
    let buts = await page.$$(selector)
    for(let i = 0; i < buts.length; i++){
      await buts[i].click()
    }
   }async function toque(but){
    await but.click()
   }
    

const browser = await pup.launch({headless: false})
const page = await browser.newPage()
await page.goto("https://www.instagram.com")
await page.waitForSelector('[name=username]')
await page.type('[name=username]',email)
await page.type('[name=password]', senha)
await page.click('[type=submit]')
await page.waitForNavigation()
await page.click('.cmbtv')
await page.waitForNavigation()
await page.waitForSelector('button._a9--._a9_1')
await page.click('button._a9--._a9_1')
await page.waitForSelector('._acan._acap._acas')
seguir(page, '._acan._acap._acas')

 }

'button._aacl'


start()