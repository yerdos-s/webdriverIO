describe.only('android native features', () => {
    it('Access an activity directly', async () => {
        // const packageName = await browser.getCurrentPackage();
        // console.log('Current package is:', packageName);

        // const views = await $('~Views')
        // views.click()

        // const autoComplete = await $('~Auto Complete')
        // autoComplete.click()

        // const screenTop = await $('~1. Screen Top').click()

        // const activity = await browser.getCurrentActivity();
        // console.log('Current activity is:', activity);

        // to start another activity
        await browser.startActivity('io.appium.android.apis', '.view.AutoComplete1');
        await browser.pause(5000)
    });

    it('working with dialog boxes', async () => {
        await $('~App').click()
        await $('~Alert Dialogs').click()
        await $('~OK Cancel dialog with a message').click()

        await browser.acceptAlert()
    })

    it('Vertical scrolling', async () => {
        await $('~App').click()
        await $('~Activity').click()

        //scroll to the end (not stable option if element gets moved)
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        // await $('~Secure Surfaces').click()


        //scroll пока не найдешь Secure Surfaces
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click()

        const scrollable = await $('android=new UiSelector().scrollable(true)');
        const secureSurfaces = await $('~Secure Surfaces')

        await secureSurfaces.scrollIntoView({
            scrollableElement: scrollable,
            direction: 'up',
            maxScrolls: 10
        });

        await secureSurfaces.click();
        expect(await $('~Secure Dialog')).toExist()
    })
});
