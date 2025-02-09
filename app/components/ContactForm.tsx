import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { GoogleAnalytics } from '@next/third-parties/google';

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
    } catch (error:any) {
      console.error(error.text);
      setStateMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <div className="font-Aldrich bg-black">
      <div className="flex flex-wrap justify-center items-center mt-5">
        <h2 className='font-Aldrich flex flex-wrap justify-center items-center mt-5 underline decoration-green decoration-4'>Email Us</h2>
      </div>
      <form ref={form} onSubmit={sendEmail} className="px-20">
        <div className="flex flex-wrap justify-center items-center mt-5">
          <div className="flex flex-col justify-left mt-5 md:mr-10">
            <label className="text-white text-left pl-4">First Name*</label>
            <input
              className="border text-black bg-white px-2 h-10 w-50 md:w-60"
              style={{ borderRadius: 10 }}
              type="text"
              name="first_name" 
              required
            />
          </div>
          <div className="flex flex-col justify-left mt-5">
            <label className="text-white text-left pl-4">Last Name*</label>
            <input
              className="border text-black bg-white px-2 h-10 w-50 md:w-60"
              style={{ borderRadius: 10 }}
              type="text"
              name="last_name" 
              required
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-left mt-5">
            <label className="text-white text-left pl-4">E-mail*</label>
            <input
              className="border text-black bg-white px-2 h-10 w-60 md:w-120"
              style={{ borderRadius: 10 }}
              type="email"
              name="email" 
              required
            />
          </div>

          <div className="flex flex-col justify-left mt-5">
            <label htmlFor="message" className="text-white text-left pl-4">Message*</label>
            <textarea
              className="border text-black bg-white px-2 py-2 h-10 w-60 md:w-120 sm:h-full min-h-[150px] sm:w-full resize-none"
              style={{ borderRadius: 10 }}
              name="message"
              required
              placeholder='Write a message here !'
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center mt-10">
          <button
            type="submit"
            className="px-5 py-2 rounded-md border-2 bg-green text-black border-black font-bold hover:bg-black hover:text-white hover:border-white"
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
    </>
  );
};