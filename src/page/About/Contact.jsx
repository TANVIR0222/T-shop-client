import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
            setSuccess(true);
            form.current.reset();
            alert('Your message has been sent successfully!')
        },
        (error) => {
            setError(true);
        }
      );
  };

  

  

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact page || Tanvir</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 mt-16">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Get in Touch
          </h1>
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="mt-1 block w-full px-4 py-2 border hover:border-black focus:outline-none rounded-md shadow-sm  sm:text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="mt-1 block w-full px-4 py-2 border hover:border-black focus:outline-none rounded-md shadow-sm  sm:text-sm"
                placeholder="Your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                name="user_message"
                className="mt-1 block w-full px-4 py-2 border hover:border-black focus:outline-none rounded-md shadow-sm  sm:text-sm"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-slate-900 text-white px-4 py-2 rounded-md focus:outline-none "
            >
              Send Message
            </button>
            {/* {success && (
              <span className="text-green-600 font-semibold">
                Your message has been sent successfully!
              </span>
            )} */}
            {error && (
              <span className="text-red-600 font-semibold">
                Something went wrong!
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
