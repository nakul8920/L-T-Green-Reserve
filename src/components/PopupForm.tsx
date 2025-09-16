import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X, User, Phone, MessageCircle, CheckCircle, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { submitLeadToAppsScript } from "@/lib/utils";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    number: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    number: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset form when popup opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', number: '' });
      setErrors({ name: '', number: '' });
      setIsFlipped(false);
    }
  }, [isOpen]);

  const validateForm = () => {
    const newErrors = { name: '', number: '' };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    // Phone number validation
    if (!formData.number.trim()) {
      newErrors.number = 'Phone number is required';
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(formData.number.replace(/\D/g, ''))) {
      newErrors.number = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'number') {
      // Only allow numbers and limit to 10 digits
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, number: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await submitLeadToAppsScript({ name: formData.name.trim(), number: formData.number.trim(), source: 'popup' });
      
      // Flip the card to show thank you message
      setIsFlipped(true);
      setIsSubmitting(false);
      
      // Change URL to /thank-you
      navigate('/thank-you');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md h-[500px] perspective-1000">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        {/* Card Container with Flip Animation */}
        <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}>
          
          {/* Front Face - Form */}
          <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-gold p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="/logo1.png"
                  alt="L&T Green Reserve"
                  className="h-8 w-auto drop-shadow-lg"
                />
                <div>
                  <h2 className="text-xl font-bold">Get Exclusive Details</h2>
                  <p className="text-sm text-white/90">Fill in your details to receive personalized information</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 placeholder:text-gray-400 text-gray-900 ${
                      errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                    }`}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.name && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone Number Field */}
              <div className="space-y-2">
                <label htmlFor="number" className="block text-sm font-semibold text-gray-700">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    placeholder="Enter your 10-digit phone number"
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 placeholder:text-gray-400 text-gray-900 ${
                      errors.number ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                    }`}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.number && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                    {errors.number}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-gold text-white hover:from-primary/90 hover:to-gold/90 font-semibold py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>Submit Details</span>
                  </div>
                )}
              </Button>

              {/* Privacy Note */}
              <p className="text-xs text-gray-500 text-center">
                Your information is secure and will only be used to provide you with project details.
              </p>
            </form>
          </div>

          {/* Back Face - Thank You Message */}
          <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-green-50 via-white to-gold/10 rounded-2xl shadow-2xl overflow-hidden rotate-y-180">
            {/* Success Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="/logo1.png"
                  alt="L&T Green Reserve"
                  className="h-8 w-auto drop-shadow-lg"
                />
                <div>
                  <h2 className="text-xl font-bold">Thank You!</h2>
                  <p className="text-sm text-white/90">Your details have been submitted successfully</p>
                </div>
              </div>
            </div>

            {/* Thank You Content */}
            <div className="p-6 flex flex-col items-center justify-center h-full text-center space-y-6">
              {/* Success Icon */}
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-6 h-6 text-gold animate-pulse" />
                </div>
              </div>

              {/* Thank You Message */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-800">
                  Thank You, {formData.name.trim()}!
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your submission has been received successfully. Our team will contact you soon at 
                  <span className="font-semibold text-primary"> {formData.number}</span>.
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-primary/10 to-gold/10 rounded-xl p-4 w-full">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>What happens next?</strong>
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Our sales team will call you within 24 hours</li>
                  <li>• You'll receive exclusive project details</li>
                  <li>• Schedule a personalized site visit</li>
                </ul>
              </div>

              {/* Close Button */}
              <Button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-primary to-gold text-white hover:from-primary/90 hover:to-gold/90 font-semibold py-3 rounded-lg transition-all duration-200"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
