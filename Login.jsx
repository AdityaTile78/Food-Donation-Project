// Login.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle the Google Sign-In response, e.g., send it to your server for authentication
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <form>
          {/* Your existing login form */}
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input
              type='email'
              placeholder='Enter Email'
              id='email'
              name='email'
              className='form-control rounded-0'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input
              type='password'
              placeholder='Enter Password'
              id='password'
              name='password'
              className='form-control rounded-0'
            />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Log in</strong></button>
        </form>

        {/* Google Sign-In button */}
        <div className='mt-3'>
          <GoogleLogin
            clientId="433378165559-75o7datpra684i4viqrb8obpke58c1bh.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
