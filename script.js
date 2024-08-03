/*const frmEmail = document.getElementById('contact-form');
frmEmail.addEventListener('submit', sendEmail);
const serviceID = 'service_h2pe896';
const templeteID = 'template_ug8fvm7';
const apiKey = 'uJhDq9OESz_YrI9vH'

function sendEmail(event){
    console.log('chupelo')
    event.preventDefault()
    emailjs.init(apiKey)
    emailjs.sendForm(serviceID, templeteID, frmEmail)
    .then(result => {
        Swal.fire("tu mensaje se ha enviado con exito !")
    })
    .catch ((Error)=> {
        Swal.fire({
            icon: 'Error', 
            title : 'Oopss...',
            text : 'Hubo un error por culpa de santi'
        })
    })
}*/

const form = document.getElementById('contact-form');
form.addEventListener('submit', sendEmail);
const serviceId = 'service_h2pe896';
const templateId = 'template_ug8fvm7';
const apiKey = 'uJhDq9OESz_YrI9vH';

function sendEmail(event) {
    event.preventDefault();
    
    emailjs.init(apiKey);
    
    emailjs.sendForm(serviceId, templateId, form)
        .then(result => {
            Swal.fire("Su mensaje se ha enviado con éxito");
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Hubo un error al enviar el mensaje, inténtelo más tarde"
            });
        });
}

