import throttle from 'lodash.throttle';

const STORAGE_FORM_KEY = 'feedback-form-state';
let formData = {};

const formRef = document.querySelector('.feedback-form');
const mailRef = document.querySelector('[name="email"]');
const messageRef = document.querySelector('[name="message"]');

onFormInitial();

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_FORM_KEY, JSON.stringify(formData));
}

function onFormInitial() {
  const initialData = JSON.parse(localStorage.getItem(STORAGE_FORM_KEY));

  if (!initialData) {
    return;
  }

  if (initialData.email) {
    mailRef.value = initialData.email;
  }

  if (initialData.message) {
    messageRef.value = initialData.message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log('formData ->', formData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_FORM_KEY);
  formData = {};
}
