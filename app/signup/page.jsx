// Import necessary libraries
'use client'
import React, { useState } from "react";
import * as yup from 'yup';
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Define the RegisterPage component
const RegisterPage = () => {
  // State variables for name, email, and password inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const router = useRouter();

  // Event handler for name input
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Event handler for email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Event handler for password input
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Event handler for register button
  const handleRegister = async () => {
    try {
      // Set loading to true during registration process
      setIsLoading(true);

      // Simulate an asynchronous registration process
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Your registration logic here
      toast.success("Registration successful");

      // Redirect to login page after successful registration
      router.push('/login');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      // Set loading to false after registration process
      setIsLoading(false);
    }
  };

  // Define the validation schema and initial values
  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email("Email must be valid").required('Email is required'),
    password: yup.string().min(6, "Password must be greater than 6 characters").required('Password is required'),
  });

  const initialValues = {
    name: '',
    email: '',
    password: ''
  };

  // JSX structure for the RegisterPage component
  return (
    <form validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleRegister}>
      <div className="flex items-center justify-center h-screen bg-[#f5f5f5]">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md mx-4" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold tracking-tight text-2xl text-center">Create an Account</h3>
            <p className="text-sm text-muted-foreground text-center">Enter your details below to register.</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">Name</label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="name"
                placeholder="Your Full Name"
                required
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Email</label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">Password</label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="password"
                placeholder="Enter your password"
                required
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className="items-center p-6 flex flex-col space-y-2">
            <button
              type="submit"
              onClick={handleRegister}
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
            <Link href="/login" className="text-sm text-center text-blue-500 hover:underline">Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterPage;
