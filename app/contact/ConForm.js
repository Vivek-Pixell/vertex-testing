'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Swal from 'sweetalert2';

const ConForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredTeam: '',
    message: '',
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredTeam: '',
    message: '',
  });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = 'First Name is required.';
    if (!formData.lastName.trim())
      newErrors.lastName = 'Last Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (formData.phone.length < 10) {
      newErrors.phone = 'Phone Number must be at least 10 digits.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    if (!formData.preferredTeam) {
      newErrors.preferredTeam = 'Choose a preferred team';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // ✅ Returns `true` if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log(formData);

    try {
      setIsLoading(true);
      const response = await axios.post('/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // ✅ Show success notification
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'We will get back to you shortly.',
          confirmButtonColor: '#22c55e',
        });

        // ✅ Reset form data after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          preferredTeam: '',
          message: '',
        });
        setIsLoading(false);
        setErrors({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);

      // ❌ Show error notification
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to send message. Please try again later.',
        confirmButtonColor: '#ef4444',
      });

      setIsLoading(false);
    }
  };

  console.log('formdataaa', formData);

  return (
    <div className="w-full py-32">
      <div className=" px-4  md:px-24 xl:px-40">
        <div className=" lg:p-12 relative z-50">
          <div className="absolute inset-0 h-full">
            <Image
              src="/images/imagebg123.webp"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="z-0 w-fit rounded-4xl"
            />
          </div>
          <div className=" relative z-50">
            <div>
              <h2 className=" md:text-4xl lg:text-5xl text-3xl font-semibold md:tracking-tight md:leading-[65px] text-gray-900 mb-6">
                Get In Touch
              </h2>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className=" flex flex-col gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className=" border w-full placeholder-gray-500 placeholder:font-light border-gray-300 rounded-xl px-6 py-3 "
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border w-full placeholder-gray-500 placeholder:font-light border-gray-300 rounded-xl px-6 py-3"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="border w-full placeholder-gray-500 placeholder:font-light border-gray-300 rounded-xl px-6 py-3"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="border w-full placeholder-gray-500 placeholder:font-light border-gray-300 rounded-xl px-6 py-3"
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                      if (value.length <= 10) {
                        setFormData({ ...formData, phone: value });
                      }
                    }}
                    onKeyDown={(e) => {
                      if (
                        e.key === 'e' ||
                        e.key === 'E' ||
                        e.key === '+' ||
                        e.key === '-' ||
                        e.key === '.'
                      ) {
                        e.preventDefault(); // Prevent non-numeric input
                      }
                    }}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className=" flex flex-col gap-6">
                <div>
                  <select
                    className="border w-full placeholder-gray-500 font-light border-gray-300 rounded-xl px-6 py-3"
                    value={formData.preferredTeam}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferredTeam: e.target.value,
                      })
                    }
                  >
                    <option value="" disabled>
                      Preferred Team For Assistance
                    </option>
                    <option value="sales">Sales</option>
                    <option value="procurement">Procurement</option>
                    <option value="vendorOnboarding">Vendor Onboarding</option>
                    <option value="ipOnboarding">
                      Installation Partner Onboarding
                    </option>

                    <option value="afterSales">After Sales</option>
                    <option value="hiring">Hiring</option>
                    <option value="affilationPartnership">
                      Affiliation and Partnership
                    </option>
                    <option value="other">Other</option>
                  </select>
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">
                      {errors.preferredTeam}
                    </p>
                  )}
                </div>

                <div className=" flex-1">
                  <textarea
                    placeholder="Write Message"
                    className="border w-full h-full placeholder-gray-500 placeholder:font-light border-gray-300 rounded-xl px-6 py-4"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center mt-8 z-50 relative">
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="relative cursor-pointer flex items-center gap-2 bg-[#5EB652] text-white font-medium px-12 md:px-40 py-3 rounded-full
            "
            >
              <span>{isLoading ? 'Sending...' : 'Send Message'}</span>

              <svg
                width="21"
                height="13"
                viewBox="0 0 21 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0566 7.56348L15.1816 12.4385C14.7246 12.9336 13.9248 12.9336 13.4678 12.4385C12.9727 11.9814 12.9727 11.1816 13.4678 10.7246L16.248 7.90625H2.15625C1.4707 7.90625 0.9375 7.37305 0.9375 6.6875C0.9375 5.96387 1.4707 5.46875 2.15625 5.46875H16.248L13.4678 2.68848C12.9727 2.23145 12.9727 1.43164 13.4678 0.974609C13.9248 0.479492 14.7246 0.479492 15.1816 0.974609L20.0566 5.84961C20.5518 6.30664 20.5518 7.10645 20.0566 7.56348Z"
                  fill="white"
                />
              </svg>
              {isLoading && (
                <CircularProgress
                  size={30}
                  color="success"
                  className="absolute top-2.5 right-3.5"
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConForm;
