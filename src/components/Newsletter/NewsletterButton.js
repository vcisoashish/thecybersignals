'use client';

import { useState, useEffect, useRef } from 'react';

const NewsletterButton = ({ 
  className = "bg-accent text-white px-4 py-1.5 rounded text-xs hover:bg-accent/90 transition-colors",
  text = "Subscribe",
  source = "button",
  showInput = false,
  inputPlaceholder = "Enter your email"
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [email, setEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(showInput);
  const inputRef = useRef(null);

  // Handle focus after component mounts to avoid hydration issues
  useEffect(() => {
    if ((showInput || showEmailInput) && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showEmailInput, showInput]);

  const handleSubscribe = async (emailToSubmit) => {
    if (!emailToSubmit) {
      setSubmitMessage('Please enter your email address');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailToSubmit)) {
      setSubmitMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailToSubmit,
          source: source
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage('Successfully subscribed! Thank you for joining our community.');
        setEmail('');
        if (!showInput) {
          setShowEmailInput(false);
        }
      } else {
        setSubmitMessage(result.message || 'Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setSubmitMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleButtonClick = () => {
    if (showInput || showEmailInput) {
      handleSubscribe(email);
    } else {
      setShowEmailInput(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe(email);
    }
  };

  if (showInput || showEmailInput) {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={inputPlaceholder}
            className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent"
            disabled={isSubmitting}
            suppressHydrationWarning={true}
          />
          <button
            onClick={handleButtonClick}
            disabled={isSubmitting}
            className={`${className} disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isSubmitting ? 'Subscribing...' : text}
          </button>
        </div>
        
        {submitMessage && (
          <p className={`text-xs text-center ${
            submitMessage.includes('Successfully') 
              ? 'text-green-600 dark:text-green-400' 
              : 'text-red-500'
          }`}>
            {submitMessage}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleButtonClick}
        disabled={isSubmitting}
        className={`${className} disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {isSubmitting ? 'Loading...' : text}
      </button>
      
      {submitMessage && (
        <p className={`text-xs text-center ${
          submitMessage.includes('Successfully') 
            ? 'text-green-600 dark:text-green-400' 
            : 'text-red-500'
        }`}>
          {submitMessage}
        </p>
      )}
    </div>
  );
};

export default NewsletterButton;