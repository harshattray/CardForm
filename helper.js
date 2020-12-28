/**
 *  A dynamic helper function to validate input fields
 * @param {*} textbox
 * @param {*} inputFilter
 */

export const setInputFilter = (textbox, inputFilter) => {
	[
		"input",
		"keydown",
		"keyup",
		"mousedown",
		"mouseup",
		"select",
		"contextmenu",
		"drop",
	].forEach(function (event) {
		textbox.addEventListener(event, function () {
			if (inputFilter(this.value)) {
				this.oldValue = this.value;
				this.oldSelectionStart = this.selectionStart;
				this.oldSelectionEnd = this.selectionEnd;
			} else if (this.hasOwnProperty("oldValue")) {
				this.value = this.oldValue;
				this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
			} else {
				this.value = "";
			}
		});
	});
};
