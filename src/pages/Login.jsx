// import React, { useState } from "react";
// import { FaEnvelope } from "react-icons/fa";

// const LoginForm = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [showPassword, setShowPassword] = useState(false);
//     const [rememberMe, setRememberMe] = useState(false);
//     const [emailError, setEmailError] = useState("");
//     const [passwordError, setPasswordError] = useState("");

//     const validateEmail = (email) => {
//         // Basic email validation regex
//         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return re.test(String(email).toLowerCase());
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         let isValid = true;

//         // Validate Email
//         if (!validateEmail(email)) {
//             setEmailError("Please enter a valid email address.");
//             isValid = false;
//         } else {
//             setEmailError("");
//         }

//         // Validate Password
//         if (password.length < 6) {
//             setPasswordError("Password should be at least 6 characters long.");
//             isValid = false;
//         } else {
//             setPasswordError("");
//         }

//         // If everything is valid, proceed
//         if (isValid) {
//             console.log({ email, password, rememberMe });
//             // Handle further form submission logic (e.g., API calls)
//         }
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
//             <div className="bg-white p-8 rounded-md shadow-lg max-w-md  w-[694px]">
//                 <h2 className="text-[28px] font-bold mb-4 text-left">
//                     Welcome to BrandName
//                 </h2>
//                 <p className="text-gray-500 text-left mb-6 text-[18px]">
//                     Kindly fill in your details to sign into your account
//                 </p>

//                 <form onSubmit={handleSubmit}>
//                     {/* Email Input */}
//                     <div className="mb-4">
//                         <label className="block text-gray-700 mb-1 text-[18px] font-Circular Std">
//                             Enter Your Email
//                         </label>
//                         <div className="relative">
//                             <input
//                                 type="email"
//                                 className="w-full p-2 pl-10 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-[20px] font-Circularstd"
//                                 placeholder="AdminName@gmail.com"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                             <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                         </div>
//                         {emailError && (
//                             <p className="text-red-500 text-sm mt-1">
//                                 {emailError}
//                             </p>
//                         )}
//                     </div>

//                     {/* Password Input */}
//                     <div className="mb-4">
//                         <label className="block text-gray-700 mb-1 text-[18px] font-Circular Std">
//                             Enter Password
//                         </label>
//                         <div className="relative">
//                             <input
//                                 type={showPassword ? "text" : "password"}
//                                 className="w-full p-2 pl-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-[20px] font-Circular Std"
//                                 placeholder="********"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                             <button
//                                 type="button"
//                                 onClick={() => setShowPassword(!showPassword)}
//                                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-#172B4D focus:outline-none underline text-[16px]"
//                             >
//                                 {showPassword ? "Hide" : "Show"}
//                             </button>
//                         </div>
//                         {passwordError && (
//                             <p className="text-red-500 text-sm mt-1">
//                                 {passwordError}
//                             </p>
//                         )}
//                     </div>

//                     {/* Remember Me and Reset Password */}
//                     <div className="flex items-center justify-between mb-6">
//                         <label className="inline-flex items-center">
//                             <input
//                                 type="checkbox"
//                                 className="form-checkbox h-4 w-4 text-blue-600"
//                                 checked={rememberMe}
//                                 onChange={(e) =>
//                                     setRememberMe(e.target.checked)
//                                 }
//                             />
//                             <span className="ml-2 text-#01021A text-[18px] font-Circular Std">
//                                 Keep me signed in
//                             </span>
//                         </label>
//                         <button className="text-#172B4D focus:outline-none underline font-Circular Std text-[18px]">
//                             Reset Password
//                         </button>
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                         type="submit"
//                         className={`w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 text-[24px] ${
//                             !email || !password
//                                 ? "opacity-50 cursor-not-allowed"
//                                 : ""
//                         }`}
//                         disabled={!email || !password}
//                     >
//                         Login
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default LoginForm;

import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isEmailActive, setIsEmailActive] = useState(false);
    const [isPasswordActive, setIsPasswordActive] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

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
            setEmailError("Please enter a valid email address.");
            isValid = false;
        } else {
            setEmailError("");
        }

        // Validate Password
        if (!validatePassword(password)) {
            setPasswordError("Password must be at least 6 characters.");
            isValid = false;
        } else {
            setPasswordError("");
        }

        // If everything is valid, proceed
        if (isValid) {
            console.log({ email, password });
            // Handle form submission (API call or other logic)
        }
    };

    const handleFocus = (field) => {
        if (field === "email") setIsEmailActive(true);
        if (field === "password") setIsPasswordActive(true);
    };

    const handleBlur = (field) => {
        if (field === "email" && !email) setIsEmailActive(false);
        if (field === "password" && !password) setIsPasswordActive(false);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-md shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-2">
                    Welcome to BrandName
                </h2>
                <p className="text-gray-500 mb-6">
                    Kindly fill in your details to sign into your account
                </p>

                <form onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div className="mb-6 relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            id="email"
                            className={`w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ${
                                isEmailActive || email ? "pt-5" : "pt-2"
                            } text-gray-900`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => handleFocus("email")}
                            onBlur={() => handleBlur("email")}
                        />
                        <label
                            htmlFor="email"
                            className={`absolute left-10 transition-all text-gray-500 cursor-text bg-white px-1 ${
                                isEmailActive || email
                                    ? "text-xs -top-3"
                                    : "text-base top-1/2 transform -translate-y-1/2"
                            }`}
                        >
                            Enter Your Email
                        </label>
                        {emailError && (
                            <p className="text-red-500 text-sm mt-1">
                                {emailError}
                            </p>
                        )}
                    </div>

                    {/* Password Input */}
                    <div className="mb-6 relative">
                        <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className={`w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ${
                                isPasswordActive || password ? "pt-5" : "pt-2"
                            } text-gray-900`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => handleFocus("password")}
                            onBlur={() => handleBlur("password")}
                        />
                        <label
                            htmlFor="password"
                            className={`absolute left-10 transition-all text-gray-500 cursor-text bg-white px-1 ${
                                isPasswordActive || password
                                    ? "text-xs -top-3"
                                    : "text-base top-1/2 transform -translate-y-1/2"
                            }`}
                        >
                            Enter Password
                        </label>
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 focus:outline-none"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                        {passwordError && (
                            <p className="text-red-500 text-sm mt-1">
                                {passwordError}
                            </p>
                        )}
                    </div>

                    {/* Remember Me and Reset Password */}
                    <div className="flex items-center justify-between mb-6">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2 text-gray-700">
                                Keep me signed in
                            </span>
                        </label>
                        <button className="text-blue-500 focus:outline-none">
                            Reset Password
                        </button>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
