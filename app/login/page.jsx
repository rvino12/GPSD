
'use client'
import Link from "next/link";
import { useState } from "react";
import * as yup from 'yup'
import {toast} from "react-hot-toast";
import { useRouter } from "next/navigation";
// Define the LoginPage component



const LoginPage = () => {


  // State variables for email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  
  // Event handler for email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Event handler for password input
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Event handler for login button
  const handleLogin = () => {
    // Implement login functionality
  };

const validationSchema = yup.object ({
  email:yup.string().email("email must be valid"),
  password:yup.string().min(6,"Password must be graeater than 6 character").required('password is required'),
}) 
const initialValue = {
  email:'',
  password:''
}
const onSubmitHandler =(e,{resetform})=>{
  try {
     toast.success("form submit");
     resetform()
     router.push('/');
  } catch (error) {
    toast.error(error?.response?.data?.message)
    
  }

}
  // JSX structure for the LoginPage component
  return (
    <form validationSchema={validationSchema} initialValue={initialValue} onSubmit={onSubmitHandler}>
    <div className="flex items-center justify-center h-screen bg-[#f5f5f5]">
 
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md mx-4" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold tracking-tight text-2xl text-center">Welcome Back!</h3>
          <p className="text-sm text-muted-foreground text-center">Enter your details below to continue.</p>
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
           onClick={handleLogin}
          >
            Login
          </button>
          <Link href="/forget" className="text-sm text-center text-blue-500 hover:underline">Forgot Password?
          </Link>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-sm">Don't have an account?</span>
            <Link href="/signup"  className="text-sm text-blue-500 hover:underline">Sign up
            </Link>
          </div>
        </div>
      </div>

    </div>
    </form>
  );
};

export default LoginPage;