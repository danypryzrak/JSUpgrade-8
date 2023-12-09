import throttle from "lodash.throttle";

const feedbackForm = document.querySelector(".feedback-form")
let formData = {}


if (localStorage.getItem("feedback-form-state") === null) {
    
} else {
    formData = JSON.parse(localStorage.getItem("feedback-form-state"))
    feedbackForm.elements.email.value = formData.email
    feedbackForm.elements.message.value= formData.message
}

feedbackForm.addEventListener("input", throttle(() => {
    
    formData.email = feedbackForm.elements.email.value;
    formData.message = feedbackForm.elements.message.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
    
}, 500)
)

feedbackForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    localStorage.clear();
    feedbackForm.elements.email.value = null
    feedbackForm.elements.message.value = null
})