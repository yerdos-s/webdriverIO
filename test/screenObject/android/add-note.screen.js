class AddNoteScreen {
    get skipBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
    }

    get addNoteTxt() {
        return $('//*[@text="Add note"]')
    }

    get textTxt() {
        return $('//*[@text="Text"]')
    }

    get editingTxt() {
        return $('//*[@text="Editing"]')
    }

    get editTitleField() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
    }

    get editNoteField() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
    }

    get editBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')
    }

    get viewNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')
    }

    async saveNote() {
        await browser.back()
        await browser.back()
    }

}

export default new AddNoteScreen()
