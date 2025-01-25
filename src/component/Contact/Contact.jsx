import React from "react";
import { useForm } from "@formspree/react";
import '../Contact/Contact.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; 

function Contact() {
  const [state, handleSubmit] = useForm("xnnjnqgo");

  if (state.succeeded) {
    return <p className="success-message">Thanks for contacting us!</p>;
  }

  return (
    <div>
      <div className="cn01">
        <h1>CONTACT</h1>
      </div>
      <div className="ico">
        <FontAwesomeIcon icon={faStar} size="5x" color="#FFD700" />
      </div>
      <div className="contact-container">
      
      <form className="fs-form" onSubmit={handleSubmit}>
      <div className="fs-row">
  <div className="fs-field">
    <input
      className="fs-input1"
      id="name"
      name="name"
      placeholder="Divya K"
    />
  </div>
  <div className="fs-field">
    <input
      className="fs-input2"
      id="email"
      name="email"
      placeholder="divyak@xyz.com"
      required
    />
  </div>
</div>

        <div className="fs-field">
          
          <textarea
            className="fs-textarea"
            id="message"
            name="message"
            placeholder="Write your message here..."
          />
          <p className="fs-description">
            We usually respond within 1-2 business days.
          </p>
        </div>
        <div className="fs-button-group">
          <button className="fs-button" type="submit" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
    <div className="free">
      <h1>Free feel to contact me</h1>
      <p>Perundurai,Erode,TamilNadu</p>
    </div>
    <div className="mail">
      <p>divyakrishnamoorthi05@gmail.com</p>
      <p>+91 6374939491</p>
    </div>
    <div className="spav"></div>
    </div>
    
  );
}
export default Contact
