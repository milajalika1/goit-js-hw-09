const feedbackFormEl = document.querySelector('.feedback-form');

let formData = {
    email: "",
    message: "",
};

const fillFormFields = () => {
    const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (feedbackFormEl === null) {
        return;
    }

    formData = formDataFromLS;
    
    for (const key in formDataFromLS) {
        if (formDataFromLS.hasOwnProperty(key)) {
            feedbackFormEl.elements[key].value = formDataFromLS[key];  
        }
    }
};
fillFormFields();

const onFormInput = event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    formData[fieldName] = fieldValue

    

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackSubmit = event => {
    event.preventDefault();

    const email = feedbackFormEl.elements['email'].value.trim();
    const message = feedbackFormEl.elements['message'].value.trim();

    if (email === "" || message === "") {
        alert('Fill please all fields');
        console.log(formData);
    }
    

    event.target.reset();
    localStorage.removeItem('feedback-form-state');
    formData = { email: "", message: "" };
}

feedbackFormEl.addEventListener('input', onFormInput);
feedbackFormEl.addEventListener('submit', onFeedbackSubmit)