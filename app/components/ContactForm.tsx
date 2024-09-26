import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null); // Initialize with null
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStateMessage(null); // Reset message

    try {
      // email is linked to emailjs acc for operations email, details are on the password database
      const result = await emailjs.sendForm('service_8ty54mt', 'template_t8t0zc9', form.current!, 'P4WMs7TMx12asCi2G');
      console.log(result.text);
      setStateMessage("Message sent successfully!");
    } catch (error) {
      console.error(error.text);
      setStateMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-Aldrich bg-black">
      <div className="flex flex-wrap justify-center items-center mt-5">
        <h2 className='font-Aldrich flex flex-wrap justify-center items-center mt-5 text-green'>Email Us</h2>
      </div>
      <form ref={form} onSubmit={sendEmail} className="px-20">
        <div className="flex flex-wrap justify-center items-center mt-5">
          <div className="flex flex-col justify-left mt-5 md:mr-10">
            <label className="text-white">First Name*</label>
            <input
              className="border bg-black h-10 w-50 md:w-60"
              style={{ borderColor: "#acf601" }}
              type="text"
              name="first_name" 
              required
            />
          </div>
          <div className="flex flex-col justify-left mt-5">
            <label className="text-white">Last Name*</label>
            <input
              className="border bg-black h-10 w-50 md:w-60"
              style={{ borderColor: "#acf601" }}
              type="text"
              name="last_name" 
              required
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-left mt-5">
            <label className="text-white">E-mail*</label>
            <input
              className="border h-10 w-60 md:w-120"
              style={{
                backgroundColor: "black",
                color: "white",
                borderColor: "#acf601",
              }}
              type="email"
              name="email" 
              required
            />
          </div>

          <div className="flex flex-col justify-left mt-5">
            <label htmlFor="message" className="text-white">Message*</label>
            <textarea
              className="border min-h-20 w-60 md:w-120"
              style={{
                backgroundColor: "black",
                color: "white",
                borderColor: "#acf601",
              }}
              name="message"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center mt-10">
          <button
            type="submit"
            className="px-5 py-2 rounded-md border-2 bg-green text-black border-black font-bold"
            disabled={isSubmitting} // Disable button while submitting
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {stateMessage && (
          <div className="mt-5 text-center text-white">{stateMessage}</div>
        )}
      </form>
    </div>
  );
};