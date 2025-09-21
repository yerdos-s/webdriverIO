// describe('Add notes', () => {
//     it('Skip the tutorial', async () => {
//         const skipBtn = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
//         await skipBtn.click();
//
//         const addNote = await $('//*[@text="Add note"]');
//         await expect(addNote).toBeDisplayed();
//     });
//
//     it.only('Add note, save changes and verify note', async () => {
//         await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click()
//         await $('//*[@text="Add note"]').click()
//         await $('//*[@text="Text"]').click()
//         await expect($('//*[@text="Editing"]')).toBeDisplayed();
//
//         //add title and note
//         await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue('Fav anime list');
//         await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue('Naruto\nOne Piece\nBleach\nDragon Ball Z\nMy Hero Academia');
//
//         //save changes
//         await browser.back()
//         await browser.back()
//
//         //assertion
//         expect(await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed()
//         expect(await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText('Naruto\nOne Piece\nBleach\nDragon Ball Z\nMy Hero Academia')
//     })
// });
