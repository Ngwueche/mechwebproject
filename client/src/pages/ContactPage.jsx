import React, { useState } from 'react'
import heroImage from "../img/site_images/service-hero.jpg"
import Footer from '../Footer';
import { useInView } from 'react-intersection-observer';
import ContactCards from '../ContactCards';
import axios from 'axios';




export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstNameError: "",
    lastNameError: "",
    phoneError: "",
    emailError: "",
    subjectError: "",
    messageError: "",
  });

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3 });

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstNameError = "Please enter a valid name.";
      valid = false;
    }
    if (!formData.lastName.trim()) {
      errors.lastNameError = "Please enter a valid name.";
      valid = false;
    }

    if (!formData.phone.trim()) {
      errors.phoneError = "Please enter a valid phone number.";
      valid = false;
    } else if (!/^\d{11}$/.test(formData.phone.trim())) {
      errors.phoneError = "Please enter a valid 11 digit phone number.";
      valid = false;
    }

    if (!formData.email.trim()) {
      errors.emailError = "Please enter a valid email address.";
      valid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        formData.email.trim()
      )
    ) {
      errors.emailError = "Please enter a valid email address.";
      valid = false;
    }

    if (!formData.subject.trim()) {
      errors.subjectError = "Please enter the subject of your enquiry.";
      valid = false;
    }
    if (!formData.message.trim()) {
      errors.messageError = "Please enter a message.";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
    axios.post('/contact',{firstName, lastName, phone, email, subject, message})
  }
}

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (inView && !isVisible) {
    setIsVisible(true);
  }
  return (
    <div>
      <div className=' mx-auto grow bg-gray-900'>
        <div className='relative h-[60vh] md:h-[100vh] flex flex-col justify-center shadow-lg overflow-hidden'>
          <div className='absolute inset-0'>
            <img
              className='relative w-full h-full object-cover bg-no-repeat'
              src={heroImage}
              alt='Hero'
            />
            <div className='absolute  inset-0 bg-gradient-to-r from-black to-transparent opacity-85' />
          </div>
          <div className='absolute container mx-auto py-24 px-12'>
            <h1 className='md:text-5xl text-2xl font-bold text-white mb-6 '>
              We are Just a Call Away
            </h1>
            <p className='text-lg leading-[2rem]  text-gray-100 md:text-3xl md:leading-[3rem]  md:max-w-2xl'>
              {" "}
              Our customer service team will respond in a
              <span className='text-[#fdd028]'> flash</span>.
            </p>
          </div>
        </div>
      </div>
      <div
        className={` transition-all duration-1000 ${
          isVisible
            ? "transform translate-y-0 opacity-100"
            : "transform translate-y-10 opacity-0"
        }`}
        ref={ref}
      >
        <ContactCards />
      </div>

      <section className='px-8 bg-black'>
        <div class='flex  justify-center py-20 '>
          <form class='w-full max-w-lg text-white' onSubmit={handleSubmit}>
            <div class='mx-auto'>
              <div class='grid md:grid-cols-2 gap-4'>
                <div>
                  <label class='block mb-2'>First Name</label>
                  <input
                    class='w-full border bg-[#151515] rounded-md border-gray-300 p-2'
                    placeholder='First Name'
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {formErrors.firstNameError && <p className='text-red-500 text-sm'>{formErrors.firstNameError}</p>}
                </div>
                <div>
                  <label class='block mb-2'>Last Name</label>
                  <input
                    class='w-full border bg-[#151515] rounded-md border-gray-300 p-2'
                    placeholder='Last Name'
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {formErrors.lastNameError && <p className='text-red-500 text-sm'>{formErrors.lastNameError}</p>}
                </div>
                <div>
                  <label class='block mb-2'>Phone</label>
                  <input
                    class='w-full border bg-[#151515] rounded-md border-gray-300 p-2'
                    placeholder='Phone'
                    type='number'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {formErrors.phoneError && <p className='text-red-500 text-sm'>{formErrors.phoneError}</p>}
                </div>
                <div>
                  <label class='block mb-2'>Email</label>
                  <input
                    class='w-full border bg-[#151515] rounded-md border-gray-300 p-2'
                    placeholder='Email'
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.emailError && <p className='text-red-500 text-sm'>{formErrors.emailError}</p>}
                </div>
              </div>
              <div className=' mt-4'>
                <label class='block mb-2'>Subject</label>
                <input
                  class='w-full border bg-[#151515] rounded-md border-gray-300 p-2'
                  placeholder='Subject'
                  type='text'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                />
                {formErrors.subjectError && <p className='text-red-500 text-sm'>{formErrors.subjectError}</p>}
              </div>
              <div className='w-full mt-4'>
                <label className='block mb-2'>Message</label>
                <textarea
                  className='w-full h-[12rem] bg-[#151515] rounded-md  border-gray-300 p-2'
                  placeholder='Write You Message Here.'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {formErrors.messageError && <p className='text-red-500 text-sm'>{formErrors.messageError}</p>}
              </div>
            </div>
            <button type='submit' className='px-4 py-2 mt-2 border w-[25%] bg-[#fdd028] hover:bg-transparent'>
              Submit
            </button>
          </form>
        </div>
      </section>
      <hr />
      <Footer />
    </div>
  );
}
