document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('checkoutForm');
    const paymentMethodRadios = document.querySelectorAll('input[name="paymentMethod"]');
    const creditCardInfo = document.getElementById('creditCardInfo');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const cardNumberInput = document.getElementById('cardNumber');
    const cvvInput = document.getElementById('cvv');

    paymentMethodRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'creditCard') {
                creditCardInfo.style.display = 'block';
            } else {
                creditCardInfo.style.display = 'none';
            }
        });
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePhone(phone) {
        const re = /^\d{10}$/; 
        return re.test(String(phone));
    }

    function validateCardNumber(number) {
        const re = /^\d{16}$/;
        return re.test(String(number));
    }

    function validateCVV(cvv) {
        const re = /^\d{3}$/;
        return re.test(String(cvv));
    }



    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;

        if (!validateEmail(emailInput.value)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        if (!validatePhone(phoneInput.value)) {
            alert('Please enter a valid phone number.');
            isValid = false;
        }

        if (creditCardInfo.style.display !== 'none') {
            if (!validateCardNumber(cardNumberInput.value)) {
                alert('Please enter a valid 16-digit card number.');
                isValid = false;
            }

            if (!validateCVV(cvvInput.value)) {
                alert('Invalid CVV. Please enter a 3-digit CVV.');
                isValid = false;
            }

        }

        if (isValid) {
            alert('Thank you for your order!');
        }
    });
});
