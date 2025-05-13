// If migrating away from Firebase, follow these steps:
// 1. Remove the firebase.js file.
// 2. Remove all the Firebase imports.
// 3. Replace the current signup logic with the new authentication method (e.g., custom backend with JWT).
// 4. Update error handling to match the new provider's error codes and messages.

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaHome } from "react-icons/fa";
import SignupPageImage from "../../assets/signup-page-image.png";

const SignupPage = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
        
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Validates the Name field
    const validateName = () => {
        if (!name.trim()) {
          setNameError("Name is required.");
          return false;
        } else {
          setNameError("");
          return true;
        }
      };
    
      // Validates the Email field with regex
      const validateEmail = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
          setEmailError("Email is required.");
          return false;
        } else if (!emailPattern.test(email)) {
          setEmailError("Enter a valid email.");
          return false;
        } else {
          setEmailError("");
          return true;
        }
      };
    
      // Validates Password length (minimum 6 characters)
      const validatePassword = () => {
        if (!password) {
          setPasswordError("Password is required.");
          return false;
        } else if (password.length < 6) {
          setPasswordError("Password must be at least 6 characters.");
          return false;
        } else {
          setPasswordError("");
          return true;
        }
      };
    
    // Handles form submission and user registration with Firebase
    const handleSignup = async () => {
        setError("");
        setSuccess("");

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        const isFormValid = isNameValid && isEmailValid && isPasswordValid;
        if (!isFormValid) return;   // Don't proceed if validation fails

        try {
            await createUserWithEmailAndPassword(auth, email, password);    // Create new user in Firebase
            setSuccess("Account created successfully!");
            setTimeout(() => navigate("/"), 1000);  // Redirect to homepage after 1 sec
        } catch (error) {
            console.error("Error creating account:", error);
            if (error.code === "auth/email-already-in-use") {
                setError("Email already in use. Please use a different email.");
            } else {
                setError("Failed to create account. Please try again.");
            }
        }
    };

    return (
        <div className="flex h-screen">

            {/* Home Icon Button */}
            <button 
                className="absolute top-4 left-4 text-dark-signup z-20 cursor-pointer" 
                onClick={() => navigate('/')}
            >
                <FaHome size={24} />
            </button>


            {/* Left side: Signup form */}
            <div className="bg-light-blue w-full lg:w-1/2 flex flex-col items-start justify-center max-lg:gap-12 lg:justify-between p-10 sm:p-20 overflow-auto">

                {/* Header  */}
                <div className="flex flex-col items-start justify-center gap-4">
                    <h1 className="font-black text-4xl sm:text-7xl text-dark-signup">Sign up</h1>
                    <h2 className="text-[#235015] text-xl sm:text-4xl">Create your account.</h2>
                </div>
                
                {/* Form Fields */}
                <div className="flex flex-col items-start justify-center gap-6 w-full sm:mb-8">

                    {/* Name Field */}
                    <div className="flex flex-col items-start justify-center gap-2 w-full max-w-2xl">
                        <label className="input-field-label">Name</label>
                        <input
                            type="text"
                            className={`input-field ${nameError ? "border-red-500" : ""}`}
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onBlur={validateName}   // Validate field when user leaves input (onBlur)
                        />
                        {nameError && <p className="text-red-600 text-xs sm:text-sm">{nameError}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col items-start justify-center gap-2 w-full max-w-2xl">
                        <label className="input-field-label">Email</label>
                        <input
                            type="email"
                            className={`input-field ${emailError ? "border-red-500" : ""}`}
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={validateEmail}  // Validate field when user leaves input (onBlur)
                        />
                        {emailError && <p className="text-red-600 text-xs sm:text-sm">{emailError}</p>}
                    </div>

                    {/* Password Field */}
                    <div className="flex flex-col items-start justify-center gap-2 w-full max-w-2xl">
                        <label className="input-field-label">Password</label>
                        <input
                            type="password"
                            className={`input-field ${passwordError ? "border-red-500" : ""}`}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={validatePassword}   // Validate field when user leaves input (onBlur)
                        />
                        {passwordError && <p className="text-red-600 text-xs sm:text-sm">{passwordError}</p>}
                    </div>

                    {error && <p className="text-red-600 text-xs sm:text-sm">{error}</p>}
                    {success && <p className="text-green-600 text-xs sm:text-sm">{success}</p>}

                    <button
                        className="btn bg-dark-signup px-8 sm:mt-3 max-sm:text-sm"
                        onClick={handleSignup}
                    >
                        Sign up
                    </button>
                </div>

                {/* Bottom Text */}
                <p className="text-dark-signup max-sm:text-sm font-medium">
                    Already have an account?{" "}
                    <a href="/login" className="font-black text-[#235015]">Log in</a>
                </p>
            </div>

            {/* Right side: Image */}
            <img
                src={SignupPageImage}
                alt="University of Guelph Johnston Green Image"
                className="w-1/2 h-full object-cover object-center hidden lg:block"
            />
        </div>
    );
};

export default SignupPage;
