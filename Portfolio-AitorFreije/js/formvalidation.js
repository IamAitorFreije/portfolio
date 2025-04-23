document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.forms');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Clear previous error messages
        clearErrors();

        // Validar nombre
        if (!nameInput.value.trim()) {
            showError('nameError', 'El campo "nombre" es obligatorio');
            isValid = false;
        }

        // Validar Mail
        if (!emailInput.value.trim()) {
            showError('emailError', 'El campo "Email" es obligatorio');
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            showError('emailError', 'La dirección de correo no es valido');
            isValid = false;
        }

        if (isValid) {
            form.submit();
        }
    });

    function validateEmail(email) {
        return email.includes('@');
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.color = 'red';
    }

    function clearErrors() {
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
    }
});