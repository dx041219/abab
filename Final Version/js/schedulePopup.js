document.addEventListener("DOMContentLoaded", function () {
    const openPopupBtn = document.getElementById("openPopupBtn");
    const openPopupBtn2 = document.getElementById("openPopupBtn2");
    const openPopupBtn3 = document.getElementById("openPopupBtn3");
	const closePopupBtn = document.getElementById("closePopupBtn");
    const popup = document.getElementById("popup");
	const confirmPopup = document.getElementById("confirmPopup");
    const del = document.getElementById("delete");
    const del2 = document.getElementById("delete2");
    const del3 = document.getElementById("delete3");
    const ticket = document.getElementById("ticket1");
    const ticket2 = document.getElementById("ticket2");
    const ticket3 = document.getElementById("ticket3");
    const submitBtn = document.getElementById("submitBtn");
    const playerForm = document.getElementById("playerForm");

    // Open the pop-up
    openPopupBtn.addEventListener("click", function () {
        popup.style.display = "block";
    });
    // Open the pop-up
    openPopupBtn2.addEventListener("click", function () {
        popup.style.display = "block";
    });
    // Open the pop-up
    openPopupBtn3.addEventListener("click", function () {
        popup.style.display = "block";
    });

	del.addEventListener("click", function () {
		ticket.style.display = "none";
	}),
	del2.addEventListener("click", function () {
		ticket2.style.display = "none";
	}),
	del3.addEventListener("click", function () {
		ticket3.style.display = "none";
	}),
    // Close the pop-up
    closePopupBtn.addEventListener("click", function () {
        confirmPopup.style.display = "none";
    });

    // Close the Stats Edit box
    // closePopupBtn2.addEventListener("click", function () {
    //     popup2.style.display = "none";
    // });

    // Close the pop-up if the user clicks outside the pop-up content
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    // Handle form submission
    submitBtn.addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const picture = document.getElementById("picture").value;
        const score = document.getElementById("score").value;

        // You can process the input values as needed (e.g., send to a server, update UI, etc.)
        console.log("Name:", name);
        console.log("Picture URL:", picture);
        console.log("Score:", score);

        // Close the pop-up after submission
        popup.style.display = "none";
        
        // Optionally, you can reset the form
        playerForm.reset();
    });
});