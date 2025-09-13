function init() {

    //caching as learned
    let senderName = document.querySelector("#name")
    let senderEmail = document.querySelector("#email")
    let senderSubject = document.querySelector("#subject")
    let senderMessage = document.querySelector("#message")
    let formButton = document.querySelector("#email-button")
    let form = document.querySelector("#form")
    let backToTop = document.querySelector("#backToTopBtn")
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
        .catch (() => {
            alert('opps .. something went wrong, please try again')
        }
        )
    } 

    // copied from W3schools a few edits of my own
    window.onscroll = function(){scroll()}
    backToTop.style.display = "none"
    // console.log(window)
    function scroll() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            backToTop.style.display = "block"
        } else {
            backToTop.style.display = "none"
        }
    }

    function toTop() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

    function emailVal() {
        if (senderName.value === '') {
            return false
        }else if (senderEmail.value === '' || !senderEmail.value.includes("@") || !senderEmail.value.includes(".")) {
            return false
        } else if (senderSubject.value === '') {
            return false
        } else if (senderMessage.value === '') {
            return false
        }
        return true
    }

    backToTop.addEventListener('click', toTop)

    // adding an event listener ass learned
    formButton.addEventListener('click' , (event) => {
        event.preventDefault()
        if(emailVal()){
            sendMail(event)
        }
    })
}

document.addEventListener("DOMContentLoaded", init)