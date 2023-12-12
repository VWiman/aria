function toggleModal() {
	modalOne.toggleAttribute("hidden");
	btnOne.toggleAttribute("disabled");
	btnTwo.toggleAttribute("disabled");
	menuBtn.toggleAttribute("disabled");
	if (modalOne.hasAttribute("hidden") === false) {
		closeModalBtn.focus();
		btnTwo.setAttribute("aria-disabled", true);
		btnOne.setAttribute("aria-disabled", true);
		menuBtn.setAttribute("aria-disabled", true);
	} else {
		btnOne.focus();
		btnTwo.setAttribute("aria-disabled", false);
		btnOne.setAttribute("aria-disabled", false);
		menuBtn.setAttribute("aria-disabled", false);
	}
}

const modalOne = document.getElementById("accessibleModal");
const btnOne = document.getElementById("btnOne");
const closeModalBtn = document.getElementById("closeModalBtn");

btnOne.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal);

closeModalBtn.addEventListener("keydown", function (e) {
	if (e.key === "Escape" && modalOne.hasAttribute("hidden") === false) {
		btnOne.toggleAttribute("disabled");
		btnTwo.toggleAttribute("disabled");
		menuBtn.toggleAttribute("disabled");
		btnTwo.setAttribute("aria-disabled", false);
		btnOne.setAttribute("aria-disabled", false);
		menuBtn.setAttribute("aria-disabled", false);
		modalOne.toggleAttribute("hidden");
		btnOne.focus();
	}
});

function toggleDialog() {
	dialogOne.toggleAttribute("open");
	btnOne.toggleAttribute("disabled");
	btnTwo.toggleAttribute("disabled");
	menuBtn.toggleAttribute("disabled");
	if (dialogOne.hasAttribute("open") === true) {
		closeDialogBtn.focus();
		btnTwo.setAttribute("aria-disabled", true);
		btnOne.setAttribute("aria-disabled", true);
		menuBtn.setAttribute("aria-disabled", true);
	} else {
		btnTwo.focus();
		btnTwo.setAttribute("aria-disabled", false);
		btnOne.setAttribute("aria-disabled", false);
		menuBtn.setAttribute("aria-disabled", false);
	}
}

const dialogOne = document.getElementById("accessibleDialog");
const btnTwo = document.getElementById("btnTwo");
const closeDialogBtn = document.getElementById("closeDialogBtn");

btnTwo.addEventListener("click", toggleDialog);
closeDialogBtn.addEventListener("click", toggleDialog);
closeDialogBtn.addEventListener("keydown", function (e) {
	if (e.key === "Escape" && dialogOne.hasAttribute("open") === true) {
		btnOne.toggleAttribute("disabled");
		btnTwo.toggleAttribute("disabled");
		menuBtn.toggleAttribute("disabled");
		dialogOne.toggleAttribute("open");
		btnTwo.focus();
		btnTwo.setAttribute("aria-disabled", false);
		btnOne.setAttribute("aria-disabled", false);
		menuBtn.setAttribute("aria-disabled", false);
	}
});

const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuButton");
const menuCnt = document.getElementById("menuContent");
const lastItem = document.getElementById("item4");

function menuHover(e) {
	if (e) {
		menuCnt.toggleAttribute("hidden");
		menuBtn.setAttribute("aria-pressed", "true");
	}
}
function menuTab(e) {
	if (e.key === "Tab") {
		menuCnt.toggleAttribute("hidden");
		menuBtn.setAttribute("aria-pressed", "true");
	}
}

function menuLeave() {
	setTimeout(() => {
		menuCnt.toggleAttribute("hidden");
	}, "300");
	menuBtn.setAttribute("aria-pressed", "false");
}

menuBtn.addEventListener("mouseover", menuHover);
menuBtn.addEventListener("mouseleave", menuLeave);

menuBtn.addEventListener("keyup", menuTab);
menuBtn.addEventListener("click", menuHover);

lastItem.addEventListener("keydown", function (e) {
	if (e) {
		menuCnt.toggleAttribute("hidden");
		menuBtn.setAttribute("aria-pressed", "false");
	}
});

menuCnt.addEventListener("mouseleave", function (e) {
	if (e) {
		menuCnt.toggleAttribute("hidden");
		menuBtn.setAttribute("aria-pressed", "false");
	}
});
