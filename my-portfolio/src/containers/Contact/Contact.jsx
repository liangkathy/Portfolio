import Button from "../../components/Button/Button";

import { useContext, useRef, useState } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { BsExclamationCircle } from "react-icons/bs";
import emailjs from '@emailjs/browser';
import './Contact.css'


const Contact = () => {
    const {theme} = useContext(ThemeContext)
    const form = useRef()
    const nameInput = useRef()
    const emailInput = useRef()
    const messageInput = useRef()
    const [nameError, setNameError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [messageError, setMessageError] = useState(null)
    const [sendError, setSendError] = useState(null)
    const [isMessageSent, setIsMessageSent] = useState()

    const validateForm = (e) => {
        e.preventDefault();
        const name = nameInput.current.value
        const email = emailInput.current.value
        const message = messageInput.current.value
        const isValidEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        let formIsValid = true;

        if (name.trim() == "" ) {
            setNameError("Name must be filled out")
            formIsValid = false;
        } else {
            setNameError(null)
        }

        if (email.trim() == "") {
            setEmailError("Email must be filled out")
            formIsValid = false
        } else if (!isValidEmail.test(email)) {
            setEmailError("Must be a valid email address")
            formIsValid = false
        } else {
            setEmailError(null)
        }

        if (message.trim() == "") {
            setMessageError("Message must be filled out")
            formIsValid = false
        } else {
            setMessageError(null)
        }
  
        if (formIsValid) {
            sendEmail()
        }
    }

    const sendEmail = () => {
        emailjs
          .sendForm('service_5859o2f', 'template_p54n2vc', form.current, {
            publicKey: 'LjcrPQJvNzzJRFcnK',
          })
          .then(
            () => {
              setIsMessageSent(true)
              setSendError(null)
              nameInput.current.value = ""
              emailInput.current.value = ""
              messageInput.current.value = ""
            },
            (error) => {
              setIsMessageSent(false)
              setSendError("Error sending email")
            },
          );

      }

    return (
        <section id="contact" className={`contact-section contact-${theme}`}>
            <div>
                <h3>Contact</h3>
                
            {
                isMessageSent ? <div>Message sent. Thank you for reaching out to me!</div> :
                <>
                    {
                        sendError && <div className={`error-${theme} error`}><BsExclamationCircle />{sendError}</div>
                    }
                    <form id="contact-form" ref={form} className={`${theme}`}>
                        {
                            nameError && <div className={`error-${theme} error`}><BsExclamationCircle />{nameError}</div>
                        }
                        <input type="text" name="name" placeholder="Name" required ref={nameInput}/>
                        {
                            emailError && <div className={`error-${theme} error`}><BsExclamationCircle />{emailError}</div>
                        }
                        <input type= "email" name="email" placeholder="Email" required ref={emailInput}/>
                        {
                            messageError && <div className={`error-${theme} error`}><BsExclamationCircle />{messageError}</div>
                        }
                        <textarea name="message" placeholder="Message" required ref={messageInput} rows="10"></textarea>
                        <Button text={"Send email"} onClick={validateForm} className={"contact-submit"}/>
                    </form>
                </>
            }

                
            </div>

        </section>
    )
}

export default Contact