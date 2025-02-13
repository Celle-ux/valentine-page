const messages = ["Sigurado kaba?", "Kapal ng mukha man!", "Wag kupal man", "Last mo na yan kups!", "Pakipot pa talaga!", "Choosy pa rin?", "Last mo na yan man!"];
let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    // Change the text of the "No" button
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase the size of the "Yes" button
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html"; // Redirect to a "yes" page
}
