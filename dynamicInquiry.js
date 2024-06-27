document.addEventListener('DOMContentLoaded', function() {
    const inquirySelect = document.getElementById('inquiry');
    const formGroup = inquirySelect.closest('.form-group'); 

    inquirySelect.addEventListener('change', function() {
        const previouslyAdded = document.getElementById('additionalField');
        if (previouslyAdded) {
            previouslyAdded.remove();
        }

        if (this.value === 'order') {
            const orderNumberInput = createInputField('orderNumber', 'Order Number', 'Enter your order number');
            formGroup.parentNode.insertBefore(orderNumberInput, formGroup.nextSibling); 
        } else if (this.value === 'employment') {
            const qualificationInput = createTextArea('qualifications', 'Brief Description of Qualifications', 'Describe your qualifications');
            formGroup.parentNode.insertBefore(qualificationInput, formGroup.nextSibling);
        }
    });

    function createInputField(id, label, placeholder) {
        const wrapper = document.createElement('div');
        wrapper.className = 'form-group'; 
        wrapper.id = 'additionalField';
        const labelElement = document.createElement('label');
        labelElement.htmlFor = id;
        labelElement.textContent = label;
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.id = id;
        inputElement.name = id;
        inputElement.placeholder = placeholder;
        wrapper.appendChild(labelElement);
        wrapper.appendChild(inputElement);
        return wrapper;
    }

    function createTextArea(id, label, placeholder) {
        const wrapper = document.createElement('div');
        wrapper.className = 'form-group'; 
        wrapper.id = 'additionalField';
        const labelElement = document.createElement('label');
        labelElement.htmlFor = id;
        labelElement.textContent = label;
        const textAreaElement = document.createElement('textarea');
        textAreaElement.id = id;
        textAreaElement.name = id;
        textAreaElement.placeholder = placeholder;
        wrapper.appendChild(labelElement);
        wrapper.appendChild(textAreaElement);
        return wrapper;
    }
});