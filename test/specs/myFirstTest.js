// describe('My first test', () => {
//     it('Find element by Accesebilty Id', async () => {
//         const appOpt = await $('~App');

//         await appOpt.click()

//         const actionBar = await $('~Action Bar')
//         await expect(actionBar).toBeExisting()
//     })

//     it.skip('Find element by Class name', async () => {
//         const actionBar = await $('.android.widget.TextView')

//         await expect(actionBar).toHaveText('API Demos')
//     })

//     it('Find multiple elements', async () => {
//         const expectedList = ["API Demos", "Access'ibility", "Accessibility", "Animation", "App", "Content", "Graphics", "Media",
//             "NFC", "OS", "Preference", "Text", "Views"]
//         const actualList = []

//         const allElements = await $$('android.widget.TextView')

//         for (const element of allElements) {
//             actualList.push(await element.getText())
//         }

//         console.log('actualList', actualList)
//         expect(actualList).toEqual(expectedList)
//     })

//     it('Input field', async () => {
//         const views = await $('~Views')
//         views.click()

//         const autoComplete = await $('~Auto Complete')
//         autoComplete.click()

//         const screenTop = await $('~1. Screen Top')
//         screenTop.click()
//         await browser.pause(100000)


//         const inputField = await browser.findElement('id', 'io.appium.android.apis:id/edit');
//         inputField.addValue('test input');
//     })
// })