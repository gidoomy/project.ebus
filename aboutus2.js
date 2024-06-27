document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.value-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
        });

        card.addEventListener('mouseleave', () => {
            card.querySelector('.card-inner').style.transform = 'rotateY(0deg)';
        });
    });
})

document.addEventListener('DOMContentLoaded', () => {
    const testimonials = [
        { text: "Absolutely love the quality of the T-shirts, and the prints are super vibrant! A must-have for every wardrobe.", author: "Ali Mohamed" },
        { text: "The customer service was fantastic, and the delivery was faster than expected. Highly recommend From My Side!", author: "Ayman EL-Araby" },
        { text: "I ordered a custom T-shirt for a family event, and it was a hit! Great material and print quality, I told All My Friends.", author: "Hany EL-Morshedy " },
        { text: "T-Shirt World really knows how to cater to their customers' needs. The variety is incredible and the quality is top-notch.", author: "Nour Ahmed" },
        { text: "Been a repeat customer for a year now, and I've never been disappointed. The designs are unique and the fit is perfect every time.", author: "Laila Bakr" }
    ];

    let currentTestimonialIndex = 0;

    const testimonialText = document.getElementById('testimonial-text');
    const testimonialAuthor = document.getElementById('testimonial-author');

    function displayTestimonial(index) {
        const testimonial = testimonials[index];
        testimonialText.textContent = testimonial.text;
        testimonialAuthor.textContent = testimonial.author;
    }

    function nextTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        displayTestimonial(currentTestimonialIndex);
    }

    displayTestimonial(currentTestimonialIndex); 
    setInterval(nextTestimonial, 3000); 
});