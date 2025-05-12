// If migrating away from Firebase, follow these steps:
// 1. Remove the firebase.js file.
// 2. Remove all the Firebase imports.
// 3. Replace the current login logic with the new authentication method (e.g., custom JSON Web Token).
// 4. Update error handling to match the new provider's error codes and messages.

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'; // Remove this import if moving away from Firebase
import { signInWithEmailAndPassword } from 'firebase/auth'; // Remove this import if moving away from Firebase
import { FaHome } from 'react-icons/fa'; 

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const [success, setSuccess] = useState('');

    const handleLogin = async () => {
        setError(''); 
        setSuccess(''); 

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
        if (!emailPattern.test(email)) {
            setError('Please enter a valid email address.'); 
            return; 
        }

        // Check if password is empty
        if (password.trim() === '') {
            setError('Password cannot be empty.'); 
            return; 
        }

        try {
            await signInWithEmailAndPassword(auth, email, password); // Authenticate the user
            setSuccess('Login successful!'); 
            setTimeout(() => {
                navigate('/'); 
            }, 1000); // Redirect to homepage after 1 sec
        } catch (error) {
            console.error("Error logging in:", error);
            // Handle specific Firebase errors
            if (error.code === 'auth/wrong-password') {
                setError('Incorrect password. Please try again.'); 
            } else if (error.code === 'auth/user-not-found') {
                setError('No user found with this email.'); 
            } else {
                setError('Invalid credentials. Please check your email and password.'); 
            }
        }
    };

    return (
        <div 
            className="flex items-center justify-center min-h-screen bg-cover bg-center relative px-4 sm:px-6" 
            style={{ 
                backgroundImage: "url('/src/assets/login-background.jpg')", 
                overflow: 'hidden' 
            }}
        >
            <div className="absolute inset-0 bg-[#4E695C] opacity-70"></div>

            <button 
                className="absolute top-4 left-4 text-white z-20 cursor-pointer" 
                onClick={() => navigate('/')}
            >
                <FaHome size={24} />
            </button>

            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg px-6 py-8 w-full max-w-[20rem] sm:max-w-sm relative z-10 mx-auto">
                <h1 className="text-4xl sm:text-5xl font-black text-left mb-4 text-[#2B4131] mt-3">Login</h1> 
                <h2 className="text-xl sm:text-2xl text-left mb-4 text-[#2B4131]">Welcome Back!</h2>
                
                {error && <div className="text-red-500 mb-4">{error}</div>} 
                {success && <div className="text-green-500 mb-4">{success}</div>} 

                <label className="block text-base sm:text-lg font-medium text-[#2B4131] text-left">Email</label>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-[#F2F2E8]" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update the email state
                />
                
                <label className="block text-base sm:text-lg font-medium text-[#2B4131] text-left mt-4">Password</label>
                <input 
                    type="password" 
                    placeholder="Enter your password" 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-[#F2F2E8]" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update the password state
                />
                <a href="#" className="block text-sm text-right text-[#2B4131] mt-2 font-medium">Forgot password?</a>
                
                <button 
                    className="mt-6 w-full bg-[#2B4131] text-white py-2 rounded-md cursor-pointer hover:bg-[#3B5A4A]" 
                    onClick={handleLogin} // Call handleLogin on button click
                >
                    Login
                </button>
                <p className="text-sm text-left text-[#2B4131] mt-10">Don't have an account? <a href="/signup" className="text-[#3f554a] font-bold">Sign up</a></p>
            </div>
        </div>
    );
};

export default LoginPage;
