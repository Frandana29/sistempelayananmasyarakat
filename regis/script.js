const form = document.querySelector("form"),
    nextBtn = form.querySelector(".nextBtn"),
    backBtn = form.querySelector(".backBtn"),
    allInput = form.querySelectorAll(".first input");

// Notification container and message
const notification = document.getElementById("notification");
const notificationMessage = document.getElementById("notification-message");

nextBtn.addEventListener("click", () => {
    let hasEmptyInputs = false;

    allInput.forEach(input => {
        if (input.value === "") {
            hasEmptyInputs = true;
        }
    });

    if (hasEmptyInputs) {
        const btnText = nextBtn.querySelector(".btnText").textContent;
        showNotification(`Please fill out all fields before proceeding (${btnText}).`);
    } else {
        form.classList.add('secActive');
    }
});

backBtn.addEventListener("click", () => form.classList.remove('secActive'));

// Function to show the notification
function showNotification(message) {
    notificationMessage.textContent = message;
    notification.style.display = "block";
}

// Close the notification when the "Close" button is clicked
document.getElementById("close-notification").addEventListener("click", () => {
    notification.style.display = "none";
});
