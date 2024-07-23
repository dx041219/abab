document.addEventListener("DOMContentLoaded", function () {
    const openPopupBtn = document.getElementById("openPopupBtn");
    const openPopupBtn2 = document.getElementById("openPopupBtn2");
    const openPopupBtn3 = document.getElementById("openPopupBtn3");
    const openPopupBtn4 = document.getElementById("openPopupBtn4");
    const openPopupBtn5 = document.getElementById("openPopupBtn5");
    const openPopupBtn6 = document.getElementById("openPopupBtn6");
    const openPopupBtn7 = document.getElementById("openPopupBtn7");
    const closePopupBtn = document.getElementById("closePopupBtn");
    const popup = document.getElementById("popup");
    const popup2 = document.getElementById("popup2");
    const submitBtn = document.getElementById("submitBtn");
    const playerForm = document.getElementById("playerForm");

    // Open the pop-up
    openPopupBtn.addEventListener("click", function () {
        popup.style.display = "block";
    });

    // Open Stats Edit box
    openPopupBtn2.addEventListener("click", function () {
        popup2.style.display = "block";
        toChange = document.getElementById("toChange");
        toChange.innerHTML = openPopupBtn2.value;
        console.log(popup2.value);
        // popup2.style.gridTemplateAreas = '"card1 card2" "card3 card4" "card5 card6"';
    });

    // Open Stats Edit box
    openPopupBtn3.addEventListener("click", function () {
        popup2.style.display = "block";
        toChange = document.getElementById("toChange");
        toChange.innerHTML = openPopupBtn3.value;
        console.log(popup2.value);
        // popup2.style.gridTemplateAreas = '"card1 card2" "card3 card4" "card5 card6"';
    });

    // Open Stats Edit box
    openPopupBtn4.addEventListener("click", function () {
        popup2.style.display = "block";
        toChange = document.getElementById("toChange");
        toChange.innerHTML = openPopupBtn4.value;
        console.log(popup2.value);
        // popup2.style.gridTemplateAreas = '"card1 card2" "card3 card4" "card5 card6"';
    });

    // Open Stats Edit box
    openPopupBtn5.addEventListener("click", function () {
        popup2.style.display = "block";
        toChange = document.getElementById("toChange");
        toChange.innerHTML = openPopupBtn5.value;
        console.log(popup2.value);
        // popup2.style.gridTemplateAreas = '"card1 card2" "card3 card4" "card5 card6"';
    });

    // Open Stats Edit box
    openPopupBtn6.addEventListener("click", function () {
        popup2.style.display = "block";
        toChange = document.getElementById("toChange");
        toChange.innerHTML = openPopupBtn6.value;
        console.log(popup2.value);
        // popup2.style.gridTemplateAreas = '"card1 card2" "card3 card4" "card5 card6"';
    });
    
    openPopupBtn7.addEventListener("click", function () {
        popup2.style.display = "block";
        toChange = document.getElementById("toChange");
        toChange.innerHTML = openPopupBtn7.value;
        console.log(popup2.value);
        // popup2.style.gridTemplateAreas = '"card1 card2" "card3 card4" "card5 card6"';
    });

    // Close the pop-up
    closePopupBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close the Stats Edit box
    closePopupBtn2.addEventListener("click", function () {
        popup2.style.display = "none";
    });

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