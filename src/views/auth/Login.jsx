import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Eye icons
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'; // Google icon

const Login = () => {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear error messages
    setError('');

    // Validate form inputs
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Simulate form submission
    const formData = {
      email,
      password,
    };
    console.log('Form submitted successfully:', formData);

    // Reset form inputs after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className='fixed inset-0 bg-[#FCFCFC] flex justify-center items-center overflow-hidden px-4'>
      <div className='w-full sm:w-[90%] md:w-[80%] lg:w-[50%] xl:max-w-md text-[#000000] rounded-md shadow-md'>
        <div className='bg-[#FFFFFF] p-6'>
          <h2 className='text-xl mb-3 font-sans text-center'>
            Login to <span className='font-medium'>Shopizo</span>
          </h2>
          <div className='flex justify-center items-center'>
            <div>
              <img className='w-[200px]' src="http://localhost:3000/images/Logo.png" alt="image" />
            </div>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='email'>Enter Email</label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Enter Email'
                required
                className='text-sm px-3 py-2 outline-none border bg-[#F5F5F5] rounded-md focus:border-black'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div className='flex flex-col w-full gap-1 mb-4 relative'>
              <label htmlFor='password'>Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password'
                placeholder='Enter Password'
                required
                className='text-sm px-3 py-2 outline-none border bg-[#F5F5F5] rounded-sm focus:border-black w-full'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-9 text-gray-600 focus:outline-none'
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>

            {/* Error Message */}
            {error && <p className='text-red-500 text-sm mb-3'>{error}</p>}

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full py-2 bg-[#000000] text-white rounded-md hover:bg-[#333]'
            >
              Login
            </button>
          </form>

          {/* Sign in with Google */}
          <div className='mt-4'>
            <button
              type='button'
              className='w-full py-2 flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100'
            >
              <FcGoogle size={24} />
              <span>Sign in with Google</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className='mt-4 text-center'>
            <p className='text-sm'>
              Don't have an account?{' '}
              <Link to='/register' className='text-[#525252] font-medium hover:underline'>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
