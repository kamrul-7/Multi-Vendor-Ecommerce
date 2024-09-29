import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous error messages
    setError('');

    // Validation for empty fields
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    // Check if the passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Check if the user has agreed to the terms
    if (!isChecked) {
      setError('You must agree to the terms and conditions');
      return;
    }

    // If no errors, submit the form values
    const formData = {
      name,
      email,
      password,
      termsAccepted: isChecked,
    };

    console.log('Form Submitted:', formData);

    // Clear form fields after successful submission
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setIsChecked(false);
  };

  return (
    <div className='min-h-screen bg-[#FCFCFC] flex justify-center items-center px-4'>
      <div className='w-full max-w-md bg-white shadow-md rounded-md p-6 lg:mt-12'>
        <h2 className='text-xl font-semibold text-center mb-6'>
          Create your <span className='font-medium'>Shopizo</span> account
        </h2>
        <form onSubmit={handleSubmit}>
        <div className='flex justify-center items-center'>
            <div>
              <img className='w-[200px]' src="http://localhost:3000/images/Logo.png" alt="image" />
            </div>
          </div>
          {/* Full Name */}
          <div className='flex flex-col w-full gap-1 mb-4'>
            <label htmlFor='name'>Full name</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Ex: John Doe'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className='text-sm px-3 py-2 border rounded-sm bg-[#F5F5F5] focus:outline-none focus:border-black'
            />
          </div>

          {/* Email */}
          <div className='flex flex-col w-full gap-1 mb-4'>
            <label htmlFor='email'>Enter Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='john@gmail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='text-sm px-3 py-2 border rounded-sm bg-[#F5F5F5] focus:outline-none focus:border-black'
            />
          </div>

          {/* Password */}
          <div className='flex flex-col w-full gap-1 mb-4'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='********'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='text-sm px-3 py-2 border rounded-sm bg-[#F5F5F5] focus:outline-none focus:border-black'
            />
          </div>

          {/* Confirm Password */}
          <div className='flex flex-col w-full gap-1 mb-4'>
            <label htmlFor='confirm-password'>Confirm password</label>
            <input
              type='password'
              id='confirm-password'
              name='confirmPassword'
              placeholder='********'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className='text-sm px-3 py-2 border rounded-sm bg-[#F5F5F5] focus:outline-none focus:border-black'
            />
          </div>

          {/* Terms and Conditions */}
          <div className='flex items-center mb-4'>
            <input
              type='checkbox'
              id='terms'
              name='terms'
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className='mr-2'
            />
            <label htmlFor='terms' className='text-sm'>
              I agree to the{' '}
              <Link to='/terms' className='text-blue-600 hover:underline'>
                terms and conditions
              </Link>
            </label>
          </div>
          {/* Error Message */}
          {error && (
            <div className='mb-4 text-red-500 text-sm'>
              <p>{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-opacity'
          >
            Create Account
          </button>
        </form>

        {/* Sign In Link */}
        <div className='mt-4 text-center'>
          <p className='text-sm'>
            Already have an account?{' '}
            <Link to='/login' className='text-blue-600 hover:underline'>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
