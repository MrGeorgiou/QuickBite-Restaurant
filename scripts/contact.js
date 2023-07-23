//COPY TO CLIPBOARD
const email = document.getElementById("email");

function copyToClipboard(event) {
    const elementToCopy = event.target.textContent;
    navigator.clipboard.writeText(elementToCopy);
    alert("Email address copied to clipboard!");
}

email.addEventListener("click", copyToClipboard);