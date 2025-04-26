// document.addEventListener('DOMContentLoaded', function () {
//     const contactForm = document.getElementById('contactForm');
//     const formMessage = document.getElementById('formMessage');

//     contactForm.addEventListener('submit', async function (e) {
//         e.preventDefault();

//         const name = document.getElementById('name').value.trim();
//         const email = document.getElementById('email').value.trim();
//         const phone = document.getElementById('phone').value.trim();
//         const message = document.getElementById('message').value.trim();

//         if (!name || !email || !phone || !message) {
//             showFormMessage('Please fill in all required fields.', 'error');
//             return;
//         }

//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) {
//             showFormMessage('Please enter a valid email address.', 'error');
//             return;
//         }

//         try {
//             const response = await fetch('http://localhost:5000/api/contact', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     name,
//                     email,
//                     phone,
//                     subject: '', // Empty since your new form has no subject field
//                     message
//                 }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 showFormMessage(data.message || 'Message sent successfully!', 'success');
//                 contactForm.reset();
//             } else {
//                 showFormMessage(data.message || 'Something went wrong. Please try again.', 'error');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             showFormMessage('Failed to send message. Please try again later.', 'error');
//         }
//     });

//     function showFormMessage(message, type) {
//         formMessage.textContent = message;
//         formMessage.className = 'form-message ' + type;
//         formMessage.style.display = 'block';

//         setTimeout(() => {
//             formMessage.style.display = 'none';
//         }, 5000);
//     }

//     const formControls = document.querySelectorAll('.form-control');
//     formControls.forEach(control => {
//         control.addEventListener('focus', function () {
//             this.parentElement.classList.add('focused');
//         });
//         control.addEventListener('blur', function () {
//             this.parentElement.classList.remove('focused');
//         });
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !phone || !message) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        try {
            const response = await fetch('https://panvel-placement-backend.onrender.com/api/contact', {  // URL updated here
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    subject: '', // Empty since your new form has no subject field
                    message
                }),
            });

            const data = await response.json();

            if (response.ok) {
                showFormMessage(data.message || 'Message sent successfully!', 'success');
                contactForm.reset();
            } else {
                showFormMessage(data.message || 'Something went wrong. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showFormMessage('Failed to send message. Please try again later.', 'error');
        }
    });

    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = 'form-message ' + type;
        formMessage.style.display = 'block';

        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }

    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(control => {
        control.addEventListener('focus', function () {
            this.parentElement.classList.add('focused');
        });
        control.addEventListener('blur', function () {
            this.parentElement.classList.remove('focused');
        });
    });
});
