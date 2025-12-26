"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage('Thank you for your inquiry! We\'ll respond within 24 hours.');
        reset();
      } else {
        setSubmitMessage(result.message || 'Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 w-full max-w-md"
    >
      <div className="space-y-4">
        {/* Name Field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-dark dark:text-light mb-1">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                     bg-light dark:bg-dark text-dark dark:text-light text-sm
                     focus:border-accent dark:focus:border-accentDark focus:outline-none
                     placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          {errors.name && (
            <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>
          )}
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-dark dark:text-light mb-1">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            placeholder="your.email@company.com"
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address"
              }
            })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                     bg-light dark:bg-dark text-dark dark:text-light text-sm
                     focus:border-accent dark:focus:border-accentDark focus:outline-none
                     placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>
          )}
        </div>

        {/* Service Type */}
        <div className="flex flex-col">
          <label htmlFor="service" className="text-sm font-medium text-dark dark:text-light mb-1">
            Service Interest *
          </label>
          <select
            id="service"
            {...register("service", { required: "Please select a service" })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                     bg-light dark:bg-dark text-dark dark:text-light text-sm
                     focus:border-accent dark:focus:border-accentDark focus:outline-none"
          >
            <option value="">Select service...</option>
            <option value="security-assessment">Security Assessment</option>
            <option value="penetration-testing">Penetration Testing</option>
            <option value="incident-response">Incident Response</option>
            <option value="compliance">Compliance & Risk</option>
            <option value="cloud-security">Cloud Security</option>
            <option value="ai-security">AI Security</option>
            <option value="consulting">Security Consulting</option>
            <option value="other">Other</option>
          </select>
          {errors.service && (
            <span className="text-red-500 text-xs mt-1">{errors.service.message}</span>
          )}
        </div>

        {/* Project Details */}
        <div className="flex flex-col">
          <label htmlFor="details" className="text-sm font-medium text-dark dark:text-light mb-1">
            Message *
          </label>
          <textarea
            id="details"
            {...register("details", { required: "Please provide details" })}
            placeholder="Describe your cybersecurity needs..."
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                     bg-light dark:bg-dark text-dark dark:text-light text-sm
                     focus:border-accent dark:focus:border-accentDark focus:outline-none
                     placeholder:text-gray-500 dark:placeholder:text-gray-400 resize-none"
          />
          {errors.details && (
            <span className="text-red-500 text-xs mt-1">{errors.details.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-dark dark:bg-light text-light dark:text-dark 
                   font-medium py-2.5 px-4 rounded-md text-sm
                   hover:bg-gray-800 dark:hover:bg-gray-200 
                   transition-colors duration-300
                   focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accentDark
                   disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitMessage && (
          <div className={`text-sm text-center p-2 rounded ${
            submitMessage.includes('Thank you') 
              ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20' 
              : 'text-red-500 bg-red-50 dark:bg-red-900/20'
          }`}>
            {submitMessage}
          </div>
        )}

        <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
          We&apos;ll respond within 24 hours.
        </p>
      </div>
    </form>
  );
}
