import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/75ddde10-5179-11ec-85ac-d56a41b9ab46"; 

const ContactForm = () => {


  return (
    <form
      action={FORM_ENDPOINT}
      
      method="POST"
      target="_blank"
    >
      <div className="contactForm">
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div>
        <button type="submit"> Send a message </button>
      </div>
    </form>
  );
};

export default ContactForm;