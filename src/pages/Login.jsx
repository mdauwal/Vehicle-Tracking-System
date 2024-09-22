import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [isPasswordActive, setIsPasswordActive] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  // Email Validation (simple regex for basic email format)
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password Validation (minimum 6 characters)
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate Email
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate Password
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    // If everything is valid, proceed
    if (isValid) {
      console.log({ email, password });
      navigate('/dashboard');
      // Handle form submission (API call or other logic)
    }
  };

  const handleFocus = (field) => {
    if (field === 'email') setIsEmailActive(true);
    if (field === 'password') setIsPasswordActive(true);
  };

  const handleBlur = (field) => {
    if (field === 'email' && !email) setIsEmailActive(false);
    if (field === 'password' && !password) setIsPasswordActive(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full sm:w-96">
        <h2 className="font-bold mb-2 text-2xl text-[#091E42]">
          Welcome to BrandName
        </h2>
        <p className="mb-6 text-sm text-[#6B778C]">
          Kindly fill in your details to sign into your account
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-6 relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#172B4D]" />
            <input
              type="email"
              id="email"
              className={`w-full text-lg text-[#172B4D] pl-10 pb-6 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ${
                isEmailActive || email ? 'pt-5' : 'pt-2'
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
            />
            <label
              htmlFor="email"
              className={`absolute left-10 transition-all cursor-text bg-white px-1 text-lg text-[#172B4D] ${
                isEmailActive || email
                  ? 'text-xs -top-3'
                  : 'text-base top-1/2 transform -translate-y-1/2'
              }`}
            >
              Enter Your Email
            </label>
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#172B4D]" />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className={`w-full pl-10 pb-6 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-lg text-[#172B4D] ${
                isPasswordActive || password ? 'pt-5' : 'pt-2'
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => handleFocus('password')}
              onBlur={() => handleBlur('password')}
            />
            <label
              htmlFor="password"
              className={`absolute left-10 transition-all cursor-text bg-white px-1 text-lg text-[#172B4D] ${
                isPasswordActive || password
                  ? 'text-xs -top-3'
                  : 'text-base top-1/2 transform -translate-y-1/2'
              }`}
            >
              Enter Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none text-sm text-[#0C0C0C] underline"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          {/* Remember Me and Reset Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-lg text-[#01021A]">
                Keep me signed in
              </span>
            </label>
            <button className="focus:outline-none text-[#172B4D] text-lg underline">
              Reset Password
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0747A6] text-xl text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
