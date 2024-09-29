import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { admin_login } from '../../store/Reducers/authReducer'; // Assuming admin_login is your login action
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Eye icons

const AdminLogin = () => {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Redux dispatch hook
  const dispatch = useDispatch();

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

    // Dispatch the login action
    dispatch(admin_login(formData))
      .then((response) => {
        // Handle successful login response here
        console.log('Login successful', response);
      })
      .catch((err) => {
        // Handle error response here
        console.error('Login failed', err);
        setError('Login failed, please try again');
      });

    // Reset form inputs after submission
    setEmail('');
    setPassword('');
  };


  return (
    <div className='fixed inset-0 bg-[#FCFCFC] flex justify-center items-center overflow-hidden px-4'>
      <div className='w-full sm:w-[90%] md:w-[80%] lg:w-[50%] xl:max-w-md text-[#000000] rounded-md shadow-md'>
        <div className='bg-[rgb(255,255,255)] p-6'>
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
        </div>
      </div>
    </div>
  );
};

export default AdminLogin
