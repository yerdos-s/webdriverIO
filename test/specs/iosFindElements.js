describe('IOS Find elements', () => {
    it('find element by accessibility id', async () => {
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await browser.getAlertText()).toContain('A Short Title Is Best');
    });

    it('find element by  tag name', async () => {
        const elements = await $$('XCUIElementTypeStaticText');
        console.log('Number of elements: ' + elements.length);
        for (const element of elements) {
            console.log(await element.getText());
        }
    });

    it('find element by xpath', async () => {
        //first option
        // await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click()
        // await $('//XCUIElementTypeStaticText[@label="Simple"]').click()

        //second option
        await $('//*[@name="Alert Views"]').click()
        await $('//*[@label="Simple"]').click()
        await expect(await browser.getAlertText()).toContain('A Short Title Is Best');
    });

    it.only('scrolling to element', async () => {
        // await browser.execute('mobile: scroll', {
        //     direction: 'down',
        //     predicateString: 'label == "WebViewController"'
        // });
        // const element = await $('~WebViewController');
        // await element.click();
        //
        // await expect(await $('//XCUIElementTypeNavigationBar[@name="Web View"]')).toContain('Web View')


        const element = await $('~WebViewController'); // или другой селектор
        await element.scrollIntoView();
        await element.click();

        const navBar = await $('//XCUIElementTypeNavigationBar[@name="Web View"]');
        await expect(await navBar.getText()).toContain('Web View')    });
});