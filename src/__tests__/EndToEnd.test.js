import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250 // slow down by 250ms
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.suggestions--events');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const extra = await page.$('.suggestions--events .show-details');
    expect(extra).toBeNull();

  });

  test('User can expand an event to see its details', async done => {
    await page.click('.suggestions--events .showDetails');

    const extra = await page.$('.suggestions--events .show-details');
    expect(extra).toBeDefined();
    done();

  });

  test('User can collapse an event to hide its details', async done => {
    await page.click('.suggestions--events .hideDetails');

    const extra = await page.$('.suggestions--events .show-details');
    expect(extra).toBeNull();
    done();

  });

});