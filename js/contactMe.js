(function(){
    emailjs.init("user_hjPQvThNWiLpxLwBavpB7");
})();

let msgSentCont= document.getElementById('msg-sent-container');

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('contact_service', 'contact_form', this);
        msgSentCont.classList.add('visible');
    });
    msgSentCont.addEventListener('click', () => {msgSentCont.classList.remove('visible')});
};