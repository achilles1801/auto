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
    
    <section className="bg-gray-100 min-h-screen p-8" style={{ fontFamily: "'Bebas Neue', cursive" }}>
    <main>
      <div className="flex items-center justify-center mb-4">
  <div className="w-24 h-1 bg-red-600"></div>
  <span className="px-4 text-md mx-2 text-gray-700">Contact Us</span>
  <div className="w-24 h-1 bg-red-600"></div>
</div>
<h2 className="text-3xl font-semibold text-center mb-4 relative pt-2">
  <span className="bg-gray-100 text-[#AF1414] text-4xl">Get </span>
  <span className="bg-gray-100  text-4xl">in touch</span>
</h2>

    </main>
<div className="bg-gray-100 min-h-screen p-8 " style={{fontFamily: "'Bebas Neue', cursive"  }}>
  

  {/* Contact Form */}
  <section className="w-full max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">


    <form className="space-y-4">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
          placeholder="John Doe"
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
          placeholder="example@gmail.com"
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Your Message
        </label>
        <textarea
          name="message"
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
          placeholder="Let us know how we can help!"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-3 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
      >
        Submit
      </button>
    </form>
  </section>
</div>
</section>


  );
};

export default Contact;