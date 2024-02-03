import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";


const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState ({name: '', email: '', message: ''})
  const [isLoading, setIsLoading] = useState(false);
  const {alert, showAlert, hideAlert} = useAlert();



  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Majd Khawaldeh",
        from_email: form.email,
        to_email: "majdkhawaldeh10@gmail.com",
        message: form.message,
        
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      ()=> {
      setIsLoading(false);
      showAlert({
        show: true,
        text: "Thank you for your message 😃",
        type: "success",

    });
    setTimeout(() => {
      hideAlert(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 3000);
  }
  ).catch((error) => {
    setIsLoading(false);
    console.log(error);
    showAlert({
      show: true,
      text: "Something went wrong 😕",
      type: "danger",
    });
  });
}



  return (
<section className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
  
  {/* Assuming you have an Alert component that takes a prop 'show', uncomment if necessary */}
  {/* {alert.show && <Alert {...alert} />} */}

  <div className='w-full max-w-md px-8 py-6 m-4 bg-white rounded-lg shadow'>
    <h1 className='text-3xl font-semibold text-center mb-6'>Get in Touch</h1> 

    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label className='block mb-2 text-sm font-medium text-gray-700'>
          Name
        </label>
        <input
          type='text'
          name='name'
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50'
          placeholder='John Doe'
          required
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className='block mb-2 text-sm font-medium text-gray-700'>
          Email
        </label>
        <input
          type='email'
          name='email'
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50'
          placeholder='example@gmail.com'
          required
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className='block mb-2 text-sm font-medium text-gray-700'>
          Your Message
        </label>
        <textarea
          name='message'
          rows={4}
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50'
          placeholder='Let us know how we can help!'
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <button
  type='submit'
  disabled={isLoading}
  style={{ backgroundColor: isLoading ? '#a02820' : '#a02820' }}
  className='w-full px-4 py-3 text-sm font-medium text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75'
>
  {isLoading ? "Sending..." : "Submit"}
</button>
    </form>
  </div>
</section>

  );
};

export default Contact;