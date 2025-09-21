describe('ToDO list', () => {
    beforeEach(async () => {
        await browser.reloadSession();
        // или альтернативно
        // await driver.relaunch();
    });

    it('Crete a ToDO list', async () => {
        await $('//XCUIElementTypeStaticText[@name="Create list"]').click()
        await $('//XCUIElementTypeTextField[@value="List Name"]').addValue('My first list')
        await $('//XCUIElementTypeButton[@name="Create"]').click()

        await expect(await $('~My first list')).toBeExisting()
    })

    it('Create item', async () =>{
        await $('//XCUIElementTypeStaticText[@name="Create list"]').click()
        await $('//XCUIElementTypeTextField[@value="List Name"]').addValue('My first list')
        await $('//XCUIElementTypeButton[@name="Create"]').click()

        await expect(await $('~My first list')).toBeExisting()

        await $('~My first list').click()
    })
});