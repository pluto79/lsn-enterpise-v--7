
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_nzit827';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Message sent! Our team will get back to you shortly.');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
})

/*Scroll SPY*/ 
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
})

const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))

/*Modal script*/ 
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})