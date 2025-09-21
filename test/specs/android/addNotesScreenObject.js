import AddNoteScreen from "../../screenObject/android/add-note.screen.js";

describe('Add notes', () => {
    it('Skip the tutorial', async () => {
        await AddNoteScreen.skipBtn.click()
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    });

    it.only('Add note, save changes and verify note', async () => {
        await AddNoteScreen.skipBtn.click()
        await AddNoteScreen.addNoteTxt.click()
        await AddNoteScreen.textTxt.click()
        await expect(AddNoteScreen.editingTxt).toBeDisplayed();

        //add title and note
        await AddNoteScreen.editTitleField.addValue('Fav anime list');
        const noteText = 'Naruto\nOne Piece\nBleach\nDragon Ball Z';
        await AddNoteScreen.editNoteField.addValue(noteText);

        //save changes
        await AddNoteScreen.saveNote()

        //assertion
        expect(AddNoteScreen.editBtn).toBeDisplayed()
        expect(AddNoteScreen.viewNote).toHaveText(noteText);
    })
});
