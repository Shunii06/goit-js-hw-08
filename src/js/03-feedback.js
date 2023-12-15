import throttle from 'lodash.throttle';
document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.querySelector('.feedback-form');
  const emailInput = feedbackForm.querySelector('input[name="email"]');
  const messageTextarea = feedbackForm.querySelector(
    'textarea[name="message"]'
  );

  const saveToLocalStorageThrottled = throttle(() => {
    const formData = {
      email: emailInput.value,
      message: messageTextarea.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500);

  const loadFromLocalStorage = () => {
    const storedData = localStorage.getItem('feedback-form-state');
    if (storedData) {
      const formData = JSON.parse(storedData);
      emailInput.value = formData.email || '';
      messageTextarea.value = formData.message || '';
    }
  };

  feedbackForm.addEventListener('input', () => {
    saveToLocalStorageThrottled();
  });

  window.addEventListener('load', () => {
    loadFromLocalStorage();
  });

  feedbackForm.addEventListener('submit', event => {
    event.preventDefault();

    const userEmailAndMessage = {
      email: emailInput.value,
      message: messageTextarea.value,
    };

    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageTextarea.value = '';

    console.log('User input:', userEmailAndMessage);
  });
});
