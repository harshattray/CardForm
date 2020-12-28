import {
	cardNumber,
	cardHolder,
	month,
	year,
	cvv,
	submit,
	form,
	err,
	backcard,
	cvvSpan,
	first,
	second,
	third,
	fourth,
	cardUserName,
	exp,
	cardlogo,
	userData,
	cardInfo,
	card,
} from "./utils.js";

/**
 * fetches the Year/Month values
 */

year.addEventListener("input", () => {
	exp.textContent = `${month.value}/${year.value}`;
});

cardNumber.addEventListener("input", () => {
	if (cardNumber.textLength != 16) {
		err.classList.add("err");
	} else {
		err.classList.remove("err");
	}
	const num = cardNumber.value;
	let firstFour = num.slice(0, 4);
	let secondFour = num.slice(4, 8);
	let thirdFour = num.slice(8, 12);
	let fourthfour = num.slice(12);
	first.textContent = firstFour;
	second.textContent = secondFour;
	third.textContent = thirdFour;
	fourth.textContent = fourthfour;
});

//handling Card holder an its update
cardHolder.addEventListener("input", function () {
	let holder = this.value;
	cardUserName.textContent = this.value;
});

/**
 * Handles card Flip
 */

const rotate = () => {
	card.classList.toggle("rotateF");
	backcard.classList.toggle("rotateB");
};
cvv.addEventListener("focus", rotate);
cvv.addEventListener("blur", rotate);

cvv.addEventListener("input", (e) => {
	cvvSpan.textContent = cvv.value;
});

/**
 * Form submit ~ fetch values and clear on success
 */
form.addEventListener("submit", function (e) {
	e.preventDefault();
	if (cardNumber.textLength != 16) {
		e.preventDefault();
	} else {
		cvv.textContent = " ";
		cardNumber.textContent = " ";
		cardHolder.textContent = " ";
		month.textContent = " ";
		year.textContent = " ";
	}
});
