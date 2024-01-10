// Import necessary modules and components
'use client'
import Link from "next/link";
import { useState } from "react";

// Define the ForgotPasswordPage component
const ForgotPasswordPage = () => {
  // State variable for the email input
  const [email, setEmail] = useState("");

  // Event handler for email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Event handler for sending a password reset email
  const handleResetPassword = () => {
    // Implement logic to send a password reset email
    // You can use a service or API for sending password reset emails
    // Handle the response or errors accordingly
    console.log(`Password reset email sent to ${email}`);
  };

  // JSX structure for the ForgotPasswordPage component
  return (
    <div className="flex items-center justify-center h-screen bg-[#f5f5f5]">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md mx-4" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold tracking-tight text-2xl text-center">Forgot Your Password?</h3>
          <p className="text-sm text-muted-foreground text-center">Enter your email address to reset your password.</p>
        </div>
        <div className="p-6 space-y-4">
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
        </div>
        <div className="items-center p-6 flex flex-col space-y-2">
          <button
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-sm">Remember your password?</span>
            <Link href="/login" className="text-sm text-blue-500 hover:underline">Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
