function init() {

    //caching as learned
    let senderName = document.querySelector("#name")
    let senderEmail = document.querySelector("#email")
    let senderSubject = document.querySelector("#subject")
    let senderMessage = document.querySelector("#Message")
    let formButton = document.querySelector("#email-button")
    // const as learned
    const serviceId = "service_ly1vvf2"
    const templateID = "template_e54tqsj"
    //function to send the email
    function sendMail(event) {
        event.preventDefault() 
        emailjs //youtube channels learnt from: code with voran, CodeEasy
        .send(serviceId,templateID, {
            name: senderName.value,
            email: senderEmail.value,
            subject: senderSubject.value,
            message: senderMessage.value })
        .then (()=>

            alert("Thanks for reaching out!! I'll get back to you as soon as possible ^_^")

        ) 
        .catch (() =>
            alert('opps .. something went wrong, please try again ^_^')
        )
    } 

    // adding an event listener ass learned
    formButton.addEventListener('click' , sendMail)
}

document.addEventListener("DOMContentLoaded", init)