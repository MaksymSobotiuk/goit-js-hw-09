
const storageKey = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const formEmail= form.email;
const formMessage = form.message;

function readFormData() {
    const email = formEmail.value.trim();
    const message = formMessage.value.trim();

    return {
        email,
        message,
        };
}

function saveFormDataToLocalStorage(data) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(storageKey, jsonData);
}

function populateFormFromLocalStorage() {
    const rawData = localStorage.getItem(storageKey);
    if (rawData) {
        const data = JSON.parse(rawData);

        if (data.email !== undefined) {
            formEmail.value = data.email;
        }

        if (data.message !== undefined) {
            formMessage.value = data.message;
        }
        }
    }

populateFormFromLocalStorage();

form.addEventListener("input", () => {
    const data = readFormData();
    saveFormDataToLocalStorage(data);
});

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const data = readFormData();

        if (data.email && data.message) {
            console.log(data);

            localStorage.removeItem(storageKey);
            formEmail.value = "";
            formMessage.value = "";
        } else {
            alert("Please fill in both email and message fields.");
        }
    });
