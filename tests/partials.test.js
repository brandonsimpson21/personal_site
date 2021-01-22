const puppeteer = require('puppeteer')

let browser, page

beforeEach(async () => {
    browser = await puppeteer.launch({})
    page = await browser.newPage()
})


test('header test', async () => {

    const testHeader =  async (go2) => {
        /*
        goes to page and checks if the navbar contains the correct elements
         */

        await page.goto(go2)
        const brand = await page.$eval('a.navbar-brand', el => el.innerHTML)
        const homeText = await page.$eval('a.home-link', el => el.innerHTML)
        const postsText = await page.$eval('a.post-link', el => el.innerHTML)
        expect(brand).toEqual("Brandon J. Simpson")
        expect(homeText).toEqual('Home')
        expect(postsText).toEqual('Posts')
    }

    try {
        await testHeader('localhost:5000')
        await testHeader('localhost:5000/posts')
        await testHeader('localhost:5000/posts/evolutionary_agents')
        await testHeader('localhost:5000/posts/live_quotes')
        await testHeader('localhost:5000/posts/td_utils_OHLC')
        await testHeader('localhost:5000/posts/td_auth')
    } catch (e) {
        console.log(e)
    }





})

